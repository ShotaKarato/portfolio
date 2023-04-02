import { HeaderLink } from "./HeaderLink";

export type Props = {
  readonly href: string;
  readonly icon: () => JSX.Element;
};

export const HeaderLinkItem = ({ href, icon: Icon }: Props) => (
  <li className="header__nav-sns-item">
    <HeaderLink href={href}>
      <Icon />
    </HeaderLink>
  </li>
);
