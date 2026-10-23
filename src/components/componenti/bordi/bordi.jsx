import HomePageDefault from "../../homePageDefault/homePageDefault"
import Gallery from "../gallery";
import ContainerGallery from "../containerGallery";
import HeroImageDescrizione from "../../heroImageDescrizione";

let soglie = [
    "../../../assets/gallery/foto_varie/foto_32.jpg",
    "../../../assets/gallery/foto_varie/foto_34.jpg"
]

// export function BordiGallery() {
//     return (
//         <div className="container-gallery">
//         <div className="inner-container-gallery">
//             <div className="container-gallery-item">
//                 <div className="container-gallery-picture">
//                     <img src="../../../assets/aside/aside_1.jpg" alt="rivestimenti dea piscine" />
//                 </div>
//             </div>
//             <div className="container-gallery-item">
//                 <div className="container-gallery-picture">
//                     <img src="../../../assets/aside/aside_1.jpg" alt="rivestimenti dea piscine" />
//                 </div>
//             </div>
//             <div className="container-gallery-item">
//                 <div className="container-gallery-picture">
//                     <img src="../../../assets/aside/aside_1.jpg" alt="rivestimenti dea piscine" />
//                 </div>
//             </div>
//             <div className="container-gallery-item">
//                 <div className="container-gallery-picture">
//                     <img src="../../../assets/aside/aside_1.jpg" alt="rivestimenti dea piscine" />
//                 </div>
//             </div>
//         </div>
//     </div>
//     )
// }


// function BordiContent() {

//     useEffect(() => {
//       AOS.init()
//     }, [])
  
//     let {t} = useTranslation();
  
//     let componenti = t("piscine.componenti", {returnObjects: true});
//     let descrizione = componenti[1].bordi.descrizione;
  
//       return (
//           <div
//             data-aos="fade-right"
//             data-aos-duration="1000" 
//             className="container component-container">
//             <div className="inner-container">
//               <p className="title">{componenti[1].bordi.title}</p>
//               {descrizione.map((paragraph, index) => (
//                 <p className="title-small" key={index} dangerouslySetInnerHTML={{ __html: paragraph.replace(/{{\s*(\w+)\s*}}/g, ) }} />
//         ))}
//               </div>
//           </div>
//       )
//   }

function Bordi() {
    return (
        <HomePageDefault styledOn="true">
            <HeroImageDescrizione tipologia="bordi" obj="componenti" />
                <ContainerGallery>
                    <Gallery gallery={soglie} typology="Soglie" />
                </ContainerGallery>    
        </HomePageDefault>
    )
}

export default Bordi
