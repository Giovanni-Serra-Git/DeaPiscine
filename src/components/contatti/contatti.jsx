/* eslint-disable no-undef */
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import "./contatti.css";

import AOS from "aos";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import ReCAPTCHA from "react-google-recaptcha";

// Configurazione originale: da verificare nella dashboard EmailJS
const publicKey = "FYP5LyU8qarvhxiGG";
const service_id = "service_os2nylo";
const template_id = "template_8we7otj";
const site_key_recaptchta = "6LdMpvopAAAAAPsDi6pvqNS3IvmvxqL3abGqQePs";

function ContactsInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [message, setMessage] = useState("");

  const [checkRecaptcha, setCheckRecaptcha] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const form = useRef(null);
  const recaptchaRef = useRef(null);

  const { t } = useTranslation();

  useEffect(() => {
    emailjs.init({
      publicKey: publicKey,
    });
  }, []);

  function onChange(value) {
    setCaptchaToken(value);
    setCheckRecaptcha(!value);
  }

  async function sendEmail(e) {
    e.preventDefault();

    if (isSending) {
      return;
    }

    if (email !== confirmEmail) {
      toast.error(t("toastify.email"), {
        position: "top-right",
      });
      return;
    }

    if (!captchaToken) {
      setCheckRecaptcha(true);
      return;
    }

    setIsSending(true);

    try {
      await emailjs.sendForm(service_id, template_id, form.current, {
        publicKey: publicKey,
      });

      setName("");
      setEmail("");
      setConfirmEmail("");
      setMessage("");

      setCheckRecaptcha(false);
      setCaptchaToken(null);

      recaptchaRef.current?.reset();

      toast.success(t("toastify.inviato"), {
        position: "top-right",
      });

      console.log("Message Sent");
    } catch (error) {
      toast.error(t("toastify.errore_inviato"), {
        position: "top-right",
      });

      console.error("EmailJS error:", error?.text || error?.message || error);

      // Dopo un tentativo fallito, richiediamo
      // una nuova verifica reCAPTCHA.
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
      setCheckRecaptcha(false);
    } finally {
      setIsSending(false);
    }
  }

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="4000"
      data-aos-once="true"
      className="contacts-form-container"
    >
      {/* Informazioni di contatto */}
      <div className="contacts-description-info">
        <h2 className="contacts-description-info-title">
          {t("contatti.contact_form.info.title")}
        </h2>

        <div className="contact-info-italian">
          <p className="country">{t("contatti.contact_form.info.italia")}</p>

          <p>
            <b>{t("contatti.contact_form.info.indirizzo")} :</b> Via Padre
            Semeria 294
          </p>

          <p>
            <b>{t("contatti.contact_form.info.città")} :</b> Sanremo (IM)
          </p>

          <p>
            <b>{t("contatti.contact_form.info.numero")} :</b> +39 328 058 0619
          </p>
        </div>

        <div className="contact-info-french">
          <p className="country">{t("contatti.contact_form.info.francia")}</p>

          <p>
            <b>{t("contatti.contact_form.info.indirizzo")} :</b> Chemin
            Saint-Michel
          </p>

          <p>
            <b>{t("contatti.contact_form.info.città")} :</b> Biot 06410
          </p>

          <p>
            <b>{t("contatti.contact_form.info.numero")} :</b> +33 06 60 96 08 78
          </p>
        </div>

        <div className="email">
          <p>email deapiscine@gmail.com </p>
        </div>
      </div>

      {/* Modulo di contatto */}
      <div className="contacts-send-form">
        <h2 className="contacts-description-info-title">
          {t("contatti.contact_form.invia_messaggio.title")}
        </h2>

        <div></div>

        <form ref={form} onSubmit={sendEmail}>
          <label>{t("contatti.contact_form.invia_messaggio.nome")}</label>

          <input
            type="text"
            name="user_name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>{t("contatti.contact_form.invia_messaggio.email")}</label>

          <input
            type="email"
            name="user_email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>
            {t("contatti.contact_form.invia_messaggio.conferma_email")}
          </label>

          <input
            type="email"
            name="confirm_email"
            required
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
          />

          <label>{t("contatti.contact_form.invia_messaggio.messaggio")}</label>

          <textarea
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={site_key_recaptchta}
            onChange={onChange}
            onExpired={() => {
              setCaptchaToken(null);
              setCheckRecaptcha(true);
            }}
            onErrored={() => {
              setCaptchaToken(null);
              setCheckRecaptcha(true);
            }}
          />

          {checkRecaptcha ? (
            <p className="recaptcha">{t("contatti.contact_form.recaptcha")}</p>
          ) : (
            ""
          )}

          <input
            className="send"
            type="submit"
            disabled={isSending}
            value={t("contatti.contact_form.invia_messaggio.invia")}
          />
        </form>
      </div>
    </div>
  );
}

function LandingPicture() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container container-small">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="inner-container-contact inner-container"
      >
        <p className="title">{t("contatti.hero_section.title")}</p>

        <p className="title-small">
          {t("contatti.hero_section.sub_title_first")}
        </p>
      </div>
    </div>
  );
}

export default function Contacts() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Conttataci per maggiori informazioni. Numero : +39 328 058 0619 - Numéro: +33 06 60 96 08 78 - Email: deapiscine@gmail.com"
        />
      </Helmet>

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Navbar styledOn="true" border="true" />

      <LandingPicture />

      <ContactsInfo />

      <Footer />
    </>
  );
}
