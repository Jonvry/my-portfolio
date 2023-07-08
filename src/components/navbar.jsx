import { useState } from "react";
import logo from "../assets/logo.svg";

export default function Navbar({ elementIds }) {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <nav className="navBar">
      <img className="navLogo" src={logo} alt="" />
      <button className="navBtn" onClick={toggleMenu}>{menu ? "CLOSE" : "MENU"}</button>
      <NavList isOpen={menu} closeMenu={closeMenu} elementIds={elementIds} />
    </nav>
  );
}

function NavList({ isOpen, closeMenu, elementIds }) {

  const handleLinkClick = (id) => {
    closeMenu();
    scrollToElement(id);
  };

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
      element.scrollIntoView({  block: "center" });
  };

  return (
    <ul className={`navList ${isOpen ? "open" : ""}`}>
      <li className="navLink">
        <button className="btnLink" onClick={() => handleLinkClick(elementIds[1])}>About</button>
      </li>
      <li className="navLink">
        <button className="btnLink" onClick={() => handleLinkClick(elementIds[2])}>Tech Stack</button>
      </li>
      <li className="navLink">
        <button className="btnLink" onClick={() => handleLinkClick(elementIds[3])}>Skill</button>
      </li>
      <li className="navLink">
        <button className="btnLink" onClick={() => handleLinkClick(elementIds[0])}>Project</button>
      </li>
    </ul>
  );
}
