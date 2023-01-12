import React from "react";
import { useState } from "react";
import ViewModal from "./ViewModal";
import EditModal from "./EditModal";
import { BsPinAngle } from "react-icons/bs";
import { BsPinAngleFill } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import axios from "axios";

const NoteCard = ({ note }) => {
  const [viewModal, setViewModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [isPInned, setIsPinned] = useState(note.isPin);

  const updatePin = async (pinned) => {
    try {
      await axios.patch(`http://localhost:8000/notes/${note.id}`, {
        isPin: pinned,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const HandlePin = () => {
    if (isPInned) {
      updatePin(false);
      setIsPinned(false);
    } else {
      updatePin(true);
      setIsPinned(true);
    }
  };

  const deleteNote = async () => {
    try {
      await axios.delete(`http://localhost:8000/notes/${note.id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="card">
        <div className="btns">
          <div className="pin" onClick={HandlePin}>
            {isPInned ? <BsPinAngleFill /> : <BsPinAngle />}
          </div>
          <div className="delete" onClick={deleteNote}>
            <AiOutlineDelete />
          </div>
          <div className="edit" onClick={() => setEditModal(true)}>
            <AiOutlineEdit />
          </div>
        </div>
        <div onClick={() => setViewModal(true)}>
          <div className="card-title">{note.title}</div>
          <div className="card-body">{note.text}</div>
        </div>
        <div className="time">{note.updated_at}</div>
      </div>

      {viewModal && <ViewModal setViewModal={setViewModal} note={note} />}
      {editModal && <EditModal setEditModal={setEditModal} note={note} />}
    </>
  );
};

export default NoteCard;
