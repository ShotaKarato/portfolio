import { headerStyles } from "./Header.css";
import { HeaderLink } from "./HeaderLink";

type IconProps = { readonly className: string };

export type Props = {
  readonly href: string;
  readonly icon: ({ className }: IconProps) => JSX.Element;
};

export const HeaderLinkItem = ({ href, icon: Icon }: Props) => (
  <li className={headerStyles.headerNavSnsItem}>
    <HeaderLink href={href}>
      <Icon className={headerStyles.headerNavSnsIcon} />
    </HeaderLink>
  </li>
);
