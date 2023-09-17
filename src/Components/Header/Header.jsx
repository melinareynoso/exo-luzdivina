import React from "react";
import "./Header.css";
import logo from "../../images/logo_new.webp.png";
// import { FaWhatsapp } from "react-icons/fa";
// import { useSelector } from 'react-redux';
import "../../Fonts/stylesheet.css";
import "../../Fonts/ProximaNovaRg.otf";
import Navbar from "../Navbar/Navbar";



export default function Header() {

  // const Numbers = useSelector(state => state.numbers);
  
  
  return (
    <header className="header" id="home">
      <Navbar />

      <div className="overlay text-white text-center">
        <div id="container-main">
          <h1 id="titulo">Templo Dharma</h1>

          <img id="logo-inicio" src={logo} alt={logo.toString()} />
          
          <p id="frase">
          Con solo desearlo no cambias nada. Pero tú decisión puede cambiarlo todo.
          </p>

{/* <a className="btn_navbar" onclick={"return gtag_report_conversion('https://api.whatsapp.com/send?phone=' + Numbers);"} href={`https://api.whatsapp.com/send?phone=${Numbers}`} rel="noreferrer" target="_blank"><FaWhatsapp id="whatsapp-icon" /><h6 id="contact">Contactanos</h6></a> */}
{/* <a className="btn-wsp" onclick={"return gtag_report_conversion('https://api.whatsapp.com/send?phone=' + Numbers);"} rel="noopener noreferrer" href={`https://api.whatsapp.com/send?phone=${Numbers}`} target="_blank"><FaWhatsapp id="whatsapp-icon-float" /></a> */}

        </div>
      </div>
    </header>
  );
}
