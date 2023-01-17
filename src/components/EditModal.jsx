import axios from "axios";
import React, { useState } from "react";
import Modal from "./Modal";

const EditModal = ({ setEditModal, note, updateNote }) => {
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.text);
  const EditNote = async () => {
    try {
      const res = await axios.patch(`http://localhost:8000/notes/${note.id}`, {
        title: title,
        text: description,
      });

      const data = res.data;
      const newNote = {
        title: data.title,
        text: data.text,
        updated_at: data.updated_at,
        isPin: data.isPin,
        id: data.id,
      };
      updateNote(note.id, newNote);
      alert("Updated Successfully");
      setEditModal(false);
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
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
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
            className="form-control"
            placeholder="Description"
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" onClick={EditNote}>
            Update
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
