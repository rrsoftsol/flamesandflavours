import Link from "next/link";
import { Fragment, useState } from "react";

const DeskTopMenus = () => {
  return (
    <nav className="main-menu desktop-menu">
      <ul>
        <li className="menu-item">
          <Link href="/">Home</Link>
        </li>
        <li className="menu-item">
          <Link href="/menu">Menu</Link>
        </li>
        <li className="menu-item">
          <Link href="/about">Our Brand Story</Link>
        </li>
        <li className="menu-item">
          <Link href="/franchise">Franchise</Link>
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
          <Link href="/">Home</Link>
        </li>
        <li className="menu-item has-children">
          <Link href="menu">Menu</Link>
        </li>
        <li className="menu-item">
          <Link href="about">Our Brand Story</Link>
        </li>
        <li className="menu-item">
          <Link href="franchise">Franchise</Link>
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
