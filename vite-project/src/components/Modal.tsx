import React from "react";
import img from "../assets/successful-man-3025713-2526911 1.png";
import img2 from "../assets/successfully-done-5108472-4288033 1.png";
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
      <div className={Styled["flexImage"]}>
        <img src={img2} alt="img2" />
        <img src={img} alt="img" />
      </div>
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
