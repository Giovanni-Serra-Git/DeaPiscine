/* eslint-disable no-unused-vars */
import { useTranslation } from "react-i18next";
import "./footer.css"
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { NavLink } from "react-router-dom";

{/* <InstagramOutlined /> */}

export default function Footer() {

  const { t, i18n } = useTranslation();

  return (
    <footer>
      <div className="container-company-info">
        <p> <span className="azienda">{t("footer.azienda")} @{t("footer.copyright")}</span></p>
        <p><span>{t("footer.partita_iva")}: 017 601 000 89</span> </p>
        <p><span>{t("footer.codice_univoco")}: W7YVJK9</span> </p>
        <NavLink to="/privacy-policy" style={{ fontWeight: "bold" }}>Privacy Policy</NavLink>
      </div>
      <div className="container-icons">
        <a href="https://www.instagram.com/dea.piscine/?igsh=MXZicnV0bW5pMXl5MQ%3D%3D" target="_blank">
          <CiInstagram />
        </a>
        {/* <CiFacebook /> */}
      </div>
    </footer>
  )
}
