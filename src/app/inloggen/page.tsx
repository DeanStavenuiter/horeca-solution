import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "@/styles/inloggen.module.css";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inloggen | Horeca Solution",
  description:
    "Horeca Solution: Jouw schakel naar perfecte samenwerkingen. Wij bemiddelen tussen horecazaken, catering en evenementen, en getalenteerd personeel. Ervaar vakkundigheid, passie en flexibiliteit in elke culinaire creatie. Jouw betrouwbare partner voor naadloze verbindingen.",
};

const page = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainInner}>
          <div className={styles.HeaderImageOuter}>
            <Image
              className={styles.HeaderImage}
              alt={"red currants"}
              width={1920}
              height={1130}
              src={
                "https://horeca-solution.s3.eu-north-1.amazonaws.com/fotos/currants-5270094_1920.jpg"
              }
              quality={100}
            />
            <div className={styles.titleOuter}>
              <div className={styles.title}>
                <h1>Inloggen via een digitaal systeem</h1>
                <p>OP JE SMARTPHONE UREN PLANNEN, REGISTREREN EN DECLAREREN</p>
              </div>
            </div>
          </div>
          <article className={styles.article}>
            <div className={styles.left}>
              <h3>Beschikbaarheid doorgeven</h3>
              <h1>Online goedkeuring werkuren</h1>
              <p>
                Administratie is waarschijnlijk niet jouw grootste hobby. Komt
                goed uit. Want we werken met het online planningssysteem;
                Shiftmanager. Echt superhandig en snel. Je vult je
                beschikbaarheid in en houd die informatie zelf bij. Hierdoor
                kunnen wij je meenemen in onze planning. Je gewerkte uren laat
                je aan de hand van een digitaal werkbriefje op je smartphone
                aftekenen op locatie. Ook je parkeer- en reiskosten verwerk je
                digitaal. Je hoeft ons geen factuur te sturen. Die maken wij
                elke week voor je.
              </p>
            </div>
            <div className={styles.right}>
                <h3>Log hieronder in via de button van Shiftmanager</h3>
                <div className={styles.buttonShiftManagerOuter}>
              <Link target="blank" href={"https://horecasolution.shiftmanager.pro/login"}>
                <button className={styles.buttonShiftManager}>Shiftmanager</button>
              </Link>
            </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;
