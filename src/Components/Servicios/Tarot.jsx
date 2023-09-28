import "./styles.css"; // archivo CSS con estilos para las tarjetas
import { BsFillCreditCard2BackFill, BsFillTelephoneForwardFill } from "react-icons/bs";

function Tarot() {

  return (

      <section id="tarot">
        <h2 id="titulo-serv">Tarot Online</h2>
        <h3 id="subtitle">
        Al llamar al número de teléfono <a
              href="tel: 806499570"
              rel="noreferrer"
              target="_blank"
            >806499570</a> puedes acceder a una consulta de tarot 
        personalizada y precisa desde la comodidad de su hogar. En Luz Divina comprendemos 
        la importancia de la privacidad y la confidencialidad, por lo que proporcionamos un 
        ambiente seguro y respetuoso durante las sesiones.
        </h3>
        <p id="p-tarot">
            Ya sea que estés buscando orientación en el amor, la carrera, la salud o cualquier 
            otro aspecto de tu vida, en Luz Divina estamos dedicados a brindarte una visión 
            clara y perspicaz. Con un estilo cálido y amigable creamos un ambiente de confianza 
            y apoyo, lo que te permitirá sentirte cómodo al compartir tus inquietudes 
            y recibir orientación.
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

        <h3 id="subtitle">
        Los servicios de Luz Divina son altamente valorados por su precisión y su capacidad 
        para ayudar a las personas a tomar decisiones informadas y positivas. A través de la 
        lectura de tarot por teléfono, ofrecemos una experiencia enriquecedora 
        y transformadora que te permitirá comprender mejor tu presente y tomar medidas para 
        construir un futuro más prometedor.<br></br><br></br>
        No importa dónde te encuentres, puedes confiar en los servicios 
        profesionales de Luz Divina Tarot para obtener una lectura precisa y significativa.
      </h3>


      </section>

      

  );
}

export default Tarot;
