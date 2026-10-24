import HeroImageDescrizione from "../../heroImageDescrizione"
import HomePageDefault from "../../homePageDefault/homePageDefault"
import ContainerGallery from "../containerGallery"
import Gallery from "../gallery"

let pavimentazione = [
    "../../../assets/gallery/foto_varie/foto_2.jpg",
    "../../../assets/gallery/foto_varie/foto_10.jpg",
    "../../../assets/gallery/foto_varie/foto_23.jpg"
]



function Pavimentazione() {
    return (
        <HomePageDefault styledOn="true">
            <HeroImageDescrizione title="pavimentazione" tipologia="pavimentazione" obj="componenti" />
                <ContainerGallery>
                    <Gallery gallery={pavimentazione} typology="pavimentazione"  />
                </ContainerGallery>    
        </HomePageDefault>
    )
}

export default Pavimentazione
