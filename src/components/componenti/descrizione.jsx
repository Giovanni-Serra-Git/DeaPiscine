/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useTranslation } from "react-i18next";
import Button from "../button/button";

export default function Descrizione({index, componente, path, button = false}) {


  const { t, i18n } = useTranslation();
   
  let key = Object.keys(componente).join();

  let scopri_di_più =  t("home_page.aside.button");

   console.log(path)

    return (
      <div key={index} className="container-gallery-item" >
      <div className="container-gallery-item-picture">
        <img src={path} alt="rivestimenti dea piscine" />
      </div>  
      <div className="container-gallery-item-title"><p className="fs-title-gallery">{ componente[key].title }</p></div>
      <div className="container-gallery-item-description">
        {componente[key].anteprima.map( (paragraph, index) => <p key={index} className="fs-300">{paragraph}</p> )}
      </div>
      {button && (
       <div className="container-gallery-item-button">
        <Button classList="button" path={componente[key].path}>{scopri_di_più}</Button> 
      </div>
      )
      }
      </div>  
    )
  }
  
