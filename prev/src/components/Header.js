import React, { useContext } from "react";
import { LangContext } from "../App";

export default function Header() {
  const { state, dispatch } = useContext(LangContext);
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-lang header__nav-list">
          <li
            className={
              state.lang === "en"
                ? "header__nav-lang-link header__nav-lang-link--selected"
                : "header__nav-lang-link"
            }
            onClick={() => {
              dispatch({
                type: "CHANGE_LANG_EN",
                payload: {
                  lang: "en",
                },
              });
            }}
          >
            EN
          </li>
          <li
            className={
              state.lang === "jp"
                ? "header__nav-lang-link header__nav-lang-link--selected"
                : "header__nav-lang-link"
            }
            onClick={() => {
              dispatch({
                type: "CHANGE_LANG_JP",
                payload: {
                  lang: "jp",
                },
              });
            }}
          >
            JP
          </li>
        </ul>
        <ul className="header__nav-sns header__nav-list">
          <li className="header__nav-sns-item">
            <a
              href="https://github.com/ShotaKarato"
              target="_blank"
              rel="noopener noreferrer"
              className="header__nav-sns-link"
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
              className="header__nav-sns-link"
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
