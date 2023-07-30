import styles from "@/styles/burger.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const Burger = () => {
  const [active, setActive] = useState<Boolean | null>(null);

  function toggleActive() {
    if (active === null) {
      setActive(true);
    } else {
      setActive((prevActive) => !prevActive);
    }
  }

  useEffect(() => {
    setActive(null);
  }, []);

  return (
    <div className={styles.mobileMenu}>
      <input
        type="checkbox"
        id="menuToggle"
        className={styles.menuToggle}
        onClick={toggleActive}
      />
      <label htmlFor="menuToggle">
        <svg
          className={`${styles.hamburger} ${styles.hamRotate} ${styles.ham4} 
          ${active ? styles.active : ""}
          `}
          viewBox="0 0 100 100"
          width="40"
        >
          <path
            className={`${styles.line}  ${styles.top}`}
            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
          />
          <path
            className={`${styles.line}  ${styles.middle}`}
            d="m 70,50 h -40"
          />
          <path
            className={`${styles.line} ${styles.bottom}`}
            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
          />
        </svg>
      </label>
      {active !== null && (
        <div
          className={`${styles.mobileDropdown}  ${
            active ? styles.slideIn : styles.slideOut
          }`}
        >
          <div>
            <ul className={styles.ul}>
              <li>
                <Link href={"/"}>home</Link>
              </li>
              <li>
                <Link href={"/contact"}>contact</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Burger;
