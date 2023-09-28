import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import "./Footer.css";

const FooterModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <footer>
        <Button id="tyc" onClick={handleModal}>
          Términos y condiciones
        </Button>
        <p id="tyctarot">
          *El precio máximo por minuto de esta llamada es de 1,21 euros si llama
          desde un teléfono fijo y de 1,57 euros si llamas desde un teléfono
          móvil, impuestos incluídos. 
          <br></br>
          Servicio de tarot prestado por SMTM
          Sociedad Por Acciones Simplificada SAS, apartado de correos 164, CP
          46002, Valencia. Solo para mayores de 18 años.
        </p>
      </footer>
      <Modal show={showModal} onHide={handleModal} centered>
        <Modal.Header>
          <Modal.Title>POLÍTICAS DE PRIVACIDAD</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>1. Objeto.
1.1. Las presentes condiciones legales regulan el uso y las condiciones de acceso del sitio Web https://luzdivinatarot.com (de ahora en adelante el «sitio»), página web propiedad de SMTM SAS, bajo la denominación Luz Divina Tarot (en adelante «Empresa»), debidamente registrada.

1.2. El uso o el acceso a este sitio implica que usted (en adelante «usuario») reconoce haber leído y comprendido las presentes condiciones legales de uso, y acuerda cumplirlas en su totalidad.

1.3. Si usted como usuario no está de acuerdo con alguna de las presentes condiciones deberá dejar de acceder a este sitio.

2. Propiedad del Sitio.
2.1.este sitio web https://luzdivinatarot.com es propiedad de SMTM SAS con CUIT número 30717814203, debidamente registrada.

2.2. Dicha entidad tiene su domicilio social en la calle Martin Gil 4996 - Cordoba - Arg.

2.3. Puede contactar con SMTM SAS en la dirección de correo electrónico desarrolladorsmtm@gmail.com

2.4. Salvo que expresamente se establezca de otro modo, las comunicaciones con Luz Divina Tarot se podrán realizar mediante correo ordinario en la dirección física indicada o mediante correo electrónico. La compañía se pondrá en contacto con el usuario vía correo electrónico, en la dirección que obre en su poder o le sea facilitada al respecto.

3. Funcionamiento del sitio.
3.1. Luz Divina Tarot se reserva el derecho a modificar, en cualquier momento, unilateralmente y sin necesidad de previa notificación a sus usuarios, los contenidos, la estructura, el funcionamiento o las condiciones de acceso de este sitio.

3.2. No obstante, los usuarios del sitio son conscientes y aceptan que parte de la información contenida en él podría ser incorrecta, estar incompleta o anticuada, o contener errores tipográficos. Luz Divina Tarot se reserva el derecho de actualizar el contenido de este sitio y no será responsable de la no actualización de la información.

3.3. Así mismo Luz Divina Tarot se reserva el derecho a suspender temporalmente, sin necesidad de previo aviso, el acceso a este sitio para realizar operaciones de mantenimiento, actualización, mejora o de reparación.

3.4. Está prohibido que el usuario utilice este sitio web para el envío, la transmisión o la publicación de cualquier material ilegal, amenazante, calumnioso, difamatorio, propagandístico, escandaloso, obsceno, pornográfico, o cualquier otro material que pudiera dar lugar a responsabilidades civiles o penales conforme a la legislación aplicable, hechos éstos de los que en cualquier caso será responsable el usuario.

3.5. Luz Divina Tarot tampoco garantiza que este sitio web o los servidores que lo alojan estén libres de virus y de otro tipo de software potencialmente peligroso, así como la disponibilidad, continuidad, utilidad e infalibilidad del funcionamiento de este sitio, de sus servicios o sus contenidos; ni la licitud, fiabilidad o utilidad de la información y contenidos suministrados por terceros a través de este sitio.

3.6. Con carácter general sólo podrán usar este sitio las personas físicas y jurídicas con capacidad jurídica suficiente de acuerdo con la legislación aplicable. De modo excepcional podrán usar el sitio menores de edad que hayan obtenido previamente la autorización de sus padres o tutores legales, los cuales serán responsables del uso que el menor a su cargo haga del sitio.

4. Comportamiento de los usuarios. Prohibiciones.
4.1. El uso de los contenidos y servicios ofrecidos por Luz Divina Tarot será bajo el exclusivo riesgo y responsabilidad del usuario.

4.2. La compañía no asume ningún deber o compromiso de verificar ni de vigilar los contenidos e informaciones introducidos por los usuarios.

4.3. El usuario se compromete a utilizar el sitio web y todo su contenido y servicios de un modo diligente, siempre con sujeción a la Ley, a las buenas costumbres, y a las presentes condiciones generales, manteniendo siempre el respeto hacia los demás usuarios.

