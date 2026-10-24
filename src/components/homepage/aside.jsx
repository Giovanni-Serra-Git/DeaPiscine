/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from "../button/button";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import "./aside.css"

// REFACTOR MOTION CODE
// ******************
// ******************
// ******************
// ******************
// ******************
// ******************
// ******************
// REFACTOR MOTION CODE

import { motion } from "framer-motion";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

function ImageContainer({ id, alt, path }) {

  const { t, i18n } = useTranslation();



  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <>
      <motion.div
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
      >
        <div className="image-container" >
            <img src={id} alt={alt} onLoad={() => setIsLoaded(true)} />
        </div>
      </motion.div>
      <Button classList="btn-discover-tablet button" path={path}>{t("home_page.aside.button")}</Button>
    </>
  );
}


export default function Aside() {

  const { t, i18n } = useTranslation();

  // SOONER OR LATER EDIT THIS WAY OF ITERATING


  let rivestimenti_dettagli = t("home_page.aside.rivestimenti_dettagli", {returnObjects: true}) ;

  let costruzioni = t("home_page.aside.costruzioni_dettagli", {returnObjects: true}) ;

  let ristrutturazioni = t("home_page.aside.ristrutturazioni_dettagli", {returnObjects: true}) ;


  return (
    <>

    <aside className="rivestimenti">
        <div className="aside-description-container">
             <h1 className="text-accent-blue">{t("home_page.aside.rivestimenti")}</h1>
             {rivestimenti_dettagli.map((paragraph, index) => <p className="fs-300" key={index}>{paragraph}</p>)}
            <Button classList="button" path="/componenti/rivestimenti">{t("home_page.aside.button")}</Button>
        </div>
            <div className="container-image-rivestimenti">
              <ImageContainer id="../../../assets/gallery/foto_varie/foto_23.jpg"  alt="Rivestimenti" path="/componenti/rivestimenti" />
            </div>
    </aside>   

    <aside className="costruzioni"> 
      <div className="container-image-costruzioni">
        <ImageContainer id="../../assets/gallery/costruzioni/costruzione_6.jpg" alt="Costruzioni_Pic" path="/costruzioni" />
      </div>
            <div className="aside-description-container">
                <h1 className="text-accent-blue">{t("home_page.aside.costruzioni")}</h1>
                {costruzioni.map((paragraph, index) => <p className="fs-300" key={index}>{paragraph}</p>)}
                    <Button classList="button" path="/costruzioni">{t("home_page.aside.button")}</Button>
            </div>      
    </aside>

    <aside className="ristrutturazioni">
        <div className="aside-description-container">
             <h1 className="text-accent-blue">{t("home_page.aside.ristrutturazioni")}</h1>
             {ristrutturazioni.map((paragraph, index) => <p className="fs-300" key={index}>{paragraph}</p>)}
            <Button classList="button" path="/ristrutturazione">{t("home_page.aside.button")}</Button>
        </div>
            <div className="container-image-rivestimenti">
              <ImageContainer id="../../../assets/gallery/costruzioni/costruzione_8.jpg" alt="Ristrutturazione" path="/ristrutturazione" />
            </div>
    </aside> 


    </>
  )
}
