import React from "react";
import Modal from "./Modal";

const EditModal = ({ setEditModal }) => {
  return (
    <Modal>
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="staticBackdropLabel">
            <input class="form-control" type="text" placeholder="Title" />
          </h1>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setEditModal(-1)}
          ></button>
        </div>
        <div className="modal-body">
          <textarea
            class="form-control"
            placeholder="Description"
            rows="3"
          ></textarea>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary">
            Update
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
