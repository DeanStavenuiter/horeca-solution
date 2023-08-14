import Image from "next/image";
import styles from "@/styles/page.module.css";
import { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import cook from "../../public/cook.jpg";
export const metadata: Metadata = {
  title: "Horeca Solution - HOME",
  description: "Created by Dean Stavenuiter",
};

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainInner}>
          <div className={styles.HeaderImageOuter}>
            <Image
              className={styles.HeaderImage}
              width={1920}
              height={1280}
              alt="Keuken plank met keuken spullen"
              src={
                "https://horeca-solution.s3.eu-north-1.amazonaws.com/fotos/restaurant-2623071_1920.jpg"
              }
              quality={100}
            />
            <div className={styles.titleOuter}>
              <div className={styles.title}>
                <h1>Koks, afwassers en meer.</h1>
                <h1>Horeca Solution levert het beste personeel!</h1>
              </div>
            </div>
          </div>
          <div className={styles.middle}>
            <div className={styles.left}>
              <div className={styles.textLeft}>
                <h3>Via ons aan het werk?</h3>
                <p>Schrijf je direct in!</p>
                <button className={styles.ctaButton}>Inschrijven!</button>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.textRight}>
                <h3>Vraag horeca personeel aan!</h3>
                <p>Extra handen nodig in uw bedrijf?</p>
                <button className={styles.ctaButton}>Ik wil personeel!</button>
              </div>
            </div>
          </div>
          <div className={styles.imageMainOuter}>
            <video
              className={styles.video}
              playsInline
              autoPlay
              muted
              loop
              width={1920}
              height={1280}
              src="https://horeca-solution.s3.eu-north-1.amazonaws.com/fotos/fire_-_57341+(1080p).mp4"
            ></video>
          </div>
          <article className={styles.homeArticle}>
            <h1>Ons personeel is erg flexibel, snel en overal inzetbaar</h1>
            <p>
              Stel je voor dat je de sleutel tot naadloze samenwerking wilt
              vinden, een partner die de brug slaat tussen jouw restaurant,
              cateringbedrijf of evenement en het juiste personeel. Welkom bij
              Horeca Solution, jouw bemiddelingsbedrijf in de horeca. Wij
              begrijpen dat de culinaire wereld draait om harmonie, precisie en
              flexibiliteit, en daarom zijn wij er om ervoor te zorgen dat de
              juiste professionals samenkomen om meesterwerken te creëren.
            </p>
            <div>
              <button className={styles.buttonOverOns}>over ons</button>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
