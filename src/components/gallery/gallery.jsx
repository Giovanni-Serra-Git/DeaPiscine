/* eslint-disable react/prop-types */
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import "./gallery.css"
import "react-image-gallery/styles/css/image-gallery.css";



import ImageGallery from "react-image-gallery";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import AOS from 'aos';
import { Helmet } from "react-helmet";

function VideoItem ({ videoUrl }) {
  return (
    <div className="video-wrapper">
      <video controls >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
} 



const images = [
  {
    original: "../../../assets/gallery/costruzioni/costruzione_1.jpg",
    thumbnail: "../../../assets/gallery/costruzioni/costruzione_1.jpg",
  },
  {
    original: "../../../assets/gallery/costruzioni/costruzione_2.jpg",
    thumbnail: "../../../assets/gallery/costruzioni/costruzione_2.jpg",
  },
  {
    original: "../../../assets/gallery/costruzioni/costruzione_3.jpg",
    thumbnail: "../../../assets/gallery/costruzioni/costruzione_3.jpg",
  },
  {
    original: "../../../assets/gallery/costruzioni/costruzione_4.jpg",
    thumbnail: "../../../assets/gallery/costruzioni/costruzione_4.jpg",
  },
  {
    original: "../../../assets/gallery/costruzioni/costruzione_5.jpg",
    thumbnail: "../../../assets/gallery/costruzioni/costruzione_5.jpg",
  },
  {
    original: "../../../assets/gallery/costruzioni/costruzione_6.jpg",
    thumbnail: "../../../assets/gallery/costruzioni/costruzione_6.jpg",
  },
  {
    original: "../../../assets/gallery/costruzioni/costruzione_7.jpg",
    thumbnail: "../../../assets/gallery/costruzioni/costruzione_7.jpg",
  },
  {
    original: "../../../assets/gallery/costruzioni/costruzione_8.jpg",
    thumbnail: "../../../assets/gallery/costruzioni/costruzione_8.jpg",
  },
  // Foto varie
  {
    original: "../../../assets/gallery/foto_varie/foto_1.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_1.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_2.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_2.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_3.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_3.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_4.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_4.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_5.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_5.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_6.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_6.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_7.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_7.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_8.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_8.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_9.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_9.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_10.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_10.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_28.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_28.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_33.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_33.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_11.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_11.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_12.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_12.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_13.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_13.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_14.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_14.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_15.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_15.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_16.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_16.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_17.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_17.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_18.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_18.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_19.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_19.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_21.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_21.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_22.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_22.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_23.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_23.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_24.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_24.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_25.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_25.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_27.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_27.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_28.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_28.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_30.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_30.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_31.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_31.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_32.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_32.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/foto_34.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/foto_34.jpg",
  },
  // Foto varie fine
  {
    original: "../../../assets/gallery/piastrella/piastrella_two.jpg",
    thumbnail: "../../../assets/gallery/piastrella/piastrella_two.jpg",
  },
  {
    original: "../../../assets/gallery/poliestere/poliestere_one.jpg",
    thumbnail: "../../../assets/gallery/poliestere/poliestere_one.jpg",
  },
  {
    original: "../../../assets/gallery/villa_4.jpg",
    thumbnail: "../../../assets/gallery/villa_4.jpg",
  },
  {
    original: "../../../assets/gallery/foto_varie/villa_4_anteprima.jpg",
    thumbnail: "../../../assets/gallery/foto_varie/villa_4_anteprima.jpg",
    renderItem: () => (
      <VideoItem
        videoUrl="../../../assets/gallery/sfioro.mp4"
      />
    ),
  },
  {
    original: "../../../assets/gallery/copertura/copertura.jpg",
    thumbnail: "../../../assets/gallery/copertura/copertura.jpg",
    renderItem: () => (
      <VideoItem
        videoUrl="../../../assets/gallery/copertura/video.mp4"
      />
    ),
  }
  
];

function LandingPage() {

  useEffect(() => {
    AOS.init()
  }, [])

  const {t } = useTranslation();


  return (
    <div className="container container-small">
      <div
        data-aos="fade-right"
        data-aos-duration="1000" 
        className="inner-container">
        <p className="title">{t("gallery.hero_section.title")}</p>
        <p className="title-small">{t("gallery.hero_section.sub_title_first")}</p>
        <p className="title-small">{t("gallery.hero_section.sub_title_second")}</p>
    </div>
  </div>
  )
}

function MyGallery() {
  return <>
     <ImageGallery items={images} />
    </>;
}



export default function Gallery() {

  return (
    <>
      <Helmet>
        <meta name="description" content="Esplora le nostre realizzazioni di piscine attraveso le numerose foto, troverai piscine in fase di costruzione, piscine da costruire e piscine completate" />
      </Helmet>
      <Navbar styledOn={true} />
        <LandingPage />
        <MyGallery />
        <div className="separator"></div>
      <Footer />
    </>
  )
}
