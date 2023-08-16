import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Metadata } from "next";
import styles from "@/styles/overons.module.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Over ons | Horeca Solution",
  description:
    "Horeca Solution: Jouw schakel naar perfecte samenwerkingen. Wij bemiddelen tussen horecazaken, catering en evenementen, en getalenteerd personeel. Ervaar vakkundigheid, passie en flexibiliteit in elke culinaire creatie. Jouw betrouwbare partner voor naadloze verbindingen.",
};

const page = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainInner}>
          <div className={styles.text}>
            <h2>Over ons</h2>
            <article>
              <p>
                Stel je voor dat je de sleutel tot naadloze samenwerking wilt
                vinden, een partner die de brug slaat tussen jouw restaurant,
                cateringbedrijf of evenement en het juiste personeel. Welkom bij
                Horeca Solution, jouw bemiddelingsbedrijf in de horeca. Wij
                begrijpen dat de culinaire wereld draait om harmonie, precisie
                en flexibiliteit, en daarom zijn wij er om ervoor te zorgen dat
                de juiste professionals samenkomen om meesterwerken te creëren.
              </p>
              <p>
                In de hectische dans van restaurants, partijen en evenementen is
                snel schakelen van essentieel belang. Voor ons is werken in de
                horeca meer dan een baan; het is topsport. En zoals atleten
                moeten we soepel en snel bewegen om altijd op het hoogste niveau
                te presteren. Bij Horeca Solution begrijpen we dit als geen
                ander.
              </p>
              <p>
                Wij geloven in de kracht van het juiste team. Daarom gaan we
                verder dan alleen maar werknemers plaatsen. Wij leveren
                professionals met een vurige passie voor het vak, mensen die
                niet alleen weten hoe ze gerechten moeten bereiden, maar die ook
                de ziel van de horeca begrijpen. Onze medewerkers zijn niet
                alleen ervaren, maar ze zijn ook veerkrachtig en kunnen zich
                moeiteloos aanpassen aan elke situatie.
              </p>
              <p>
                Sinds april 2022 zijn we ons avontuur begonnen als bemiddelaar
                en uitzendbureau voor horeca personeel. Elke dag steken we onze
                passie en toewijding in ons werk. Onze toegewijde professionals
                staan klaar om in te springen waar nodig, of het nu voor een
                enkele dag is of voor een langere periode. We zijn hier om de
                last van uw personeelstekort te verlichten en de harmonie in uw
                keuken te bewaren.
              </p>
              <p>
                Maar we doen meer dan alleen bemiddelen. We zijn de brug naar
                talent. Van hulp-koks tot chef-koks, we zorgen ervoor dat uw
                keuken altijd bemand is door vaardige handen die de kunst van
                het koken begrijpen. We begrijpen dat het niet alleen draait om
                de vaardigheden op papier. We kijken naar de persoon achter de
                professional, naar hun persoonlijkheid, voorkeuren en ambities.
                Dit is hoe we de perfecte match creëren tussen uw bedrijf en
                onze professionals.
              </p>
              <p>
                Wij zijn niet zomaar een partner, we zijn uw betrouwbare
                partner. Horeca Solution staat voor kwaliteit, betrouwbaarheid
                en toewijding. We zijn er om uw lasten te verlichten, uw keuken
                te versterken en uw evenementen naar een hoger niveau te tillen.
                Samen vormen we de ruggengraat van de culinaire wereld en delen
                we graag de vreugde van het koken met u. Samen creëren we
                culinaire meesterwerken die de zintuigen prikkelen en harten
                verwarmen.
              </p>
            </article>
          </div>
          
          <div className={styles.ImageOuter}>
            <Image
              width={1200}
              height={1600}
              alt="Yeffrey aan het bbqen"
              src={
                "https://horeca-solution.s3.eu-north-1.amazonaws.com/fotos/WhatsApp+Image+2023-08-04+at+20.57.12.jpeg"
              }
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;
