"use client"

import styles from "@/styles/header.module.css";
import Link from "next/link";
import Burger from "./Burger";

const Header = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <Link href={"/"}>
          <h1>Horeca Solution</h1>
        </Link>
      </div>
      <div className={styles.menu}>
        <ul>
          <li>
            <Link href={"/"}>home</Link>
          </li>
          <li>
            <Link href={"/contact"}>contact</Link>
          </li>
        </ul>
        
      </div>
      <Burger/>
    </div>
  );
};

export default Header;
