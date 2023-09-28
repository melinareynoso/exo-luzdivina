import React from "react";
import "./Especialistas.css";
import Antonio from "./Antonio.jpg";
import Aurora from "./Aurora.jpg";
import Baltazar from "./Baltazar.jpg";
import Paz from "./Paz.jpg";

export default function Especialistas() {
  return (
    <section id="Especialistas" className="esp-container">
      <h2 className="title">Nuestros especialistas</h2>
      <h3 id="subtitle">
        Nuestro equipo utiliza el tarot como una herramienta para conectar con
        la energía universal y brindar respuestas a tus preguntas y
        preocupaciones. Nuestra intuición y habilidades psíquicas nos
        permiten interpretar las cartas de manera profunda y precisa,
        proporcionando una visión detallada de los aspectos emocionales,
        profesionales, financieros y personales de tu vida.
      </h3>
      <div className="testimonial-row">
        <div id="especialista">
          <figure>
            <img src={Antonio} alt="Especialista" />
          </figure>
          <h3>Antonio</h3>
        </div>

        <div id="especialista">
          <figure>
            <img src={Aurora} alt="Especialista" />
          </figure>
          <h3>Aurora</h3>
        </div>

        <div id="especialista">
          <figure>
            <img src={Baltazar} alt="Especialista" />
          </figure>
          <h3>Baltazar</h3>
        </div>

        <div id="especialista">
          <figure>
            <img src={Paz} alt="Especialista" />
          </figure>
          <h3>Paz</h3>
        </div>
      </div>
    </section>
  );
}
