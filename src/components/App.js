import React, { useState } from "react";

import Header from "./Header";
import Main from "./Main";

import "../index.css";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(true);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(true);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(true);

  const [isOpenAvatar, setOpenAvatar] = useState("");
  const [isOpenProfile, setOpenProfile] = useState("");
  const [isOpenCard, setOpenCard] = useState("");
  const [isOpenImagePopup, setIsOpenImagePopup] = useState("");

  const [selectedCard, setSelectedCard] = useState({});

  const handleEditAvatarClick = () => {
    if (isEditProfilePopupOpen) {
      setOpenAvatar("popup_opened");
    }
  };
  const handleEditProfileClick = () => {
    if (isAddPlacePopupOpen) {
      setOpenProfile("popup_opened");
    }
  };
  const handleAddPlaceClick = () => {
    if (isEditAvatarPopupOpen) {
      setOpenCard("popup_opened");
    }
  };

  function handleCardClick(propsCard) {
    setIsOpenImagePopup("popup_opened");
    setSelectedCard(propsCard);
  }

  const closeAllPopups = () => {
    setOpenAvatar("");
    setOpenProfile("");
    setOpenCard("");
    setIsOpenImagePopup("");
  };

  return (
    <div className="content page__content">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm name={"profile"} title={"Редактировать профиль"} buttonText={"Сохранить"} isOpen={isOpenProfile} onClose={closeAllPopups}>
        <fieldset className="form__profile-info">
          <input type="text" className="form__item form__item_el_heading" id="heading" name="heading" placeholder="Введите Ваше имя" minLength={2} maxLength={40} required="" />
          <span className="form__item-error heading-error" />
          <input type="text" className="form__item form__item_el_subheading" id="subheading" name="subheading" placeholder="Ваша профессия" minLength={2} maxLength={200} required="" />
          <span className="form__item-error subheading-error" />
        </fieldset>
      </PopupWithForm>
      <PopupWithForm name={"cards"} title={"Новое место"} buttonText={"Создать"} isOpen={isOpenCard} onClose={closeAllPopups}>
        <fieldset className="form__profile-info">
          <input type="text" className="form__item form__item_el_place-name" id="place-name" name="name" placeholder="Название" minLength={2} maxLength={30} required="" />
          <span className="form__item-error place-name-error" />
          <input type="url" className="form__item form__item_el_url" id="url" name="link" placeholder="Ссылка на картинку" required="" />
          <span className="form__item-error url-error" />
        </fieldset>
      </PopupWithForm>
      <PopupWithForm name={"delete"} title={"Вы уверены?"} buttonText={"Да"} />
      <PopupWithForm name={"avatar"} title={"Обновить аватар"} buttonText={"Сохранить"} isOpen={isOpenAvatar} onClose={closeAllPopups}>
        <fieldset className="form__profile-info">
          <input type="url" className="form__item form__item_el_url" id="avatar" name="link" placeholder="Ссылка на аватар" required="" />
          <span className="form__item-error avatar-error" />
        </fieldset>
      </PopupWithForm>
      <ImagePopup onClose={closeAllPopups} selectedCard={selectedCard} isOpen={isOpenImagePopup} />
    </div>
  );
}

export default App;
