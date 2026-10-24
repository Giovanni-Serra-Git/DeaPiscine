import ContainerGallery from "../../componenti/containerGallery";
import Gallery from "../../componenti/gallery";
import HeroImageDescrizione from "../../heroImageDescrizione";
import HomePageDefault from "../../homePageDefault/homePageDefault";

let idromassaggio = [
  "../../../assets/gallery/foto_varie/foto_19.jpg",
  "../../../assets/gallery/foto_varie/foto_7.jpg"
]

export default function Idromassaggio() {
  return (
    <HomePageDefault styledOn="true">
        <HeroImageDescrizione tipologia="idromassaggio" obj="accessori" />
        <ContainerGallery>
                <Gallery gallery={idromassaggio} tipologia="Idromassaggio"  />
            </ContainerGallery>    
    </HomePageDefault>
)
}
