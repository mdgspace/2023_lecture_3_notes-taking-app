import React, { useEffect, useState } from "react";
import EditModal from "./EditModal";
import NoteCard from "./NoteCard";
import ViewModal from "./ViewModal";
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const NotesCont = () => {
  const [viewModal, setViewModal] = useState(-1);
  const [editModal, setEditModal] = useState(-1);

  const openModal = (index, edit) => {
    if (edit) setEditModal(index);
    else setViewModal(index);
  };

  // useEffect(() => {}, []);
  return (
    <>
      <div className="notes-cont">
        {arr.map((note) => {
          return <NoteCard openModal={openModal} />;
        })}
      </div>
      {viewModal !== -1 && <ViewModal setViewModal={setViewModal} />}

      {editModal !== -1 && <EditModal setEditModal={setEditModal} />}
    </>
  );
};

export default NotesCont;