4.4. Asimismo, el usuario se compromete a hacer un uso adecuado de los materiales e informaciones contenidos en el sitio web, no empleándolos para realizar actividades ilícitas o constitutivas de delito, que atenten contra los derechos de terceros, o que infrinjan la regulación sobre propiedad intelectual e industrial, o cualesquiera otras normas del ordenamiento jurídico aplicable, siendo el único responsable frente a Luz Divina Tarot y a terceros por el incumplimiento de lo aquí establecido.

4.5. El usuario se compromete a no trasmitir, introducir, difundir o poner a disposición de terceros, cualquier tipo de material e información contrarios a la Ley, a la moral, al orden público y a las presentes condiciones generales de uso.

4.6. En todo caso, el usuario habrá de aportar siempre una información veraz que no pueda llevar a ningún tipo de confusión, así como datos identificativos correctos, y nunca suplantando a terceros o en nombre de éstos.

4.7. En relación a la infracción de cualquier irregularidad, recuerde que la dirección IP de su ordenador queda registrada por el simple acceso a nuestro sitio web.

5. Zonas protegidas del sitio web.
5.1. Generalmente para el acceso a los servicios de Luz Divina Tarot no será necesario la suscripción o registro del usuario.

5.2. La utilización de determinados servicios podrá estar condicionada a la previa obtención de una cuenta personal mediante el registro del usuario. Este registro se efectuará en la forma expresamente señalada en el sitio web.

5.3. Este sitio puede contener zonas de acceso restringido, protegidas por identificadores y contraseñas u otros mecanismos de seguridad. El usuario no intentará acceder a estas zonas de acceso restringido si no está debidamente autorizado por Luz Divina Tarot, ni intentará soslayar o manipular los mecanismos de protección establecidos por ella.

5.4. El usuario que haya sido autorizado por Luz Divina Tarot para acceder a alguna de estas zonas protegidas será el exclusivo responsable de mantener en estricto secreto, y no divulgar a terceros, los identificadores, contraseñas y demás métodos de seguridad que Almas Gemelas ponga a su disposición para acceder a las zonas protegidas. El usuario será por tanto el único responsable de los daños que se deriven de no mantener en secreto los mecanismos de seguridad mencionados.

Se comunica al usuario que el intento de acceso no autorizado a las zonas de acceso restringido de este sitio puede estar sujeto a responsabilidad civil y/o penal.

6. Propiedad intelectual e industrial.
6.1. Todos los contenidos del sitio, incluyendo, a título enunciativo y no limitativo, las marcas comerciales, logotipos, gráficos, imágenes, archivos de sonido y vídeo, software, código de programación, textos, iconos, y los nombres que identifican servicios (en adelante «los materiales») son propiedad de Luz Divina Tarot y están protegidos por la legislación vigente en materia de derechos de propiedad intelectual e industrial.

6.2. El acceso del usuario a este sitio no implica ningún tipo de renuncia, transmisión ni cesión, total o parcial, de dichos derechos de propiedad, por esta razón, el acceso a estos contenidos o elementos no otorga, bajo ningún concepto, al usuario la posibilidad de su copia, venta, modificación, reproducción, publicación, cesión, transmisión, o creación de nuevos productos o servicios derivados de la información y elementos aquí contenidos.

6.3. Es por ello que el usuario de este sitio no podrá, salvo previa autorización expresa y por escrito de Luz Divina Tarot, copiar, distribuir, descargar, modificar, suprimir, borrar, alterar, publicar, transmitir, o aprovecharse de cualquier forma de los materiales que contiene.

6.4. El usuario no adquiere derechos o licencia en relación con el servicio ni los elementos en el mismo, excepto el derecho limitado a utilizar el servicio de acuerdo con las condiciones aplicables. Únicamente podrá utilizar los contenidos o elementos a los que acceda a través de los servicios de Luz Divina Tarot para su propio uso y necesidades, obligándose a no realizar ni directa, ni indirectamente una explotación comercial, ni de los servicios, ni de los materiales, elementos, o información obtenidos a través de los mismos.

7. Protección de Datos y Política de privacidad.
7.1. De acuerdo con lo establecido en la legislación vigente en materia de protección de datos de carácter personal, Luz Divina Tarot informa al usuario de la existencia de un fichero de datos de carácter personal que contiene los datos que los usuarios introducen en el sitio. Luz Divina Tarot es responsable del fichero.

7.2. Los datos personales que el usuario debe facilitarnos son indispensables para el envío de los pedidos y redacción de facturas. La ausencia de estos datos conllevará la anulación automática de los pedidos. Al inscribirse en la página, el usuario se compromete a proporcionarnos datos personales válidos, datos que permiten la prestación del servicio por parte de Luz Divina Tarot y la correcta identificación del usuario registrado, así como el envío de información y publicidad de los diferentes productos y ofertas que Luz Divina Tarot pueda tener en su página web.

