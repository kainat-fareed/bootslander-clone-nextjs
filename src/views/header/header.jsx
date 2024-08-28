import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const navLinks = [
  {
    item: "Home",
    path: "/",
  },
  {
    item: "About",
    path: "/about",
  },
  {
    item: "Feature",
    path: "/features",
  },
  {
    item: "Gallery",
    path: "/gallery",
  },
  {
    item: "Team",
    path: "",
  },
  {
    item: "Pricing",
    path: "",
  },
  {
    item: "Dropdown",
    path: "",
  },
  {
    item: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  return (
    <div className="hero-bg">
      <div className="custom-container">
        <header className="navbar">
          <Link className="header-logo" href="#">
            Bootslander
          </Link>
          <input type="checkbox" id="menu-toggle" className="menu-toggle" />
          <label for="menu-toggle" className="menu-icon">
            <Icon icon="mingcute:menu-fill" />
          </label>

          <ul className="nav-list">
            {navLinks.map((nav) => {
              console.log(nav?.path);
              return (
                <Link
                  href={nav?.path}
                  style={{ textDecoration: "none" }}
                  className="nav-item"
                  key={nav.item}
                >
                  <span className="nav-links">{nav?.item}</span>
                </Link>
              );
            })}
          </ul>
        </header>
      </div>
    </div>
  );
};

export default Header;
