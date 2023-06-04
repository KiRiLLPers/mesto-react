import React from "react";

const Card = ({ propsCard, onCardClick }) => {
  function handleClick() {
    onCardClick(propsCard);
  }
  return (
    <>
      <article className="card">
        <img src={propsCard.link} alt={propsCard.name} className="card__image" onClick={handleClick} />
        <div className="card__wrap">
          <h2 className="card__title">{propsCard.name}</h2>
          <div className="card__like-container">
            <button type="button" className="card__like-image" />
            <h2 className="card__like-current" />
          </div>
        </div>
        <button type="button" className="card__trash-btn" />
      </article>
    </>
  );
};
export default Card;
