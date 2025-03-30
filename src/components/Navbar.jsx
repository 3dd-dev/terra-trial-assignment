import React from "react";
import styles from "./Navbar.module.css";
import logoDark from "/logo-w.svg";

function Navbar({ navbarData }) {
  return (
    <nav className={styles.navbar}>
      <picture>
        <source media="(prefers-color-scheme: dark)" srcSet={logoDark} />
        <img className={styles.logo} src={navbarData.logo} alt="Logo" />
      </picture>
      <ul className={styles.menunavbar}>
        <li>
          <a href="#store">{navbarData.menu.menu_item_1}</a>
        </li>
        <li>
          <a href="#ourStory">{navbarData.menu.menu_item_2}</a>
        </li>
        <li>
          <a href="#journal">{navbarData.menu.menu_item_3}</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
