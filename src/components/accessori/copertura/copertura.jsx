import ContainerGallery from "../../componenti/containerGallery";
import Gallery from "../../componenti/gallery";
import HeroImageDescrizione from "../../heroImageDescrizione";
import HomePageDefault from "../../homePageDefault/homePageDefault";

let copertura = [
  "../../../assets/gallery/copertura/copertura.jpg",
  "../../../assets/gallery/copertura/video.mp4",
]

export default function Copertura() {
  return (
    <HomePageDefault styledOn="true">
        <HeroImageDescrizione title="copertura elettrica" tipologia="copertura" obj="accessori" />
        <ContainerGallery>
                <Gallery gallery={copertura} typology="Copertura Elettrica"/>
            </ContainerGallery>    
    </HomePageDefault>
)
}
