import React, { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser, isLoading }) => {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      heading: name,
      subheading: description,
    });

    onClose();
  }

  return (
    <PopupWithForm name={"profile"} title={"Редактировать профиль"} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} isLoading={isLoading}>
      <input
        type="text"
        className="form__item form__item_el_heading"
        id="heading"
        name="heading"
        placeholder="Введите Ваше имя"
        minLength={2}
        maxLength={40}
        required=""
        value={name || ""}
        onChange={handleChangeName}
      />
      <span className="form__item-error heading-error" />
      <input
        type="text"
        className="form__item form__item_el_subheading"
        id="subheading"
        name="subheading"
        placeholder="Ваша профессия"
        minLength={2}
        maxLength={200}
        required=""
        value={description || ""}
        onChange={handleChangeDescription}
      />
      <span className="form__item-error subheading-error" />
    </PopupWithForm>
  );
};
export default EditProfilePopup;
