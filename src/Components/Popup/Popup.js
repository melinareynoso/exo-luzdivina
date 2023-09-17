import React, { useEffect, useState } from 'react';
import './Popup.css';
import flayer from "./flayertarot.png"

function Popup({ onClose }) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    onClose();
  };

  return showPopup ? (
    <div className="popup">
      <div className="popup-content">
        <img
          src={flayer}
          alt="Imagen del popup"
          className="popup-image"
        />
        <span className="popup-close" onClick={handleClose}>
          &#10006;
        </span>
      </div>
    </div>
  ) : null;
}

export default Popup;
