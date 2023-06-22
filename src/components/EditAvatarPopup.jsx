import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar, isLoading }) => {
  const inputRef = useRef("");

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      link: inputRef.current.value,
    });

    onClose();
  }

  return (
    <PopupWithForm name={"avatar"} title={"Обновить аватар"} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} isLoading={isLoading}>
      <input type="url" className="form__item form__item_el_url" id="avatar" name="link" placeholder="Ссылка на аватар" required="" ref={inputRef} />
      <span className="form__item-error avatar-error" />
    </PopupWithForm>
  );
};
export default EditAvatarPopup;
