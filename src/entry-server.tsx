import ReactDOMServer from "react-dom/server";
import { App } from "./App";

export const SSRRender = async (content: any) =>
  ReactDOMServer.renderToString(<App {...content} />);
