import { GithubIcon, LinkedinIcon } from "../../ui/icons";
import { HeaderLink } from "./HeaderLink";

export const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-lang header__nav-list">
          <li>EN</li>
          <li>JP</li>
        </ul>
        <ul className="header__nav-sns header__nav-list">
          <li className="header__nav-sns-item">
            <HeaderLink href="https://github.com/ShotaKarato">
              <GithubIcon />
            </HeaderLink>
          </li>
          <li className="header__nav-sns-item">
            <HeaderLink href="https://www.linkedin.com/in/shota-karato">
              <LinkedinIcon />
            </HeaderLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
