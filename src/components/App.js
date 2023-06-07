import React, { useState } from "react";

import Header from "./Header";
import Main from "./Main";

import "../index.css";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isOpenImagePopup, setIsOpenImagePopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };

  function handleCardClick(propsCard) {
    setIsOpenImagePopup(true);
    setSelectedCard(propsCard);
  }
  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setIsOpenImagePopup(false);
  };

  return (
    <div className="content page__content">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm name={"profile"} title={"Редактировать профиль"} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input type="text" className="form__item form__item_el_heading" id="heading" name="heading" placeholder="Введите Ваше имя" minLength={2} maxLength={40} required="" />
        <span className="form__item-error heading-error" />
        <input type="text" className="form__item form__item_el_subheading" id="subheading" name="subheading" placeholder="Ваша профессия" minLength={2} maxLength={200} required="" />
        <span className="form__item-error subheading-error" />
      </PopupWithForm>
      <PopupWithForm name={"cards"} title={"Новое место"} buttonText={"Создать"} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input type="text" className="form__item form__item_el_place-name" id="place-name" name="name" placeholder="Название" minLength={2} maxLength={30} required="" />
        <span className="form__item-error place-name-error" />
        <input type="url" className="form__item form__item_el_url" id="url" name="link" placeholder="Ссылка на картинку" required="" />
        <span className="form__item-error url-error" />
      </PopupWithForm>
      <PopupWithForm name={"delete"} title={"Вы уверены?"} buttonText={"Да"} />
      <PopupWithForm name={"avatar"} title={"Обновить аватар"} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input type="url" className="form__item form__item_el_url" id="avatar" name="link" placeholder="Ссылка на аватар" required="" />
        <span className="form__item-error avatar-error" />
      </PopupWithForm>
      <ImagePopup onClose={closeAllPopups} selectedCard={selectedCard} isOpen={isOpenImagePopup} />
    </div>
  );
}

export default App;