7.3. El usuario y titular de los datos queda informado, y presta su consentimiento inequívoco, de que mediante la cumplimentación de los diversos formularios sus datos personales quedarán incorporados a los ficheros automatizados de Luz Divina Tarot, con el fin de poderle prestar y ofrecer nuestros servicios así como mantener informado al usuario sobre los productos ofertados.

7.4. El usuario garantiza la autenticidad de todos aquellos datos que comunique a través de https://luzdivinatarot.com y mantendrá actualizada la información que facilite a Luz Divina Tarot, de forma que responda en todo momento a su situación real, siendo el único responsable de las manifestaciones falsas o inexactas que realice, así como de los perjuicios que cause por ello a Luz Divina Tarot o a terceros.

7.5. La aceptación este aviso legal supone la prestación por parte del usuario de su consentimiento expreso para que Luz Divina Tarot pueda remitirle comunicaciones publicitarias, promocionales o comerciales por correo electrónico u otro medio de comunicación, en los términos establecidos en la Ley 34/2002, de Servicios de la Sociedad de la Información y del Correo Electrónico. En el supuesto de no estar interesado en recibir este tipo de comunicaciones puede dirigirse a Luz Divina Tarot a la dirección anteriormente indicada o al correo electrónico desarrolladorsmtm@gmail.com , manifestando su voluntad.

7.6. Luz Divina Tarot se compromete al cumplimiento de su obligación de secreto con respecto a los datos de carácter personal y al deber de tratarlos con confidencialidad. A estos efectos adoptará las medidas de seguridad razonables previstas por la ley para evitar su alteración, pérdida o acceso no autorizado.

7.7. El usuario podrá ejercer sus derechos de acceso, rectificación, cancelación y oposición de sus datos de carácter personal en los términos establecidos en la legislación vigente, a través de desarrolladorsmtm@gmail.com

8. Política del uso de Cookies.
8.1. Los «Cookies» son ficheros de texto que los servidores que alojan sitios web envían a los navegadores de sus usuarios. Los cookies no se pueden ejecutar ni pueden contener virus, y sólo pueden leerse por el servidor que aloja el sitio web.

8.2. Este sitio requiere el empleo de «Cookies» para su correcto funcionamiento.

9. Información transmitida por los Usuarios.
9.1. Este sitio puede contener foros públicos, salas de conversación («chats») y otros mecanismos mediante los cuales los usuarios pueden expresar su opinión e intercambiar archivos en formato electrónico. Las informaciones, las comunicaciones y los ficheros que se envíen a través de estos foros y salas, junto con las direcciones de correo electrónico y otras comunicaciones divulgadas por los usuarios no tendrán la consideración de material confidencial.

9.2. Cuando los usuarios transmitan o publiquen cualquier tipo de información a este sitio, estarán otorgando autorización a Luz Divina Tarot para utilizar dicha información, incluyendo, sin limitación, la utilización, reproducción, transmisión, publicación o envío de dicha información con cualquier objeto, incluyendo, sin limitación, la reproducción, revelación, transmisión, publicación o envío de dicha información.

9.3. Luz Divina Tarot no asume responsabilidad alguna por el contenido de la información o de las comunicaciones enviadas por sus usuarios a través de estas áreas.

9.4. Todas las opiniones redactadas por los usuarios son controladas por el equipo de marketing. Si las opiniones recibidas infringen la ley, la ética o la moral (publicidad abusiva, difamación, insultos, comentarios fuera de contexto…), Luz Divina Tarot se reserva el derecho de rechazar o modificar dichas opiniones.

10. Exclusión de garantías y Responsabilidades.
10.1. Toda la información contenida en este sitio se suministra «tal cual», sin que Luz Divina Tarot otorgue garantías de ninguna clase, tanto expresas como implícitas, relativas a la precisión, fiabilidad e integridad de este sitio. Luz Divina Tarot no otorga ninguna garantía, explícita o implícita, incluyendo, a título enunciativo y no limitativo, garantías por incumplimiento de calidad, de comerciabilidad o de idoneidad para un fin determinado.

10.2. Luz Divina Tarot tampoco garantiza que este sitio web, o los servidores que lo alojan, estén libres de virus y de otros tipos de software potencialmente peligroso.

