import HomePageDefault from "../homePageDefault/homePageDefault";
import Faq from "react-faq-component";
import "./domande.css"
import { useEffect } from "react";
import Aos from "aos";
import { useTranslation } from "react-i18next";

export default function Domande() {

    
let {t} = useTranslation();

let questionsObject = t("piscine.domande_frequenti", {returnObjects: true})
let title = questionsObject.title;
let questions = questionsObject.domande_frequenti;

const data = {

    title: title,
    rows: questions,

};

const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    rowContentPaddingTop: "2em",
    rowContentPaddingRight: "1em",
    rowContentPaddingBottom: "2em",
    rowContentPaddingLeft: "1em",
    titleTextSize: "clamp(1.125rem, 2.5vw, 2rem)",
    rowTitleTextSize: "clamp(1rem, 2.5vw, 1.1rem)",
    rowContentTextSize: "clamp(0.8rem, 2.5vw, 1rem)"
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};


    useEffect(() => {
        Aos.init();
      })
    

    return (
        <HomePageDefault styledOn="true">
            <div 
                data-aos="fade-up"
                data-aos-once="true" 
                data-aos-duration="800"
                className="container-faq">
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
            </div>
        </HomePageDefault>
    )
}
