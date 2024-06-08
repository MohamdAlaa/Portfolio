import "./footer.css";
const Footer = () => {
  return (
    <footer id="footer" className="flex">
      <ul className="flex">
        <li>
          <a href="#hero">About</a>
        </li>
        <li>
          <a href="#main">Projects</a>
        </li>
      </ul>
      <p>© 2024 Mohamed Alaa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
