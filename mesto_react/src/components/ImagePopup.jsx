import React from "react";

const ImagePopup = ({ onClose, selectedCard, isOpen }) => {
  return (
    <div className={`popup popup-img ${isOpen}`}>
      <div className="popup__container-image">
        <figure className="popup__figure">
          <img src={selectedCard.link} alt={selectedCard.name} className="popup__image" />
          <figcaption className="popup__caption">{selectedCard.name}</figcaption>
        </figure>
        <button type="button" className="popup__close-btn" onClick={onClose} />
      </div>
    </div>
  );
};
export default ImagePopup;
