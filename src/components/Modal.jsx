import React from "react";

const Modal = ({ children }) => {
  return (
    <>
      <div className="c-modal-overlay" />
      <div className="c-modal">{children}</div>
    </>
  );
};

export default Modal;
