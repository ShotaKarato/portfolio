import { hydrateRoot } from "react-dom/client";
import { App } from "./App";

const entryClient = async () => {
  try {
    const app = document.getElementById("root") as HTMLElement;
    const response = await fetch("../content.json");
    const content = await response.json();

    hydrateRoot(app, <App {...content} />);
  } catch {}
};

entryClient();
