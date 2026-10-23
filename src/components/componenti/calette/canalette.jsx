import HeroImageDescrizione from "../../heroImageDescrizione"
import HomePageDefault from "../../homePageDefault/homePageDefault"
import ContainerGallery from "../containerGallery"
import Gallery from "../gallery"

let copertura = [
    "../../../assets/componenti/setup.png",
    "../../../assets/componenti/setup.png",
  ]

function Canalette() {
    return (
        <HomePageDefault styledOn="true">
            <HeroImageDescrizione title="canalette" tipologia="canalette" obj="componenti" />
            <ContainerGallery>
                    <Gallery gallery={copertura} typology="Canalette"  />
                </ContainerGallery>    
        </HomePageDefault>
    )
}

export default Canalette
