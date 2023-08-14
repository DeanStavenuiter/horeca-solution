"use client";

import styles from "@/styles/header.module.css";
import Link from "next/link";
import Burger from "./Burger";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useRouter } from "next/router";

const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.spoed}>
          <span>Bij spoed: +31 6 11 86 85 67</span>
        </div>
        <div className={styles.socials}>
          <Link href={''} target="blank">
            <FacebookIcon />
          </Link>
          <Link href={''} target="blank">
            <InstagramIcon />
          </Link>
          <Link href={''} target="blank">
            <LinkedInIcon />
          </Link>
        </div>
        <div className={styles.navbarInner}>
          <div className={styles.logoOuter}>
            <Link 
            href={"/"}>
              <Image
                className={styles.logo}
                height={250}
                width={250}
                alt="logo Horeca Solution"
                src={
                  "https://horeca-solution.s3.eu-north-1.amazonaws.com/logo/Horeca_solution_munt_logo.png"
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
          <Burger />
        </div>
      </div>
    </header>
  );
};

export default Header;
