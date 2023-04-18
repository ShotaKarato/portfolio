import { ReactNode } from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

type Props = {
  readonly children: ReactNode;
};
export const Outline = ({ children }: Props) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
