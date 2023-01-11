import React from "react";
import Modal from "./Modal";

const ViewModal = ({ setViewModal }) => {
  return (
    <Modal>
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="staticBackdropLabel">
            Modal title
          </h1>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setViewModal(-1)}
          ></button>
        </div>
        <div className="modal-body">This is fantastic</div>
      </div>
    </Modal>
  );
};

export default ViewModal;
