import { useMemo } from "react";
import { GithubIcon, LinkedinIcon } from "../../ui/icons";
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
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-lang header__nav-list">
          <li>EN</li>
          <li>JP</li>
        </ul>
        <ul className="header__nav-sns header__nav-list">
          {headerLinks.map((props) => (
            <HeaderLinkItem key={props.href} {...props} />
          ))}
        </ul>
      </nav>
    </header>
  );
};
