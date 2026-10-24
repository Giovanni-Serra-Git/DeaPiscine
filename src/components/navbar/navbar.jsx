/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import {  useMotionValueEvent, useScroll } from "framer-motion"
import "./navbar.css";
import "./media_query.css";
import { useRef, useState } from "react";
import ScrollToTop from "../scroll/ScrollToTop";
import i18next from 'i18next';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useTranslation } from "react-i18next";

import { useLocation } from 'react-router-dom';
import Logo from "../../../public/assets/logo/logo";




let languages = [
  {
    code: "it",
    name: "Italiano",
    country_code: "it"
  },
  {
    code: "gb",
    name: "English",
    country_code: "en"
  },
  {
    code: "fr",
    name: "Français",
    country_code: "fr"
  },
  {
    code: "ru",
    name: "Русский",
    country_code: "ru"
  },
]



export default function Navbar({styledOn, border}) {

  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false)

  const [isOpenPiscine, setIsOpenPiscine] = useState(false);

  const dropdownRef = useRef();

  const sidePanelRef = useRef();

  const dropdownPiscineRef = useRef();

  function openNav() {
    sidePanelRef.current.style.width = "100vw";
  }
  
  function closeNav() {
    sidePanelRef.current.style.width = "0";
  }

  function handleReload(e) {
    let pathLink = e.currentTarget.getAttribute("path");  
    let pathWindow = window.location.pathname;
    console.log(pathLink)
    console.log(pathWindow)
    if (pathLink == pathWindow) window.location.reload() 
  }

  function SidePanel() {

    let location = useLocation().pathname;

    return (
      <div id="mySidepanel" className="sidepanel" ref={sidePanelRef}>
        <div className="closebtn" onClick={() => closeNav()}>
        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g id="Menu / Close_SM">
          <path id="Vector" d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </g>
      </g>
    </svg>
        </div>
        {location == "/" ? null :
        <li>
          <NavLink to="/">Home</NavLink>
        </li> }
        <li>
          <NavLink path="/servizi" onClick={(e) => handleReload(e)} to="/servizi">{t("navbar.piscine.servizi")}</NavLink>
        </li>
        <li>
          <NavLink path="/componenti" to="/componenti" onClick={(e) => handleReload(e)} >{t("navbar.piscine.componenti")}</NavLink>
        </li>
        <li>
          <NavLink path="/accessori" to="/accessori" onClick={(e) => handleReload(e)}>{t("navbar.piscine.accessori")}</NavLink>
        </li>
        <li>
          <NavLink path="/ristrutturazione" to="/ristrutturazione" onClick={(e) => handleReload(e)}>{t("navbar.piscine.ristrutturazioni")}</NavLink>
        </li>
        <li>
          <NavLink path="/costruzioni" to="/costruzioni" onClick={(e) => handleReload(e)}>{t("navbar.piscine.costruzioni")}</NavLink>
        </li>
        <li>
          <NavLink path="/chi-siamo" to="/chi-siamo" onClick={(e) => handleReload(e)}>{t("navbar.chi_siamo")}</NavLink>
        </li>
        <li>
          <NavLink path="/gallery" to="/gallery" onClick={(e) => handleReload(e)}>{t("navbar.galleria")}</NavLink>
        </li>
        <li>
          <NavLink path="/domande-frequenti" to="/domande-frequenti" onClick={(e) => handleReload(e)}>{t("navbar.piscine.domande")}</NavLink>
        </li>
        <li>
        <NavLink path="/contatti" to="/contatti" onClick={(e) => handleReload(e)}>{t("navbar.contatti")}</NavLink>
        </li>
      </div>
  
    )
  }

  window.onclick = (e) => {
    let li = e.target.closest("li");

    if (isOpen && li == null) setIsOpen(false)
    if (isOpenPiscine && li == null) setIsOpenPiscine(false)
  }
  

  function changeLanguage(lng) {
    let currentLanguage = document.cookie.split("=")[1];
    if (lng === currentLanguage) return;
    i18next.changeLanguage(lng);
    document.documentElement.lang = lng;
  }

  function HamburgerMenu() {
    return (
        <button className="openbtn" onClick={() => openNav()}>
          <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
            <path d="M20 7L4 7" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path>
            <path d="M20 12L4 12" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path>
            <path d="M20 17L4 17" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path>
  </g>
</svg>

        </button>  
    )
  }


  function DropDown() {

    // const dropdownRef = useRef();

    return (
      <div className="dropdown">
        <li className="dropdown-button" onClick={() => {
          setIsOpen(s => !s)
        }}>
      <svg 
        width="40px" height="40px" viewBox="0 0 24 24"
        role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="languageIconTitle"
        stroke="#ffff" strokeWidth="1" strokeLinecap="square"
        strokeLinejoin="miter" fill="none" color="#000000">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <title id="languageIconTitle">Language</title> <circle cx="12" cy="12" r="10"></circle> 
          <path strokeLinecap="round" d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z">
            </path> <path strokeLinecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15"></path> </g></svg>
       </li>
        <div className={`dropdown-content ${isOpen ? " show" : ""}`} ref={dropdownRef}>
          {languages.map(({country_code, name, code}) =>  {
            return <button onClick={() => changeLanguage(country_code)} key={country_code}><span  className={`fi fi-${code}`}></span><p>{name}</p></button>
          } ) }
        </div>
    </div>
    )
  }


  const { scrollY } = useScroll()
  const ref = useRef();

  useMotionValueEvent(scrollY, "change", (latest) => {

    if (styledOn) return
    
    if (latest >  80) {
      ref.current.style.backgroundColor = "var(--theme-main-blue)"
    } else if (latest <= 80) {
      ref.current.style.backgroundColor = "transparent";
    }
  })

  function onClickDropdownPiscine(e) {
    setIsOpenPiscine(s => !s)
  }

  function DropdownPiscine() {

    let {t} = useTranslation(); 

    

    return (
      <div className="dropdown-piscine">
      <li onClick={(e) => onClickDropdownPiscine(e)} className="dropdown-btn-piscine navlist-link">{t("navbar.piscine.title")}</li>
       <div  className={`dropdown-content-piscine ${isOpenPiscine ? "show" : ""} `} ref={dropdownPiscineRef}>
         <NavLink onClick={(e) => handleReload(e)} path="/servizi"  to="/servizi">{t("navbar.piscine.servizi")}</NavLink>
         <NavLink onClick={(e) => handleReload(e)} path="/ristrutturazione" to="/ristrutturazione">{t("navbar.piscine.ristrutturazioni")}</NavLink>
         <NavLink onClick={(e) => handleReload(e)} path="/costruzioni" to="/costruzioni">{t("navbar.piscine.costruzioni")}</NavLink>
         <NavLink onClick={(e) => handleReload(e)} path="/componenti" to="/componenti">{t("navbar.piscine.componenti")}</NavLink>
         <NavLink onClick={(e) => handleReload(e)} path="/accessori" to="/accessori">{t("navbar.piscine.accessori")}</NavLink>
         <NavLink onClick={(e) => handleReload(e)} path="domande-frequenti" to="/domande-frequenti">{t("navbar.piscine.domande")}</NavLink>
      </div>
    </div>
    )
  }

  return (
    <>
    <ScrollToTop />
    <nav 
       className={
        styledOn 
          ? (border ? "navbar navbar-styledOn flex space-around border" : "navbar navbar-styledOn flex space-around")
          : (border ? "navbar flex space-around border" : "navbar flex space-around")
      }  ref={ref}>
      <NavLink path="/" to="/" onClick={(e) => handleReload(e)} className="">
        <Logo />
      </NavLink>
      <ul className="navlist">
         <DropdownPiscine />
        <li className="navlist-link">
          <NavLink path="/chi-siamo" to="/chi-siamo" onClick={(e) => handleReload(e)}>{t("navbar.chi_siamo")}</NavLink>
        </li>
        <li className="navlist-link">
          <NavLink path="/gallery" to="/gallery" onClick={(e) => handleReload(e)}>{t("navbar.galleria")}</NavLink>
        </li>
        <li className="navlist-link">
        <NavLink path="/contatti" to="/contatti" onClick={(e) => handleReload(e)}>{t("navbar.contatti")}</NavLink>
        </li>
        <DropDown />
        <HamburgerMenu />
        <SidePanel />
      </ul>
    </nav>
    </>
  )
}
