import React from "react";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-lang header__nav-list">
          <li className="header__nav-lang-link header__nav-lang-link--selected">
            EN
          </li>
          <li className="header__nav-lang-link">JP</li>
        </ul>
        <ul className="header__nav-sns header__nav-list">
          <li className="header__nav-sns-item">
            <a
              href="https://github.com/ShotaKarato"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../image/sns_icon01.svg"
                alt="link: github"
                className="header__nav-sns-icon"
              />
            </a>
          </li>
          <li className="header__nav-sns-item">
            <a
              href="https://www.linkedin.com/in/shota-karato"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../image/sns_icon02.svg"
                alt="link: linkedin"
                className="header__nav-sns-icon"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
