import React from "react";
import { useState } from "react";
import ViewModal from "./ViewModal";
import EditModal from "./EditModal";
import { BsPinAngle } from "react-icons/bs";
import { BsPinAngleFill } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import axios from "axios";
import dateformatter from "../utils/dateFormater";

const NoteCard = ({ note, deleteNote, updateNote }) => {
  const [viewModal, setViewModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [isPInned, setIsPinned] = useState(note.isPin);

  const HandlePin = async () => {
    const togglePin = !isPInned;
    try {
      const res = await axios.patch(
        `https://nanonish.pythonanywhere.com/notes/${note.id}`,
        {
          isPin: togglePin,
        }
      );
      const data = res.data;
      const updatedNote = {
        title: data.title,
        text: data.text,
        updated_at: data.updated_at,
        isPin: data.isPin,
        id: data.id,
      };
      updateNote(note.id, updatedNote);
      setIsPinned(togglePin);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://nanonish.pythonanywhere.com/notes/${note.id}`
      );
      deleteNote(note.id);
      alert("Deleted");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="c-card">
        <div className="btns">
          <div className="pin" onClick={HandlePin}>
            {isPInned ? <BsPinAngleFill /> : <BsPinAngle />}
          </div>
          <div className="delete" onClick={handleDelete}>
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
        <div className="time">{dateformatter(note.updated_at)}</div>
      </div>

      {viewModal && <ViewModal setViewModal={setViewModal} note={note} />}
      {editModal && (
        <EditModal
          setEditModal={setEditModal}
          note={note}
          updateNote={updateNote}
        />
      )}
    </>
  );
};

export default NoteCard;
