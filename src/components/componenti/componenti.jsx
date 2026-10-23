/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";


import "../../components/button/button.css"
import HeroImageDescrizione from "../heroImageDescrizione";
import ComponentiContent from "./content";


let componenti = [
  "../../../assets/componenti/rivestimenti/mosaico/prima_dopo/dopo.jpg",
  "../../../assets/gallery/foto_varie/foto_24.jpg",
  "../../../assets/gallery/foto_varie/foto_21.jpg",
  "../../../assets/gallery/foto_varie/foto_3.jpg",
]

export default function Componenti() {


  return (
    <>
        <Navbar styledOn="true" />
           <HeroImageDescrizione 
              heading="componenti" tipologia="componenti_homepage" />
          <ComponentiContent images={componenti} tipologia="componenti" />
        <Footer />
    </>
  )
}


