import React from "react";

const PopupWithForm = ({ title, name, isOpen, buttonText, onClose, children }) => {
  return (
    <>
      <div className={`popup popup-${name} ${isOpen}`}>
        <div className="popup__container">
          <form className={`form popup__form popup-form-${name}`} name={`form-${name}`} noValidate="">
            <h2 className="form__heading">{title}</h2>
            {children}
            <button type="submit" className="form__btn">
              {buttonText}
            </button>
          </form>
          <button type="button" className="popup__close-btn" onClick={onClose} />
        </div>
      </div>
    </>
  );
};
export default PopupWithForm;
