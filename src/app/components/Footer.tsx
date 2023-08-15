"use client";

import React from "react";
import styles from "@/styles/footer.module.css";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
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
          <Link href={""} target="blank">
            <FacebookIcon /> facebook
          </Link>
          <Link href={""} target="blank">
            <InstagramIcon /> instagram
          </Link>
          <Link href={""} target="blank">
            <LinkedInIcon /> linkedin
          </Link>
        </div>
        <div className={styles.spoed}>
          <Link href={"callto:+31611868567"}>Bij spoed: +31 6 11 86 85 67</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
