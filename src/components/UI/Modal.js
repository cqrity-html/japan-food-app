import React, { useContext } from 'react';
import ReactDOM from "react-dom";
import "./Modal.css";
import CartContext from "../../store/CartContext";

const Backdrop = (props) => {
  return <div className="backdrop" style={{ display: props.isModalShown }} onClick={props.onClick}></div>;
};

const ModalWindow = (props) => {
  return (
    <div className="modal" style={{ display: props.isModalShown }}>
      <div className="content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  const ctx = useContext(CartContext);
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop isModalShown={ctx.isModalShown} onClick={ctx.onModalClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalWindow isModalShown={ctx.isModalShown}>{props.children}</ModalWindow>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
