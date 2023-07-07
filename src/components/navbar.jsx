// import { useState } from "react";
// import logo from "../assets/logo.svg"

// export default function Navbar() {
//   const [menu, setMenu] = useState(false);

//   const toggleMenu = () => {
//     setMenu(!menu);
//   };

// //   const handleClick = () => {
// //     setMenu(false);
// //   }

//   return (
//     <nav className="navBar">
//         <img className="navLogo" src={logo} alt="" />
//       <button onClick={toggleMenu}>
//         {menu ? "CLOSE" : "MENU"}
//       </button>
//       <NavList isOpen={menu} />
//     </nav>
//   );
// }

// function NavList({ isOpen }) {
//   return (
//     <ul className={`navList ${isOpen ? "open" : ""}`}>
//       <li className="navLink">
//         <a href="#about">About</a>
//       </li>
//       <li className="navLink">
//         <a href="#techStack">Tech Stack</a>
//       </li>
//       <li className="navLink">
//         <a href="#skill">Skill</a>
//       </li>
//       <li className="navLink">
//         <a href="#project">Project</a>
//       </li>
//     </ul>
//   );
// }


import { useState } from "react";
import logo from "../assets/logo.svg";

export default function Navbar() {
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
      <button onClick={toggleMenu}>{menu ? "CLOSE" : "MENU"}</button>
      <NavList isOpen={menu} closeMenu={closeMenu} />
    </nav>
  );
}

function NavList({ isOpen, closeMenu }) {
  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <ul className={`navList ${isOpen ? "open" : ""}`}>
      <li className="navLink">
        <a href="#about" 
           onClick={handleLinkClick}>
           About
        </a>
      </li>
      <li className="navLink">
        <a href="#techStack" 
           onClick={handleLinkClick}>
           Tech Stack
        </a>
      </li>
      <li className="navLink">
        <a href="#skill" 
           onClick={handleLinkClick}>
           Skill
        </a>
      </li>
      <li className="navLink">
        <a href="#project" 
           onClick={handleLinkClick}>
           Project
        </a>
      </li>
    </ul>
  );
}

