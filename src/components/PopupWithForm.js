import closeButton from '../images/white-cross-close-button.png';

function PopupWithForm(props) {
  const popupClassName = `popup popup_type_${props.name} ${
    props.isOpen ? 'popup_opened' : ''
  }`;

  const handleClose = () => {
    props.onClose();
  };

  return (
    <div className={popupClassName}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form
          className={`form form-${props.name}`}
          name={props.name}
          noValidate
        >
          {props.children}
        </form>
        <button
          type="button"
          className="popup__close-button popup__button-close"
          onClick={handleClose}
        >
          <img
            src={closeButton}
            className="popup__close-button-img"
            alt="Иконка белого креста"
          />
        </button>
      </div>
    </div>
  );
}

export default PopupWithForm;
