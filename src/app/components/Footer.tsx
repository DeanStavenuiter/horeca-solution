"use client";

import React from "react";
import styles from "@/styles/footer.module.css";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.nav}>
          <Link href={"/"}>home</Link>
          <Link href={"/over-ons"}>over ons</Link>
          <Link href={"/contact"}>contact</Link>
          <Link href={"/inloggen"}>inloggen</Link>
        </div>
        <div className={styles.socials}>
          <Link href={"https://www.facebook.com/profile.php?id=61550117108459"} target="blank">
            <FacebookIcon /> facebook
          </Link>
          <Link href={"https://www.instagram.com/horecasolution23/"} target="blank">
            <InstagramIcon /> instagram
          </Link>
          <Link href={"https://www.linkedin.com/in/horeca-solution-916782287/"} target="blank">
            <LinkedInIcon /> linkedin
          </Link>
        </div>
        <div className={styles.spoed}>
          <Link href={"callto:+31611868567"}>Bij spoed: +31 6 11 86 85 67</Link>
        </div>
      </div>
      <div className={styles.madeby}>
        <p>©️ Horeca Solution {year} | Created by Dean Donovan.</p>
      </div>
    </footer>
  );
};

export default Footer;
