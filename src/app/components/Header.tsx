"use client";

import styles from "@/styles/header.module.css";
import Link from "next/link";
import Burger from "./Burger";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Header = () => {
  return (
    <> <Burger />
      <header className={styles.header}>
       
        <div className={styles.navbar}>
          <div className={styles.spoed}>
            <Link href={"callto:+31611868567"}>
              Bij spoed: +31 6 11 86 85 67
            </Link>
          </div>
          <div className={styles.socials}>
            <Link href={"https://www.facebook.com/profile.php?id=61550117108459"} target="blank">
              <FacebookIcon />
            </Link>
            <Link href={"https://www.instagram.com/horecasolution23/"} target="blank">
              <InstagramIcon />
            </Link>
            <Link href={"https://www.linkedin.com/in/horeca-solution-916782287/"} target="blank">
              <LinkedInIcon />
            </Link>
          </div>
          <div className={styles.navbarInner}>
            <div className={styles.logoOuter}>
              <Link href={"/"}>
                <Image
                  className={styles.logo}
                  height={250}
                  width={250}
                  alt="logo Horeca Solution"
                  src={
                    "https://horeca-solution.s3.eu-north-1.amazonaws.com/logo/Horeca_solution_munt_logo_1080x1080.png"
                  }
                ></Image>
              </Link>
            </div>
            <div className={styles.menu}>
              <ul>
                <li>
                  <Link href={"/"}>home</Link>
                </li>
                <li>
                  <Link href={"/over-ons"}>over ons</Link>
                </li>
                <li>
                  <Link href={"/contact"}>contact</Link>
                </li>
                <li>
                  <Link href={"/inloggen"}>inloggen</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
