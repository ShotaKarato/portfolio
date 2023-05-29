import fs from "fs";
import path from "path";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "url";
import express from "express";
import { createServer as createViteServer } from "vite";
import { getBio } from "./getBio";

const dirname = path.dirname(fileURLToPath(import.meta.url));

const createServer = async () => {
  const app = express();
  //TODO：figure out why import.meta gives an error
  const PORT = import.meta.env.PORT ?? 5173;
  console.log(import.meta.env);
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use("*", async (req, res) => {
    const url = req.originalUrl;
    try {
      let template = fs.readFileSync(
        path.resolve(dirname, "index.html"),
        "utf-8"
      );
      template = await vite.transformIndexHtml(url, template);
      const { SSRRender } = await vite.ssrLoadModule("./src/entry-server.tsx");
      // TODO: bundle data-fetching functions all together
      const bio = await getBio();

      const appHtml = await SSRRender(bio);

      // TODO: figure out the bets way to share data to client-side
      await writeFile("bio.json", JSON.stringify(bio));
      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      console.log(e);
    }
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
};

createServer();
