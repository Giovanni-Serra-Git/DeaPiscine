/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import HomePageDefault from "../../homePageDefault/homePageDefault";
import "../componenti.css"
import "./rivestimenti.css"

import HeroImageDescrizione from "../../heroImageDescrizione";

const images = [
  {
    "title": "pietra_naturale",
    "url" : "../../../assets/componenti/rivestimenti/pietra/pietra.jpg",
  },
  {
    "title": "mosaico",
    "url": "../../../assets/componenti/rivestimenti/mosaico/prima_dopo/dopo.jpg"
  },
  {
    "title": "poliestere",
    "url": "../../../assets/componenti/rivestimenti/poliestere/dopo.jpg",
  },
  {
    "title": "gres",
    "url" : "../../../assets/componenti/rivestimenti/gres/gres.jpg",
  },
]


function RivestimentiDescrizione({componente, index}) {

  console.log(images[index])

  

  let {title} = componente;
  let {descrizione} = componente;

  return (
    <div className="container-gallery-item" >
    <div className="container-gallery-item-picture">
      <img src={images[index].url} alt={images[index].title} />
    </div>  
    <div className="container-gallery-item-title"><p className="fs-375">{ title}</p></div>
    <div className="container-gallery-item-description">
      {descrizione.map((descrizione, index) => <p key={index} className="fs-300">{descrizione}</p>)}
    </div>
    </div>  
  )
}

export default function Rivestimenti() {

  let {t} = useTranslation();
  let componente = t("piscine.componenti", {returnObjects: true})
  let tipologie = componente.find(rivestimenti => "rivestimenti" in rivestimenti).rivestimenti.tipologia;
  let title = t("piscine.componenti_title", {returnObjects: true});


  return (
    <HomePageDefault styledOn="true">
        {/* <RivestimentiContent /> */}
        <HeroImageDescrizione title={title} tipologia="rivestimenti" obj="componenti"  />
        <div className="container-gallery">
            <div className="inner-container-gallery">
                {tipologie.map((tipologia, index) => <RivestimentiDescrizione key={index} componente={tipologia} index={index} /> )}
             </div>
        </div>
    </HomePageDefault>
  )
}