10.3. Luz Divina Tarot no garantiza la disponibilidad, continuidad, utilidad e infalibilidad del funcionamiento de este sitio, de sus servicios o de sus contenidos; ni la fiabilidad o utilidad de la información y contenidos suministrados por terceros a través de este sitio. Pese a que Luz Divina Tarot realiza todo esfuerzo razonable para garantizar la disponibilidad, acceso, continuidad, e infalibilidad del funcionamiento y de sus servicios, Luz Divina Tarot no garantiza las mismas, pues pueden verse interferidas por numerosos factores ajenos a ella. En consecuencia, no será responsable, (con los límites establecidos en el ordenamiento jurídico vigente), por los daños y perjuicios de toda naturaleza causados al usuario como consecuencia de la citada indisponibilidad, fallos de acceso y falta de continuidad.

11. Limitación de responsabilidad.
11.1. Luz Divina Tarot no se responsabilizará en forma alguna de cualquier daño directo o indirecto, lucro cesante o pérdida de datos y /o clientes que se deriven del uso por parte de los usuarios o de la imposibilidad de uso de este sitio web.

11.2. Este sitio puede contener vínculos hipertextuales («Links») y remisiones a otros sitios y páginas web que pueden no estar controlados por Luz Divina Tarot, en estos casos Luz Divina Tarot no se responsabilizará de los contenidos que puedan aparecer en dichas páginas.

11.3. El usuario acepta expresamente dejar exenta a Luz Divina Tarot de cualquier responsabilidad de los actos u omisiones del usuarios basadas en los contenidos alojados en este sitio.

11.4. El usuario entiende y acepta expresamente que cualquier tipo de contenido, software o cualquier otro tipo de material, que descargue u obtenga de cualquier otra forma a través de este sitio se realiza por su cuenta y riesgo, y que él como usuario será el único responsable de cualquier daño o pérdida de datos causado a sus sistemas informáticos.

11.5. Luz Divina Tarot ha puesto todos los medios razonables para asegurar que la información que contiene este sitio es correcta. No obstante, los usuarios del sitio aceptan conocer que parte de la información contenida en este sitio podría ser incorrecta, estar incompleta o anticuada, o contener errores.

12. Derecho de exclusión y nulidad parcial.
12.1. Luz Divina Tarot reserva el derecho de cancelar, eliminar, o desautorizar la utilización de todos o alguno de los servicios del sitio web a cualquier usuario sin necesidad de previo aviso si a su criterio, y en cualquier tipo de circunstancia, éste estuviera realizando un uso incorrecto del mismo.

12.2. Si un Tribunal competente resuelve que cualquiera de las disposiciones contenidas en estas condiciones legales es ilícita o nula, tal disposición será excluida si así se requiriera legalmente. El usuario acepta expresamente que el resto de las disposiciones no excluidas no se verán modificadas, y que seguirán teniendo plena vigencia.

13. Ley aplicable y Jurisdicción.
13.1. Este sitio se encuentra ubicado y es operado desde España. Todas las cuestiones relativas a este sitio se rigen por las leyes españolas y se someten a la jurisdicción de los Juzgados y Tribunales competentes de España, sin que sean de aplicación los principios sobre conflicto de leyes. En aquellos casos en que el usuario no tenga la condición de consumidor, o que tenga su domicilio fuera de España, Luz Divina Tarot y el usuario se someterán a los Juzgados y Tribunales de Girona, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.

13.2. Si el usuario decide utilizar o consultar este sitio desde fuera de España, deberá tener presente que lo hace por propia iniciativa, y que es responsable del cumplimiento de las leyes locales pertinentes.

14. Duración y revisión.
14.1. Pese a que la relación jurídica entre Luz Divina Tarot y el usuario, derivada del acceso y utilización del sitio, tiene una duración indefinida, ésta se considerará finalizada en el momento que la compañía modifique las presentes condiciones generales. En el momento en el que la compañía anuncie la modificación de las condiciones generales, y el usuario acceda y utilice los servicios y contenidos del sitio, se considerará iniciada una nueva relación jurídica entre ambas partes de carácter igualmente indefinido.

14.2. Sin perjuicio de lo anterior, la empresa Luz Divina Tarot está facultada para suspender, interrumpir, o dar por finalizada de modo unilateral, en cualquier momento y sin necesidad de preaviso ni justa causa, la prestación de cualquiera de los servicios que ofrece.

14.3. Luz Divina Tarot se reserva el derecho a revisar, unilateralmente y sin previo aviso, las presentes condiciones de uso en cualquier momento. Las condiciones revisadas entrarán en vigor tan pronto queden publicadas en este sitio. Si el usuario hace uso habitual de este sitio deberá revisar las condiciones con regularidad, y se abstendrá de acceder al sitio si no considerara aceptables cualquiera de las condiciones revisadas.</p>

                  </Modal.Body>
        <Modal.Footer>
          <Button id="close-modal" onClick={handleModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FooterModal;
