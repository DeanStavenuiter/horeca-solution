import React from "react";
import Header from "../components/Header";
import styles from "@/styles/contact.module.css";

const contact = () => {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>Laten we persoonlijk kennismaken</h1>
        </div>

        <article className={styles.article}>
          <div className={styles.text}>
            <h2>Meer informatie of een kok aanvragen?</h2>
            <h2>We zijn je graag van dienst!</h2>

            <p>
              Tel: 06 11 86 85 67
            </p>
            <p>
              Mail: info@horecasolution.nl
            </p>
          </div>

          <form className={styles.form}>
            <div className={styles.lablesAndInputs}>
              <div className={styles.labelInput}>
                <label htmlFor="Naam">Naam</label>
                <input
                  type="text"
                  // onChange={(e) => setStrekkendeMeters(e.target.value.trim())}
                  // placeholder="M"
                  name="Naam"
                  id="Naam"
                  required
                />
              </div>

              <div className={styles.labelInput}>
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  // onChange={(e) => setStrekkendeMeters(e.target.value.trim())}
                  // placeholder="M"
                  name="Email"
                  id="Email"
                  required
                />
              </div>

              <div className={styles.labelInput}>
                <label htmlFor="Telefoon">Telefoon</label>
                <input
                  type="text"
                  // onChange={(e) => setStrekkendeMeters(e.target.value.trim())}
                  // placeholder="M"
                  name="Telefoon"
                  id="Telefoon"
                  required
                />
              </div>

              <div className={styles.labelInput}>
                <label htmlFor="Bericht">Bericht</label>
                <textarea
                  // type="text"
                  // onChange={(e) => setStrekkendeMeters(e.target.value.trim())}
                  // placeholder="M"
                  name="Bericht"
                  id="Bericht"
                  required
                />
              </div>
              <div className={styles.buttonOuter}>
                <button className={styles.button}>verstuur!</button>
              </div>
            </div>
          </form>
        </article>
      </main>
    </div>
  );
};

export default contact;
