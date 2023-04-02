import { ReactNode } from "react";
import { headerStyles } from "./Header.css";

type Props = {
  readonly href: string;
  readonly children: ReactNode;
};
export const HeaderLink = ({ href, children }: Props) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={headerStyles.headerNavSnsLink}
  >
    {children}
  </a>
);
