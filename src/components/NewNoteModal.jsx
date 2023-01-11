import axios from "axios";
import React from "react";
import Modal from "./Modal";

const NewNoteModal = ({ setNewNoteModal }) => {
  const saveNote = async () => {
    try {
      await axios.post("", {});
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal>
      <div className="modal-content">
        <div className="modal-header mb-2">
          <h1 className="modal-title fs-5">
            <input class="form-control" type="text" placeholder="Title" />
          </h1>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setNewNoteModal(false)}
          ></button>
        </div>
        <div className="modal-body mb-2">
          <textarea
            class="form-control"
            placeholder="Description"
            rows="5"
          ></textarea>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" onClick={saveNote}>
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default NewNoteModal;
