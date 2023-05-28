import { hydrateRoot } from "react-dom/client";
import { App } from "./App";

const app = document.getElementById("root") as HTMLElement;
hydrateRoot(app, <App />);
