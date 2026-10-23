/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import Footer from "../footer/footer"
import Navbar from "../navbar/navbar"
import Aos from "aos";
import { useTranslation } from "react-i18next";
import Button from "../button/button";

function Costruzioni() {

    let {t} = useTranslation();


    let titolo =  t("piscine.costruzioni.hero_section.title", {returnObjects: true});

    let descrizione = t("piscine.costruzioni.hero_section.descrizione", {returnObjects: true})

    let cemento_colato = t("piscine.costruzioni.cemento_colato", {returnObjects: true})

    let cemento_monoblocco = t("piscine.costruzioni.cemento_monoblocco", {returnObjects: true});

    let struttura_leggera = t("piscine.costruzioni.struttura_leggera", {returnObjects: true});

    let contattaci = t("contatti.contact_form.info.title", {returnObjects: true})


    function LandingPicture() {

        const {t} = useTranslation();
      
        useEffect(() => {
          Aos.init()
        }, [])
      
        return (
          <div className="container component-container">
            <div       
              data-aos="fade-right"
              data-aos-duration="1000"
              className="inner-container-contact inner-container">
              <p className="title">{titolo}</p>
              <p className="title-small">{descrizione}</p>
            </div>
          </div>
        )
    }



    return (
        <>
            <Navbar styledOn="true" />
                <LandingPicture />

                <aside className="costruzioni cemento_blocco">
                  <div className="aside-description-container">
                    <h1 className="text-accent-blue">{cemento_colato.title}</h1>
                    {cemento_colato.descrizione.map((word,index) => <p className="fs-300" key={index}>{word}</p>)}
                    <Button classList="button" path="/contatti">{contattaci}</Button>
                  </div>
                  <div className="container-image-rivestimenti">
                     <img src="../../assets/gallery/costruzioni/aside/aside_1.jpg" alt="Rivestimenti Dea Piscine" />
                     <Button classList="btn-discover-tablet button" path="/contatti">{contattaci}</Button>
                  </div>
                </aside>  

                <aside className="restauro">
                  <div className="container-image-costruzioni">
                  <div className="container-image-rivestimenti">
                     <img src="../../assets/gallery/costruzioni/aside/aside_2.jpg" alt="Rivestimenti Dea Piscine" />
                     <Button classList="btn-discover-tablet button" path="/contatti">{contattaci}</Button>
                  </div>                  </div>
                  <div className="aside-description-container">
                    <h1 className="text-accent-blue">{cemento_monoblocco.title}</h1>
                    {cemento_monoblocco.descrizione.map((paragraph, index) => <p className="fs-300" key={index}>{paragraph}</p>)}
                       <Button classList="button" path="/contatti">{contattaci}</Button>
                    </div>      
                </aside>

                <aside className="rivestimenti">
                   <div className="aside-description-container">
                    <h1 className="text-accent-blue">{struttura_leggera.title}</h1>
                    {struttura_leggera.descrizione.map((paragraph, index) => <p className="fs-300" key={index}>{paragraph}</p>)}
                      <Button classList="button" path="/contatti">{contattaci}</Button>
                    </div>
                    <div className="container-image-rivestimenti">
                       <div className="container-image-rivestimenti">
                         <img src="../../assets/gallery/costruzioni/aside/aside_3.jpg" alt="Rivestimenti Dea Piscine" />
                         <Button classList="btn-discover-tablet button" path="/contatti">{contattaci}</Button>
                        </div> 
                    </div>
    </aside>  

            <Footer />
        </>
    )
}

export default Costruzioni
