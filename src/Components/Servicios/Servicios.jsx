import { useState } from "react";
import "./styles.css"; // archivo CSS con estilos para las tarjetas


// import { useSelector } from "react-redux";

// import ancianos from "./ancianos.jpg";
// import endulza from "./endulza.jpg";
// import retorno from "./retorno.jpg";
// import sexual from "./sexual.jpg";

const cardsData = [
  {
    id: 1,
    title: "Ritual para la abundancia",
    // imageSrc: ancianos, // Aquí puedes cambiar la URL de la imagen
    description:
      "Este ritual se hace a la primera hora del día, ni bien te levantás. Vas a tener que llenar 3/4 partes de un vaso con agua y diluir en él una cucharada de azúcar. Luego hay que ponerlo al lado de una vela dorada (también puede ser amarilla). Luego, en un papel de color amarillo escribimos todo lo que deseamos lograr en el terreno económico y detallamos todos esos proyectos que tenemos en mente y con los que deseamos ganar dinero. Cuando estés segura de haber dejado todo lo que deseas por escrito, doblás el papel en cuatro partes y lo colocás debajo del vaso. En ese momento hay que poner una cucharada más de azúcar al agua y prender la vela. Cuando estés listo, cerrá los ojos y visualizate logrando todo lo que escribiste sin ningún tipo de esfuerzo. Tomate el tiempo que necesites y luego, dí en voz alta: Lo lograré. El dinero y la abundancia vendrán a mí. Gracias, gracias, gracias. ​Es importante repetir el ritual durante tres días seguidos. Cuando se apaga la tercera vela, se desecha el agua con azúcar y se quema el papel.",
  },
  {
    id: 2,
    title: "Ritual de limpieza",
    // imageSrc: retorno,
    description:
    "¿Qué necesitas?    Un recipiente.    Agua limpia.    Vinagre blanco y sal.    ¿Qué debes hacer?    Debes mezclar todos los ingredientes en el recipiente y usar esta mezcla para tu limpieza normal. Si tus pisos son de madera o de parqué y no puedes usar agua normal, puedes usarla para tu puerta de entrada, tus ventanas y el resto de tus muebles. Recuerda que esta mezcla también purifica la energía y los espacios, por lo que es importante que todos tus muebles también sean aseados. Los rituales de limpieza energética deben hacerse cada mes para asegurarse que en casa no se acumule la mala energía, si esto sucede empezarás a sentirte cansada y sin motivación, es mejor prevenir y liberar nuestro ambiente, es el mejor consejo para un hogar equilibrado."
  },
  {
    id: 3,
    title: "Limpieza con sahumos",
    // imageSrc: sexual,
    description:
      "Esta limpieza o ritual es ideal para descargar y aliviar los entornos en los que nos movemos, especialmente nuestro hogar. Sucede que el humo es sinónimo de purificación, de limpieza y de renovación espiritual.    ¿Cómo se hace? Si es posible, lo mejor es hacerlo en una sahumadora o un cuenco de barro.      A la hora de elegir qué quemar, podemos optar por sándalo (liberación de ataduras), lavanda (relajación), canela (dulcificación de procesos), mirra (renueva la energía y brinda paz), incienso (limpia y abre caminos) y palo santo (equilibra).      Se cierran las ventanas de la casa y la puerta del baño, y se abren los placares. Se prende un carbón vegetal al aire libre o cerca de una ventana, ya que el primer humo que libera es tóxico. Luego, se agregan las hierbas que deseamos.  Recorremos cada ambiente (menos el baño) desde el punto más alejado hasta la puerta de entrada, girando el recipiente en contra de las agujas del reloj. Es muy importante detenernos en los rincones. Cuando terminamos, se cierran los placares y se abren las ventanas. Es conveniente cambiarnos y lavar la ropa con la que hicimos el sahumo.",
  },
  {
    id: 4,
    title: "Rituales con sal para eliminar la mala energia",
    // imageSrc: endulza,
    description:
    "Cómo usarla para protegerte: Elemento mágico y cargado de significados esotéricos, ayuda a limpiar la negatividad. Rituales para emplearla en nuestro beneficio.    La sal, es una buena conductora de la energía positiva, lo que permite atraer las buenas ondas y favorece el rechazo de todo lo negativo. Dueña de propiedades mágicas y purificadora al máximo, ya su sola presencia pone una barrera contra el mal de ojo, la envidia y los trabajos de magia negra. -Para purificarnos:  En este caso, se trata de un baño de sal muy sencillo. Primero, se disuelve un puñado de sal gruesa en un recipiente de agua tibia. Una vez que terminamos de ducharnos, nos volcamos el agua con sal desde el cuello hacia abajo, por delante y por detrás, que el agua nos cubra el pecho y la espalda. No nos enjuagamos.    -Para evitar el Mal de Ojo:   Debajo de la cabecera de la cama se coloca un vaso de agua con sal gruesa. Si es exactamente debajo de donde se apoya la cabeza al dormir, mejor. Se deja el recipiente durante 7 días, se puede ir agregando sal para que haya una buena cantidad, y el último día se tira el contenido por el desagüe, en una maceta o en un lugar con tierra que lo neutralice.",  
    // -Para proteger el hogar: Se coloca un puñado de sal gruesa en cada rincón de la casa y detrás de la puerta principal de ingreso. Luego, se barre toda esa sal desde el interior hacia la puerta.  Cuando toda la sal se encuentra en la puerta de entrada, hay que juntarla y tirarla en una maceta o lugar con tierra.   -Contra la envidia: En el caso de sentirnos envidiados o de que haya gente que nos pone trabas, se debe tomar una foto propia y rodearla de sal gruesa. Cada día durante toda una semana hay que sumar algunos granos de sal para fortalecer la protección.  Cuando pasan los 7 días, esa sal se tira en tierra o por un desagüe y la foto se guarda en un cajón con cosas personales
   },
];

//borre "imageSrc" de la linea 44
function Card({ id, title, description, isFlipped, handleFlip }) {
  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""}`}
      onClick={() => handleFlip(id)}
    >
      <div className="front">
        {/* <picture className="img-container">
          <img src={imageSrc} alt={title} />
        </picture> */}
        <h2>{title}</h2>
      </div>
      <div className="back">
        <p>{description}</p>
      </div>
    </div>
  );
}

function Services() {
  // const Numbers = useSelector((state) => state.numbers);

  const [flippedCards, setFlippedCards] = useState([]);

  const handleCardFlip = (cardId) => {
    if (flippedCards.includes(cardId)) {
      setFlippedCards(flippedCards.filter((id) => id !== cardId));
    } else {
      setFlippedCards([...flippedCards, cardId]);
    }
  };

  return (


      <section id="masservicios">
        <h2 id="titulo-serv">Servicios gratuitos</h2>
        {/* <h3 id="subtitle">
          Además contamos con servicios relacionados a la formación de vínculos
          sentimentales, acá te muestro algunos de los casos en los que te
          podemos ayudar.
        </h3> */}
        
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
        

      </section>

  );
}

export default Services;
