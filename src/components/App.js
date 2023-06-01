import React, { useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="App">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__fieldset">
          <input
            id="name-input"
            type="text"
            name="name"
            placeholder="Имя"
            className="popup__input popup__input_type_name"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="name-input-error popup__input-error"></span>
        </fieldset>
        <fieldset className="popup__fieldset">
          <input
            id="about-yourself-input"
            type="text"
            name="about"
            placeholder="О себе"
            className="popup__input popup__input_type_about-yourself"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="about-yourself-input-error popup__input-error"></span>
        </fieldset>
        <button type="submit" className="popup__submit popup__save-button">
          Сохранить
        </button>
      </PopupWithForm>
      <PopupWithForm
        name="add-card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__fieldset">
          <input
            id="card-title-input"
            type="text"
            name="name"
            placeholder="Название"
            className="popup__input popup__input_type_card-title"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="card-title-input-error popup__input-error"></span>
        </fieldset>
        <fieldset className="popup__fieldset">
          <input
            id="picture-link-input"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_picture-link"
            required
          />
          <span className="picture-link-input-error popup__input-error"></span>
        </fieldset>
        <button type="submit" className="popup__submit popup__card-save-button">
          Создать
        </button>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <div className="popup popup_type_card-delete">
        <div className="popup__container">
          <h2 className="popup__title-card-delete">Вы уверены?</h2>
          <form className="form">
            <button
              type="submit"
              className="popup__submit popup__save-button popup__delete-button"
            >
              Да
            </button>
          </form>
          <button
            type="button"
            className="popup__close-button popup__button-close"
          >
            <img
              src=""
              className="popup__close-button-img"
              alt="Иконка белого креста"
            />
          </button>
        </div>
      </div>
      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__fieldset">
          <input
            id="avatar-link-input"
            type="url"
            name="avatar"
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_avatar-link"
            required
          />
          <span className="avatar-link-input-error popup__input-error"></span>
        </fieldset>
        <button
          type="submit"
          className="popup__submit popup__save-button popup__avatar-save-button"
        >
          Сохранить
        </button>
      </PopupWithForm>
    </div>
  );
}

export default App;
