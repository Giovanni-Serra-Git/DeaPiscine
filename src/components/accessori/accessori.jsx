import HomePageDefault from "../homePageDefault/homePageDefault";
import ComponentiContent from "../componenti/content";
import HeroImageDescrizione from "../heroImageDescrizione";

let accessori = [
  "../../../assets/componenti/rivestimenti/mosaico/prima_dopo/dopo.jpg",
  "../../../assets/gallery/foto_varie/foto_24.jpg",
  "../../../assets/gallery/copertura/copertura.jpg",
  "../../../assets/accessori/idromassaggio/idro.jpg",
]

export default function Accessori() {
  return (
    <HomePageDefault styledOn="true">
      <HeroImageDescrizione heading="accessori" tipologia="accessori_homepage" obj="accessori" />
      <ComponentiContent images={accessori} tipologia="accessori" />
    </HomePageDefault>
  )
}
