import Header from "../components/Header";
import styles from "@/styles/contact.module.css";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import { Metadata } from "next";
import FormContact from "../components/FormContact";

export const metadata: Metadata = {
  title: "Contact | Horeca Solution",
  description:
    "Laten we persoonlijk kennismaken, zodat we kunnen kijken wat we voor elkaaer kunnen betekenen",
};

const Contact = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainInner}>
          <div className={styles.imageOuter}>
            <Image
              width={1920}
              height={1276}
              alt="laptop en koffie"
              src={
                "https://horeca-solution.s3.eu-north-1.amazonaws.com/fotos/workspace-1280538_1920.jpg"
              }
            />
          </div>
          <div className={styles.title}>
            <h1>Laten we persoonlijk kennismaken</h1>
          </div>

          <article className={styles.article}>
            <div className={styles.text}>
              <h2>Meer informatie of een kok aanvragen?</h2>
              <h2>We zijn je graag van dienst!</h2>
              <Link href={"callto:+31611868567"}>
                Tel: +31 6 11 86 85 67
              </Link>{" "}
              <br />
              <Link href={"mailto:info@horecasolution.nl"}>
                Mail: info@horecasolution.nl
              </Link>
            </div>
            <FormContact />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
