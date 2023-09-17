import { useState } from "react";
import "./styles.css"; // archivo CSS con estilos para las tarjetas

import {
  BsFillCreditCard2BackFill,
  BsFillTelephoneForwardFill,
} from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { useSelector } from "react-redux";

import ancianos from "./ancianos.jpg";
import endulza from "./endulza.jpg";
import retorno from "./retorno.jpg";
import sexual from "./sexual.jpg";

const cardsData = [
  {
    id: 1,
    title: "Amarres de amor para toda la vida",
    imageSrc: ancianos, // Aquí puedes cambiar la URL de la imagen
    description:
      "El terreno del amor es uno de los temas predilectos de nuestros consultantes y estos hechizos son la solución perfecta para conseguir el amor. Nuestro videntes que nacieron con el don de la clarividencia están deseando brindarte su ayuda para que tengas una vida amorosa larga y plena. Los amarres de amor tratan de solucionar problemas amorosos y proporcionarte la felicidad que tanto ansías. Nuestros videntes están disponibles las 24 horas del día para atenderte personalmente; así podrás contactar con ellos en cualquier momento y confiarles lo que tanto te preocupa.",
  },
  {
    id: 2,
    title: "Retorno de parejas",
    imageSrc: retorno,
    description:
      "A veces un solo error puede transformar tu vida en un abismo y tu felicidad en sufrimiento, te despiertas todas las mañanas arrepintiéndote de esa equivocación y que ese día nunca hubiera sucedido. Tus noches se convierten en pesadillas y te desvelas pensando que tu ser amado se ha alejado y nunca más regresará o volverá a ser el mismo. Este poderoso ritual revive la llama del amor y crea lazos tan fuertes que tu pareja regresara rendida a tus pies y totalmente enamorada y arrepentida.",
  },
  {
    id: 3,
    title: "Amarres sexuales",
    imageSrc: sexual,
    description:
      "Es un conjunto de rituales que se realiza por medio de Magia Blanca. Se utiliza para lograr la unión sexual con otra persona de cualquier sexo, con quienes han tenido una relación de amistad o conocidos (por ejemplo, compañeros de trabajo) pero no han logrado pasar mas allá de eso. Se redirige el deseo sexual de la otra persona hacia quien está realizando el amarre. Recuerdo que un trabajo así es delicado y si se deja en manos inexpertas puede tener efectos totalmente contrarios a los deseados.",
  },
  {
    id: 4,
    title: "Endulzamientos",
    imageSrc: endulza,
    description:
      "Los endulzamientos parece que busque los mismos objetivos que un amarre, es decir, recuperar a una pareja o evitar que alguien se distancie. Pero su mecanismo es distinto. EN el caso de estos hechizos de amor, lo que se intenta es potenciar los sentimientos positivos de la relacion o de una persona, así como alejar todos los sentimiento negativos. Por esta razóin se considera que el endulzamiento siempre lo que ofrece es algo bueno.",
  },
];

function Card({ id, title, imageSrc, description, isFlipped, handleFlip }) {
  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""}`}
      onClick={() => handleFlip(id)}
    >
      <div className="front">
        <picture className="img-container">
          <img src={imageSrc} alt={title} />
        </picture>
        <h2>{title}</h2>
      </div>
      <div className="back">
        <p>{description}</p>
      </div>
    </div>
  );
}

function Services() {
  const Numbers = useSelector((state) => state.numbers);

  const [flippedCards, setFlippedCards] = useState([]);

  const handleCardFlip = (cardId) => {
    if (flippedCards.includes(cardId)) {
      setFlippedCards(flippedCards.filter((id) => id !== cardId));
    } else {
      setFlippedCards([...flippedCards, cardId]);
    }
  };

  return (
    <>
      <section id="tarot">
        <h2 id="titulo-serv">Servicio de TAROT</h2>
        <p id="p-tarot">
          Descubre lo que el futuro tiene reservado para ti a través de una
          experiencia de tarot online única.<br></br>
          Conecta con nuestro equipo de expertos que te guiarán a través de las
          cartas para brindarte claridad y orientación. <br></br>
          Nuestro servicio de tarot online te ofrece respuestas a tus preguntas
          más importantes sobre el amor, la carrera, las relaciones y mucho más.
          Experimenta la magia del tarot desde la comodidad de tu hogar y obtén
          perspectivas valiosas para tomar decisiones informadas. <br></br>
          Tu camino hacia el conocimiento y la introspección comienza aquí.
          <br></br>
          <br></br>
          <div id="container-btns">


            <div id="btn-price">
            <a
              className="btn-call"
              href="https://tpvseguro.premiumnumbers.es/servicios/tpv/saldo/llamante/seguro/463/1082977/c777d0b26c9b22f967acfc0df16205bd88047700"
              rel="noreferrer"
              target="_blank"
            >
              <div id="btn-callvisa">
                <BsFillCreditCard2BackFill />
                <h6 id="numcall">919991727</h6>
              </div>
            </a>
            <p id="price">*BONO VISA: 15min 13€/<br></br>
            30 min 22€/60min 41€.</p>
            </div>


            <div id="btn-price">
            <a
              className="btn-call"
              href="tel: 806499570"
              rel="noreferrer"
              target="_blank"
            >
              <div id="btn-calltel">
                <BsFillTelephoneForwardFill />
                <h6 id="numcall">806499570 *</h6>
              </div>
            </a>
             {/* <p id="price">(*)</p> */}
            </div>

          </div>
        </p>
        {/* <p id="tyctarot">
          *El precio máximo por minuto de esta llamada es de 1,21 euros si llama
          desde un teléfono fijo y de 1,57 euros si llamas desde un teléfono
          móvil, impuestos incluídos. Servicio de tarot prestado por SMTM
          Sociedad Por Acciones Simplificada SAS, apartado de correos 164, CP
          46002, Valencia. Solo para mayores de 18 años.
        </p> */}
      </section>

      <section id="masservicios">
        <h2 id="titulo-serv">Más servicios</h2>
        <h3 id="subtitle">
          Además contamos con servicios relacionados a la formación de vínculos
          sentimentales, acá te muestro algunos de los casos en los que te
          podemos ayudar.
        </h3>
        <a
          className="btn_navbar"
          onclick={
            "return gtag_report_conversion('https://api.whatsapp.com/send?phone=' + Numbers);"
          }
          href={`https://api.whatsapp.com/send?phone=${Numbers}`}
          rel="noreferrer"
          target="_blank"
        >
          <FaWhatsapp id="whatsapp-icon" />
          <h6 id="contact">CONOCE MÁS</h6>
        </a>
        <div className="card-container">
          {cardsData.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              imageSrc={card.imageSrc}
              description={card.description}
              isFlipped={flippedCards.includes(card.id)}
              handleFlip={handleCardFlip}
            />
          ))}
        </div>
        <div id="text-container">
          <h2>SERVICIO EXCLUSIVO PARA MAYORES DE 18 AÑOS</h2>
        </div>
      </section>
    </>
  );
}

export default Services;
