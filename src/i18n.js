
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

export default i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)// passes i18n down to react-i18next
  .init({
    fallbackLng: "false",
    // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    detection: { 
      order: ['cookie','htmlTag','localStorage', 'path', 'subdomain'],
      caches: ["cookie"]
    },
    backend: {
      loadPath: '../assets/locales/{{lng}}/translation.json',
    },
  });