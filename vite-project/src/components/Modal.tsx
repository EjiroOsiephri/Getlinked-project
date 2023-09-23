import React from "react";
import ReactDOM from "react-dom";
import Styled from "../sass/Modal.module.scss";

const BackDrop = () => {
  return <div className={Styled.backdrop}></div>;
};
const Modal: React.FC<{
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setShowModal }) => {
  function setModal() {
    setShowModal(false);
  }
  return (
    <div className={Styled.modal}>
      <div className={Styled.content}>
        <h1>Congratulations you have successfully Registered!</h1>
        <p>
          Yes, it was easy and you did it! check your mail box for next step😉
        </p>
      </div>
      <div className={Styled.button}>
        <button onClick={setModal}>Back</button>
      </div>
    </div>
  );
};
const Module: React.FC<{
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setShowModal }) => {
  const backdropRoot = document.getElementById("backdrop-root");
  const modalRoot = document.getElementById("modal-root");

  if (!backdropRoot || !modalRoot) {
    return null;
  }

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<BackDrop />, backdropRoot)}
      {ReactDOM.createPortal(<Modal setShowModal={setShowModal} />, modalRoot)}
    </React.Fragment>
  );
};

export default Module;
