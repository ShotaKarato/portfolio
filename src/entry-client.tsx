import { hydrateRoot } from "react-dom/client";
import { App } from "./App";

const entryClient = async () => {
  try {
    const app = document.getElementById("root") as HTMLElement;
    const data = JSON.parse(
      document.getElementById("portfolio-data")!.innerHTML
    ) as any;
    hydrateRoot(app, <App {...data} />);
  } catch {}
};

entryClient();
