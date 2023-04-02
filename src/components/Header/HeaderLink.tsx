import { ReactNode } from "react";

type Props = {
  readonly href: string;
  readonly children: ReactNode;
};
export const HeaderLink = ({ href, children }: Props) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="header__nav-sns-link"
  >
    {children}
  </a>
);
