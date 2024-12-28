import { Link } from "react-router-dom";
import "./style.scss";

export default function Navbar() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/product", label: "Product" },
    { to: "/about-us", label: "About" },
    { to: "/contact-us", label: "Contact" },
  ];

  return (
    <nav className="navbar_container">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
