/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import Footer from "../footer/footer"
import Navbar from "../navbar/navbar"
import Aos from "aos";
import { useTranslation } from "react-i18next";
import Button from "../button/button";

function Ristrutturazioni() {

    let {t} = useTranslation();


    let descrizione =  t("piscine.ristrutturazioni.hero_section.descrizione", {returnObjects: true});

    let modifica_piscina = t("piscine.ristrutturazioni.modifica_piscina", {returnObjects: true})

    let restuaro_piscina = t("piscine.ristrutturazioni.restauro_piscina", {returnObjects: true});

    let rinnovo_piscina = t("piscine.ristrutturazioni.rinnovo_piscina", {returnObjects: true});

    let contattaci = t("contatti.contact_form.info.title");

    console.log(modifica_piscina)

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
              <p className="title">{modifica_piscina.title}</p>
              {descrizione.map((word, index) => <p className="title-small" key={index}>{word}</p>)}
            </div>
          </div>
        )
      }
    return (
        <>
            <Navbar styledOn="true" />
                <LandingPicture />

                <aside className="ristrutturazioni">
                  <div className="aside-description-container">
                    <h1 className="text-accent-blue">{modifica_piscina.title}</h1>
                      {modifica_piscina.descrizione.map((paragraph, index) => <p className="fs-300" key={index}>{paragraph}</p>)}
                    <Button classList="button" path="/contatti">{contattaci}</Button>
                  </div>
                  <div className="container-image-rivestimenti">
                     <img src="../../assets/gallery/ristrutturazioni/aside/aside_1.jpg" alt="Ristrutturazioni foto Dea Piscine" />
                     <Button classList="btn-discover-tablet button" path="/contatti">{contattaci}</Button>
                  </div>
                </aside>  

                <aside className="restauro">
                  <div className="container-image-costruzioni">
                  <div className="container-image-rivestimenti">
                     <img src="../../assets/gallery/ristrutturazioni/aside/aside_2.jpg" alt="Ristrutturazioni foto Dea Piscine" />
                     <Button classList="btn-discover-tablet button" path="/contatti">{contattaci}</Button>
                  </div>                  </div>
                  <div className="aside-description-container">
                    <h1 className="text-accent-blue">{restuaro_piscina.title}</h1>
                    {restuaro_piscina.descrizione.map((paragraph, index) => <p className="fs-300" key={index}>{paragraph}</p>)}
                       <Button classList="button" path="/contatti">{contattaci}</Button>
                    </div>      
                </aside>

                <aside className="rivestimenti">
                   <div className="aside-description-container">
                    <h1 className="text-accent-blue">{rinnovo_piscina.title}</h1>
                    {rinnovo_piscina.descrizione.map((paragraph, index) => <p className="fs-300" key={index}>{paragraph}</p>)}
                      <Button classList="button" path="/contatti">{contattaci}</Button>
                    </div>
                    <div className="container-image-rivestimenti">
                       <div className="container-image-rivestimenti">
                         <img src="../../assets/gallery/ristrutturazioni/aside/aside_3.jpg" alt="Ristrutturazioni foto Dea Piscine" />
                         <Button classList="btn-discover-tablet button" path="/contatti">{contattaci}</Button>
                        </div> 
                    </div>
    </aside>  

            <Footer />
        </>
    )
}

export default Ristrutturazioni
