import React from 'react';

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className="place" key={card._id}>
      <button type="button" className="place__delete-button"></button>
      <img
        src={card.link}
        className="place__image"
        alt={card.name}
        style={{ backgroundImage: `url(${card.link})` }}
        onClick={handleClick}
      />
      <div className="place__block">
        <h2 className="place__title">{card.name}</h2>
        <div>
          <button type="button" className="place__like-button"></button>
          <div className="place__like-count"></div>
        </div>
      </div>
    </article>
  );
}

export default Card;
