import ReactDOMServer from "react-dom/server";
import { App } from "./App";

export const SSRRender = async (bio: any) =>
  ReactDOMServer.renderToString(<App {...bio} />);
