import { useMemo } from "react";
import { GithubIcon, LinkedinIcon } from "../../ui/icons";
import { headerStyles } from "./Header.css";
import { HeaderLinkItem, Props as HeaderLinkItemProps } from "./HeaderLinkItem";

export const Header = () => {
  const headerLinks = useMemo<HeaderLinkItemProps[]>(
    () => [
      {
        title: "Github",
        href: "https://github.com/ShotaKarato",
        icon: GithubIcon,
      },
      {
        title: "Linkedin",
        href: "https://www.linkedin.com/in/shota-karato",
        icon: LinkedinIcon,
      },
    ],
    []
  );
  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.headerNav}>
        <ul className={headerStyles.headerNavLang}>
          <li className={headerStyles.headerNavLangLink}>EN</li>
          <li className={headerStyles.headerNavLangLink}>JP</li>
        </ul>
        <ul className={headerStyles.headerNavSns}>
          {headerLinks.map((props) => (
            <HeaderLinkItem key={props.href} {...props} />
          ))}
        </ul>
      </nav>
    </header>
  );
};
