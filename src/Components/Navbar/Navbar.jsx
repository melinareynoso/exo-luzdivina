import "./Navbar.css";
import { useRef, useState } from "react";

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    if (window.innerWidth <= 1024) {
      navRef.current.classList.toggle("responsive_nav");

      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    }
  };

  const [icon, setIcon] = useState("nav__toggler");

  

  return (
    <header id="menu-sup">
      {/* 
        <div id="left">
        <img id="logo-sup" alt="logo" src={logo}/> 
        <a href="#home"><span id="span" >Luz Divina</span></a> 
        <h1 id="title-nav">Luz Divina</h1>
        </div>

        
      */}

      <div id="left">
        <h1>LUZ DIVINA</h1>
      </div>

      <div id="center">  
      </div>  


      <div id="rigth">
        <nav id="links" ref={navRef} onClick={showNavbar}>
          <a href="#home">
            <p>Inicio</p>
          </a>
          <a href="#tarot">
            <p>Tarot</p>
          </a>
          {/* <a href="#masservicios">
            <p>Más servicios</p>
          </a> */}
          <a href="#Especialistas">
            <p>Especialistas</p>
          </a> 
          {/* <a href="#Testimonios">
            <p>Testimonios</p>
          </a> */}
          

        </nav>
        <div onClick={showNavbar} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </header>
  );
}
