/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { useRef } from "react";
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

  const form = useRef();

  const recaptchaRef = useRef();

  let translation = useTranslation().t;

  useEffect(() => {
    emailjs.init({
      publicKey: publicKey,
    });
  });

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  function sendEmail(e) {
    e.preventDefault();

    if (email != confirmEmail) {
      let emailToastify = translation("toastify.email");
      toast.error(emailToastify, {
        position: "top-right",
      });
      return;
    }

    emailjs
      .sendForm(service_id, template_id, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          let inviatoToastify = translation("toastify.inviato");

          setName("");
          setEmail("");
          setConfirmEmail("");
          setMessage("");
          setCheckRecaptcha(false);
          grecaptcha.reset();
          toast.success(inviatoToastify, {
            position: "top-right",
          });
          console.log("SUCCESS!");
          console.log("Message Sent");
        },
        (error) => {
          let errore_inviato_Toastify = translation("toastify.errore_inviato");

          toast.error(errore_inviato_Toastify, {
            position: "top-right",
          });
          console.log("FAILED...", error.text);
          let reCaptcha = error.text;
          if (reCaptcha.includes("reCAPTCHA")) {
            setCheckRecaptcha(true);
          }
        },
      );
  }

  useEffect(() => {
    AOS.init();
  }, []);

  const { t } = useTranslation();

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="4000"
      data-aos-once="true"
      className="contacts-form-container"
    >
      {/* ********** */}
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
            <b>{t("contatti.contact_form.info.città")} :</b> Biot 06410{" "}
          </p>
          <p>
            <b>{t("contatti.contact_form.info.numero")} :</b> +33 06 60 96 08
            78{" "}
          </p>
        </div>
        <div className="email">
          <p>email deapiscine@gmail.com </p>
        </div>
      </div>
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
            name="user_email"
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
          />
          {checkRecaptcha ? (
            <p className="recaptcha">{t("contatti.contact_form.recaptcha")}</p>
          ) : (
            ""
          )}
          <input
            className="send"
            type="submit"
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
