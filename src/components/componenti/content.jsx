/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import Descrizione from "./descrizione";
// import ComponentiDescrizione from "./componentiDescrizione";

// let images = [
//   "../../../assets/componenti/rivestimenti/mosaico/prima_dopo/dopo.jpg",
//   "../../../assets/gallery/foto_varie/foto_24.jpg",
//   "../../../assets/gallery/foto_varie/foto_21.jpg",
//   "../../../assets/gallery/foto_varie/foto_3.jpg",
// ]

export function ComponentiContent({images,tipologia}) {

  const {t} = useTranslation();

  let componenti = t(`piscine.${tipologia}` , {returnObjects: true});

  return (
    <div className="container-gallery">
      <div className="inner-container-gallery">


        { componenti.map((componente, index) => {
              return (
                <Descrizione
                  componente={componente}
                  index={index}
                  key={index}
                  path={images[index]}
                  button="true"/>
              )

        })}

      </div>
    </div>
  )     


}

export default ComponentiContent
