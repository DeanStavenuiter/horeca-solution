import Image from "next/image";
import styles from "@/styles/page.module.css";
import { Metadata } from "next";
import Header from "./components/Header";
import cook from "../../public/cook.jpg";
export const metadata: Metadata = {
  title: "Horeca Solution - HOME",
  description: "Created by Dean Stavenuiter",
};

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <article className={styles.homeArticle}>
          <h1>Horeca Solution.</h1>
          <p>
            Horeca Solution is een bemiddelaar/uitzendbureau voor restaurants,
            partijen en evenementen. Onze kracht ligt in het plaatsen van horeca
            personeel
          </p>
          <p>
            Voor ons is werken in de horeca topsport en draait het om snel
            schakelen.
          </p>
          <p>
            Horeca Solution levert bij strenge selectie daarom alleen maar
            medewerkers die de passie hebben voor het vak, flexibel zijn en
            makkelijk (mee) schakelen!
          </p>
          <p>
            Sedert april 2022, zijn we het avontuur begonnen, in bemiddelen en
            uitzenden van horeca personeel. Dit doen we iedere dag met veel
            passie en toewijding! Onze medewerkers zijn ervaren, flexibel en
            springen in waar er nood aan de man is. Dit kan bijvoorbeeld voor
            een dag. Maar ook voor een lange periode.
          </p>
          <p>Ook bemiddelen we in hulp-koks, basis-koks, koks en chef-koks.</p>
          <p>
            We vinden persoonlijke aandacht voor onze professionals belangrijk.
            We kijken daarom niet alleen naar de vaktechnische kwalificaties van
            hen. Maar ook naar de persoonlijkheid, voorkeuren en ambities.
          </p>
          <p>Horeca Solution is daarom uw betrouwbare partner!</p>
          <p>
            Kortom, we vormen de ruggengraat van de culinaire wereld en delen we
            graag onze vreugde, voor de kunst van het koken met u.
          </p>
          <p>Tot snel,</p>
          <p>Horeca Solution.</p>
        </article>
        <div className={styles.imageMainOuter}>
          <Image src={cook} alt="chef" className={styles.imageMain} />
        </div>
      </main>
    </div>
  );
}
