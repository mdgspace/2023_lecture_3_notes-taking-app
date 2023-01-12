import axios from "axios";
import React, { useRef } from "react";
import Modal from "./Modal";

const EditModal = ({ setEditModal, note }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const updateNote = async () => {
    try {
      axios.patch(`http://localhost:8000/notes/${note.id}`, {
        title: titleRef.current.value,
        text: descriptionRef.current.value,
      });
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
              className="form-control"
              ref={titleRef}
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
            ref={descriptionRef}
            className="form-control"
            placeholder="Description"
            rows="5"
            defaultValue={note.text}
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
