import fs from "fs";
import path from "path";
import { writeFile } from "node:fs/promises";
import express from "express";
import { createServer as createViteServer } from "vite";
import { getContent } from "./notion/getContent";

const createServer = async () => {
  const app = express();
  const PORT = process.env.PORT ?? 5173;

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use("*", async (req, res) => {
    const url = req.originalUrl;
    try {
      let template = fs.readFileSync(
        path.resolve(__dirname, "index.html"),
        "utf-8"
      );
      template = await vite.transformIndexHtml(url, template);
      const { SSRRender } = await vite.ssrLoadModule("./src/entry-server.tsx");
      // TODO: bundle data-fetching functions all together
      const content = await getContent();

      const appHtml = await SSRRender(content);

      // TODO: figure out the bets way to share data to client-side
      await writeFile("content.json", JSON.stringify(content));
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
