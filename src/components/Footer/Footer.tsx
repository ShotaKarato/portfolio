export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <small>{`Copyright © ${year} Shota Karato - built with React.js`}</small>
    </footer>
  );
};
