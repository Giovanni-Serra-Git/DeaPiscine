import ContainerGallery from "../../componenti/containerGallery";
import Gallery from "../../componenti/gallery";
import HeroImageDescrizione from "../../heroImageDescrizione";
import HomePageDefault from "../../homePageDefault/homePageDefault";

let copertura = [
  "../../../assets/componenti/setup.png",
  "../../../assets/componenti/setup.png",
]

export default function Nuoto() {
  return (
    <HomePageDefault styledOn="true">
        <HeroImageDescrizione title="nuoto contro corrente" tipologia="nuoto" obj="accessori" />
        <ContainerGallery>
            <Gallery gallery={copertura} typology="Nuoto contro corrente"/>
         </ContainerGallery>    
    </HomePageDefault>
)
}
