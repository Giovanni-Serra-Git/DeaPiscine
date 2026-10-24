/* eslint-disable no-unused-vars */
import Button from "../button/button";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';


export default function HeroImage() {

  const { t, i18n } = useTranslation();

  let descrizione = t("home_page.descrizione", {returnObjects: true})
  
  useEffect(() => {
    AOS.init();
  })

  return (
    <div
      className="hero-image">
      <div
        className="hero-image-inner"
        data-aos="fade-up"
        data-aos-once="true" 
        data-aos-duration="800"
      >
         <h1 className="fs-500">{t("home_page.title")}</h1>
         <p className="fs-300">{descrizione}</p>
         <Button path="./gallery">
            <div className="btn btn-one">
              <span className="fs-300">{t("home_page.cta")}</span>
            </div>
        </Button>
      </div> 
    </div>
  )
}
