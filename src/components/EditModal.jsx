import axios from "axios";
import React from "react";
import Modal from "./Modal";

const EditModal = ({ setEditModal, note }) => {
  const updateNote = async () => {
    try {
      axios.post("/", {});
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal>
      <div className="modal-content">
        <div className="modal-header mb-2">
          <h1 className="modal-title fs-5" id="staticBackdropLabel">
            <input
              class="form-control"
              type="text"
              placeholder="Title"
              defaultValue={note.title}
            />
          </h1>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setEditModal(false)}
          ></button>
        </div>
        <div className="modal-body mb-2">
          <textarea
            class="form-control"
            placeholder="Description"
            rows="5"
            defaultValue={note.description}
          ></textarea>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-primary"
            onClick={updateNote}
          >
            Update
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
