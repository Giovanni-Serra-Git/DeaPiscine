
/* eslint-disable react/prop-types */
import Button from "../button/button";



export default function ComponentiDescrizione({index,componente, button = false}) {

  return (
    <div key={index} className="container-gallery-item" >
    <div className="container-gallery-item-picture">
      <img src="../../../assets/aside/aside_1.jpg" alt="rivestimenti dea piscine" />
    </div>  
    <div className="container-gallery-item-title"><p className="fs-300">{ componente[0].title }</p></div>
    <div className="container-gallery-item-description">
      {componente[0].anteprima}
    </div>
    {button && (
     <div className="container-gallery-item-button">
      <Button classList="button" path={componente[0].path}>Scopri di più</Button> 
    </div>
    )
    }
    </div>  
  )
}
