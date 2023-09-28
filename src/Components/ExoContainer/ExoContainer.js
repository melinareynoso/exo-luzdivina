
import Header from '../Header/Header';
import Services from '../Servicios/Servicios';
import Especialistas from '../Especialistas/Especialistas';
// import Carousel from '../Carousel/Carousel';
import FooterModal from '../Footer/Footer';
import Tarot from '../Servicios/Tarot';
// import React, { useState, useEffect } from 'react';
// import Popup from '../Popup/Popup';



function ExoContainer() {
  // const [showPopup, setShowPopup] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowPopup(true);
  //   }, 3000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  // const closePopup = () => {
  //   setShowPopup(false);
  // };

  return (
    <div className="App">
    {/* {showPopup && <Popup onClose={closePopup} />} */}
      <Header/>
      <Tarot/>
      <Especialistas/>
      <Services/>
      <FooterModal/>
    </div>
  );
}

export default ExoContainer;