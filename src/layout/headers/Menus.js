import Link from "next/link";
import { Fragment, useState } from "react";

const DeskTopMenus = () => {
  return (
    <nav className="main-menu desktop-menu">
      <ul>
        <li className="menu-item has-children">
          <a href="/">
            Home
             
          </a>
           
        </li>
        <li className="menu-item has-children">
          <a href="/menu">
            Menu
           
          </a>
         
        </li>
        <li className="menu-item">
          <Link legacyBehavior href="/about">
            About
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeIcon = (value) => (activeMenu == value ? "sub-menu-open" : ""),
    activeSubMenu = (value) =>
      value == activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu mobile-menu">
      <ul>
        <li className="menu-item has-children">
          <a href="#" onClick={() => active("home")}>
            Home
           
          </a>
          
        </li>
        <li className="menu-item has-children">
          <a href="#" onClick={() => active("Menu")}>
            Menu
          
          </a>
          
        </li>
        <li className="menu-item">
          <Link legacyBehavior href="about">
            About
          </Link>
        </li>
       
      </ul>
    </nav>
  );
};

const Menus = () => {
  return (
    <Fragment>
      <DeskTopMenus />
      <MobileMenu />
    </Fragment>
  );
};

export default Menus;
