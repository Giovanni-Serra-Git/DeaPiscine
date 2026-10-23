/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Aos from "aos"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"


export default function HeroImageDescrizione({heading, tipologia,obj}) {

  let title;


    useEffect(() => {
      Aos.init()
    }, [])

    let {t} = useTranslation();

    let tipologia_descrizione = t(`piscine.${tipologia}`, {returnObjects: true});
    heading ? title = t(`piscine.${heading}_menu_title`, {returnObjects: true}) : title = t(`piscine.${obj}`,{returnObjects: true}).find(c => tipologia in c)[tipologia].title;
    let componente = t(`piscine.${obj}`, {returnObjects: true});
    let descrizione;

    if (typeof tipologia_descrizione == "string") descrizione = componente.find(componente => tipologia in componente)[tipologia].descrizione;
    
  
    return (
      <div className="container component-container">
        <div
          data-aos="fade-right"
          data-aos-duration="1000" 
          className="inner-container">
          <p className="title">{title}</p>
          {typeof tipologia_descrizione != "string" ? tipologia_descrizione.map((paragraph, index) => <p key={index} className="title-small">{paragraph}</p>) : 
                  descrizione.map((paragraph, index) => <p key={index} className="title-small">{paragraph}</p>)}
        </div>
     </div>
    )
  }