import { useMemo } from "react";
import { GithubIcon, LinkedinIcon } from "~/src/ui/icons";
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
      <nav className={headerStyles.nav}>
        <ul className={headerStyles.navLang}>
          <li className={headerStyles.navLangLink}>EN</li>
          <li className={headerStyles.navLangLink}>JP</li>
        </ul>
        <ul className={headerStyles.navSns}>
          {headerLinks.map((props) => (
            <HeaderLinkItem key={props.href} {...props} />
          ))}
        </ul>
      </nav>
    </header>
  );
};
