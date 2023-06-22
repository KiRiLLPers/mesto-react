import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({ isOpen, onClose, onAddPlace, isLoading }) => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name,
      link,
    });

    onClose()
  }
  return (
    <PopupWithForm name={"cards"} title={"Новое место"} buttonText={"Создать"} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} isLoading={isLoading}>
      <input type="text" className="form__item form__item_el_place-name" id="place-name" name="name" placeholder="Название" minLength={2} maxLength={30} required="" onChange={handleChangeName} />
      <span className="form__item-error place-name-error" />
      <input type="url" className="form__item form__item_el_url" id="url" name="link" placeholder="Ссылка на картинку" required="" onChange={handleChangeLink} />
      <span className="form__item-error url-error" />
    </PopupWithForm>
  );
};
export default AddPlacePopup;
