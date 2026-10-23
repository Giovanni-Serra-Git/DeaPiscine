import ContainerGallery from "../../componenti/containerGallery";
import Gallery from "../../componenti/gallery";
import HeroImageDescrizione from "../../heroImageDescrizione";
// import { HeroImageDescrizione } from "../../heroImageDescrizione";
import HomePageDefault from "../../homePageDefault/homePageDefault";

let copertura = [
  "../../../assets/componenti/setup.png",
  "../../../assets/componenti/setup.png",
]

export default function Calore() {
  return (
    <HomePageDefault styledOn="true">
        <HeroImageDescrizione title="pompa di calore" tipologia="calore" obj="accessori" />
        <ContainerGallery>
        <Gallery gallery={copertura} typology="Pompe Di Calore"/>
        </ContainerGallery>    
    </HomePageDefault>
)
}
