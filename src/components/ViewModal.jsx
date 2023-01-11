import React from "react";
import Modal from "./Modal";

const ViewModal = ({ setViewModal, note }) => {
  return (
    <Modal>
      <div className="modal-content">
        <div className="modal-header mb-2">
          <h1 className="modal-title fs-5" id="staticBackdropLabel">
            {note.title}
          </h1>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setViewModal(false)}
          ></button>
        </div>
        <div className="modal-body mb-2">{note.description}</div>
      </div>
    </Modal>
  );
};

export default ViewModal;
