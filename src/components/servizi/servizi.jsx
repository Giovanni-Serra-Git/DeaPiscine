/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { t } from "i18next";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
// import Timeline from "../timeline/timeline";

import "./servizi.css"
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Aos from "aos";
import { Helmet } from "react-helmet";







function ServiziDescrizione({gradient, backgroundDefault, color}) {
  useEffect(() => {
    Aos.init()
  }, [])
  const {t,i18n} = useTranslation();
  let servizi = t("servizi", {returnObjects: true});

  return servizi.map((servizio, index) => {
    return (
      <div 
        data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
        data-aos-duration="1000" 
        style={{ backgroundColor: backgroundDefault, background: gradient, color: color }} className="servizi" key={index}>
        <h3 className="vertical-timeline-element-title" style={{ fontWeight: 300, fontSize: 'var(--fs-350)'  }} >{servizio.titolo}</h3>
        {servizio.descrizione.map((descrizione, index) => <p key={index} className="fs-300" dangerouslySetInnerHTML={{ __html: descrizione }} ></p>)}
      </div>
    )
  } 
)
}

function ServiziContainer({children}) {
  return <div className="container-servizi">
    {children}
  </div>
}

export default function Servizi() {


  
  return (
    <>
        <Helmet>
          <meta name="description" content="Scopri i nostri diversi servizi, tra cui : rinnovo, costruzione, muratura piscina e molto altro" />
        </Helmet>
        <Navbar styledOn={true} />
        <ServiziContainer>
          <ServiziDescrizione 
            gradient=" linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(39,63,100,1) 35%, rgba(10,131,156,1) 100%)"
            backgroundDefault="#273f64"
            color="#fff"/>
          </ServiziContainer>
        <Footer />
    </>
  )
}
