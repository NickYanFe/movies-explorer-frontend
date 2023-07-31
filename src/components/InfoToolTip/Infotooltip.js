import React from "react";

function InfoToolTip(props) {
  return (
    <div
      className={`infotooltip ${props.isOpen && "infotooltip_opened"}`}
      onClick={props.onOverlayClose}
    >
      <div className="infotooltip__container">
        <button
          type="button"
          className="infotooltip__close-button"
          aria-label="закрыть"
          onClick={props.onClose}
        ></button>
        <img
          className="infotooltip__logo"
          alt={props.title}
          src={`${props.logo}`}
        ></img>

        <p className="infotooltip__header">{`${props.title}`}</p>
      </div>
    </div>
  );
}

export default InfoToolTip;
