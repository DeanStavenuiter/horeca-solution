"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import styles from "@/styles/contact.module.css";
import axios from "axios";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { CircularProgress } from "@mui/material";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageName, setErrorMessageName] = useState("");
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [errorMessagePhone, setErrorMessagePhone] = useState("");
  const [errorMessageMessage, setErrorMessageMessage] = useState("");
  const [successMessage, setsuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const url = process.env.NEXT_PUBLIC_API_ROUTE;

  const regexName = /^[a-zA-Z\s]+$/;
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexPhone = /^(?:\+31|0)(?:[1-9]0|[1-9][1-9])\d{7}$/;
  const regexText = /^[a-zA-Z0-9\s.!?]+$/;

  const handleForm = async (e: any) => {
    e.preventDefault();

    if (!regexName.test(name)) {
      return setErrorMessageName("Vul een naam in aub."), setIsLoading(false);
    } else {
      setErrorMessageName(""), setIsLoading(false);
    }
    if (!regexEmail.test(email)) {
      return setErrorMessageEmail("Vul dit veld in aub."), setIsLoading(false);
    } else {
      setErrorMessageEmail(""), setIsLoading(false);
    }
    if (!regexPhone.test(phone)) {
      return setErrorMessagePhone("Vul dit veld in aub."), setIsLoading(false);
    } else {
      setErrorMessagePhone(""), setIsLoading(false);
    }
    if (!regexText.test(message)) {
      return setErrorMessageMessage("Vul dit veld in aub."), setIsLoading(false);
    } else {
      setErrorMessageMessage(""), setIsLoading(false);
    }

    const body: any = {
      name,
      email,
      phone,
      message,
    };

    try {
      setIsLoading(true)
      const response = await axios.post("/api/contactForm", {
        body,
      });
      if (response.status === 200) {
        setsuccessMessage(response.data.message);
        setIsLoading(false)
      } else {
        setErrorMessage(response.data.message);
        setIsLoading(false)
      }
      console.log("response", response);
    } catch (error) {
      console.error("Error sending the form:", error);
    }
  };

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

            <p>Tel: 06 11 86 85 67</p>
            <p>Mail: info@horecasolution.nl</p>
          </div>

          <form className={styles.form}>
            <div className={styles.lablesAndInputs}>
              <div className={styles.labelInput}>
                <label htmlFor="Naam">Naam</label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value.trim())}
                  name="Naam"
                  id="Naam"
                  required
                />
              </div>
              {errorMessageName && (
                <div className={styles.errorOuter}>
                  <div className={styles.error}>
                    <InfoOutlinedIcon />
                    {errorMessageName}
                  </div>
                </div>
              )}

              <div className={styles.labelInput}>
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value.trim())}
                  name="Email"
                  id="Email"
                  required
                />
              </div>
              {errorMessageEmail && (
                <div className={styles.errorOuter}>
                  <div className={styles.error}>
                    <InfoOutlinedIcon />
                    {errorMessageEmail}
                  </div>
                </div>
              )}

              <div className={styles.labelInput}>
                <label htmlFor="Telefoon">Telefoon</label>
                <input
                  type="text"
                  onChange={(e) => setPhone(e.target.value.trim())}
                  name="Telefoon"
                  id="Telefoon"
                  required
                />
              </div>
              {errorMessagePhone && (
                <div className={styles.errorOuter}>
                  <div className={styles.error}>
                    <InfoOutlinedIcon />
                    {errorMessagePhone}
                  </div>
                </div>
              )}

              <div className={styles.labelInput}>
                <label htmlFor="Bericht">Bericht</label>
                <textarea
                  onChange={(e) => setMessage(e.target.value.trim())}
                  name="Bericht"
                  id="Bericht"
                  required
                />
              </div>
              {errorMessageMessage && (
                <div className={styles.errorOuter}>
                  <div className={styles.error}>
                    <InfoOutlinedIcon />
                    {errorMessageMessage}
                  </div>
                </div>
              )}

              {errorMessage && (
                <div className={styles.errorOuter}>
                  <div className={styles.error}>
                    <InfoOutlinedIcon />
                    {errorMessage}
                  </div>
                </div>
              )}
              {successMessage && (
                <div className={styles.successOuter}>
                  <div className={styles.success}>
                    <InfoOutlinedIcon />
                    {successMessage}
                  </div>
                </div>
              )}
              <div className={styles.buttonOuter}>
                <button className={styles.button} onClick={handleForm}>
                  verstuur!
                </button>
                {isLoading && (
                  <div className={styles.spinnerOuter}>
                    <CircularProgress />
                  </div>
                )}
              </div>
            </div>
          </form>
        </article>
      </main>
    </div>
  );
};

export default Contact;
