import React, { useEffect, useState } from "react";
import Card from "./Card.jsx";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/api.js";

const Main = ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) => {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([cards, user]) => {
        cards.forEach((card) => {
          card.myProfileId = user._id;
        });
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(cards);
      })
      .catch(console.error);
  }, []);

  return (
    <main className="main content__main">
      <section className="profile main__profile">
        <div className="profile__wrap">
          <button type="button" className="profile__avatar" onClick={onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }} />
          <div className="profile__info">
            <h1 className="profile__full-name">{userName}</h1>
            <p className="profile__profession">{userDescription}</p>
            <button type="button" className="profile__edit-button" onClick={onEditProfile} />
          </div>
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlace} />
      </section>
      <section className="photos main__photos" aria-label="Карточки мест">
        <div className="photos__wrap">
          {cards.map((card) => (
            <Card propsCard={card} key={card._id} onCardClick={onCardClick} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
