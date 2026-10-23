import { NavLink, useRouteError } from "react-router-dom";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";

import "./error.css"
import { useTranslation } from "react-i18next";

export default function ErrorPage() {

  const { t } = useTranslation();

  const error = useRouteError();
  console.error(error);

return (
<div className="notfound">
  <div className="notfound-bg"></div>
  <div className="notfound">
    <div className="notfound-404">
      <h1 className="error-state">404</h1>
    </div>
    <h2 className="descrizione">{t("pagina_non_trovata.descrizione")}</h2>
    <div className="notfound-links">
      <NavLink to="/" className="fs-300">
        {t("pagina_non_trovata.pagina_inziale")}
      </NavLink>
      <NavLink to="/contatti" className="contact-btn">
        {t("pagina_non_trovata.contatti")}
      </NavLink>
    </div>

    <div className="notfound-social">
      {/* <NavLink to="#">
        <CiFacebook />
      </NavLink> */}
      <NavLink to="#">
       <CiInstagram />
      </NavLink>
    </div>
  </div>
</div>
  );
}