/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import Button from "../button/button";
import { Helmet } from 'react-helmet';


import "./about.css"
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import hoverEffect from 'hover-effect'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { useTranslation } from "react-i18next";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

function ImageContainer({ id, alt }) {
  
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
        viewport={{ once: true, margin: "-10px" }}
        onViewportEnter={() => setIsInView(true)}
      >
        <div className="image-container" >
            <img src={id} alt={alt} onLoad={() => setIsLoaded(true)} />
        </div>
      </motion.div>
    </>
  );
}

function DistortionImage() {

  return (
    <div className="our-experience-picture">
      <img src="../../../assets/about/about_us_company.jpg" alt="Picture About Us" />
    </div>
  )
}


function AboutPictures() {
  const {t} = useTranslation();

  let acqua = t("chi_siamo.acqua_descrizione", {returnObjects: true});

  let passione = t("chi_siamo.passione_descrizione", {returnObjects: true})

  return (
<div className="about-container">
        <div className="container-pictures">
         <div className="inner-container-picture">
          <ImageContainer id="../../../assets/about/about_villa_1.jpg" alt="Villa Picture" />
          <h2>{t("chi_siamo.acqua")}</h2>
          {acqua.map((paragraph, index) =><p key={index} >{paragraph}</p> )}
          </div>
          <div className="inner-container-picture">
            <ImageContainer id="../../../assets/about/about_villa_2.jpg" alt="Villa Picture" />
            <h2>{t("chi_siamo.passione")}</h2>
            {passione.map((paragraph, index) =><p key={index} >{paragraph}</p> )}
          </div>
        </div>
      </div>
  )
}



function ExperienceContent() {
  useEffect(() => {
    AOS.init()
  }, [])

  const {t, i18n} = useTranslation();

  const testo = t('chi_siamo.descrizione_azienda.testo', { returnObjects: true });
  const properties = t('chi_siamo.descrizione_azienda.proprietà', { returnObjects: true });
  let valoriAzienda = t("chi_siamo.valori_azienda", { returnObjects: true });

  
  
  


  return  ( 
    <div 
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      className="margin-block" >
    <div className="container-our-experience">
      <DistortionImage />
      <div className="our-experience-content text-accent-about-grey">
      {testo.map((paragraph, index) => (
        <p className="fs-300" key={index} dangerouslySetInnerHTML={{ __html: paragraph.replace(/{{\s*(\w+)\s*}}/g, (_, key) => properties[key]) }} />
      ))}
      </div>
    </div>
  </div>
  )
}


function Example() {

  const {t} = useTranslation();
  return (
    <div className="container-before-after">
      <h1 className="text-accent-about-black">{t("chi_siamo.risultati")}</h1>
      <div className="container-flex-before-after">
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src="../../../assets/about/risultati/one_before.jpg" srcSet="../../../assets/about/risultati/one_before.jpg" alt="Dea Piscine Mosaico" />}
        itemTwo={<ReactCompareSliderImage src="../../../assets/about/risultati/one_after.jpg" srcSet="../../../assets/about/risultati/one_after.jpg" alt="Dea Piscine Mosaico" />}
    />
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src="../../../assets/about/risultati/mosaico_2/mosaico_2_prima.jpg" srcSet="../../../assets/about/risultati/mosaico_2/mosaico_2_prima.jpg" alt="Dea Piscine Mosaico" />}
        itemTwo={<ReactCompareSliderImage src="../../../assets/about/risultati/mosaico_2/mosaico_2_dopo.jpg" srcSet="../../../assets/about/risultati/mosaico_2/mosaico_2_dopo.jpg" alt="Dea Piscine Mosaico" />}
    />
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src="../../../assets/about/risultati/two_before.jpg" srcSet="../../../assets/about/risultati/two_before.jpg" alt="Dea Piscine Mosaico" />}
        itemTwo={<ReactCompareSliderImage src="../../../assets/about/risultati/two_after.jpg" srcSet="../../../assets/about/risultati/two_after.jpg" alt="Dea Piscine Mosaico" />}
    />
      </div>
    <Button path="/gallery" navlink="true" >{t("chi_siamo.altre_foto")}</Button>
    </div>

  );
}


export default function About() {
  return (
    <>
      <Helmet>
          <meta name="description" content="Dea Piscine ha oltre 10 anni di esperienza nel settore, lavoriamo con clienti da tutto il mondo.Attraverso la nostra esperienza costruiamo una media di 4 piscine al mese per un totale di circa 90 piscine all'anno." />
      </Helmet>
      <Navbar styledOn={true} />
      <ExperienceContent />
      <AboutPictures />
      <Example />
      <Footer />
    </>
  )
}
