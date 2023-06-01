import React, { useState, useEffect } from 'react';
import editButton from '../images/white-pen-edit-button.svg';
import addButton from '../images/white-pluse-add-button.svg';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {
  const { onEditProfile, onAddPlace, onEditAvatar, onCardClick } = props;

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('#');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userInfo, initialCards] = await Promise.all([
          api.getUserInfo(),
          api.getInitialCards(),
        ]);
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setCards(initialCards);
      } catch (error) {
        console.log('Ошибка при получении данных:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__block">
          <div
            className="profile__overlay"
            onClick={onEditAvatar}
            style={{ backgroundImage: `url(${userAvatar})` }}
          >
            <img
              src={userAvatar}
              className="profile__image"
              alt="Круглое фото профиля"
            />
          </div>
          <div className="profile__block-info">
            <div className="profile__block-info-name">
              <h1 className="profile__name">{userName}</h1>
              <button
                type="button"
                className="profile__edit-button"
                onClick={onEditProfile}
              >
                <img src={editButton} alt="Иконка белой ручки" />
              </button>
            </div>
            <p className="profile__about-yourself">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        >
          <img
            src={addButton}
            className="profile__add-button-plus"
            alt="Иконка белого плюса"
          />
        </button>
      </section>
      <section className="places">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
