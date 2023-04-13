import { footerStyle } from "./Footer.css";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={footerStyle.footer}>
      <small>{`Copyright © ${year} Shota Karato - built with React.js`}</small>
    </footer>
  );
};
