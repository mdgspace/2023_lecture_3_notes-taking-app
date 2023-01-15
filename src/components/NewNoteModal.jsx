import axios from "axios";
import React, { useState } from "react";
import Modal from "./Modal";

const NewNoteModal = ({ setNewNoteModal, notes, setNotes }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const saveNote = async () => {
    try {
      const newNote = {
        author: localStorage.getItem("username"),
        title: title,
        text: description,
      };
      const res = await axios.post("http://localhost:8000/notes/", newNote);
      const data = res.data;
      setNotes([
        ...notes,
        {
          title: data.title,
          text: data.text,
          updated_at: data.updated_at,
          isPin: data.isPin,
          id: data.id,
        },
      ]);
      alert("Saved Successfully");
      setNewNoteModal(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal>
      <div className="modal-content">
        <div className="modal-header mb-2">
          <h1 className="modal-title fs-5">
            <input
              value={title}
              className="form-control"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
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
