import axios from "axios";
import React, { useState } from "react";
import Modal from "./Modal";

const EditModal = ({ setEditModal, note, notes, setNotes }) => {
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.text);
  const updateNote = async () => {
    try {
      const newNote = {
        title: title,
        text: description,
      };
      const res = await axios.patch(
        `http://localhost:8000/notes/${note.id}`,
        newNote
      );
      const newNotes = notes.filter((oldnote) => {
        return oldnote.id !== note.id;
      });
      const data = res.data;
      setNotes([
        ...newNotes,
        {
          title: data.title,
          text: data.text,
          updated_at: data.updated_at,
          isPin: data.isPin,
          id: data.id,
        },
      ]);
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
