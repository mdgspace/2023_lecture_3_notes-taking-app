import React from "react";
import { useState } from "react";
import { BsPinAngle } from "react-icons/bs";
import { BsPinAngleFill } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";

const NoteCard = ({ openModal }) => {
  const [isPInned, setIsPinned] = useState(false);
  const HandlePin = () => {
    if (isPInned) {
      setIsPinned(false);
    } else {
      setIsPinned(true);
    }
  };
  return (
    <div className="card">
      <div className="btns">
        <div className="pin" onClick={HandlePin}>
          {isPInned ? <BsPinAngleFill /> : <BsPinAngle />}
        </div>
        <div className="delete">
          <AiOutlineDelete />
        </div>
        <div className="edit" onClick={() => openModal(2, true)}>
          <AiOutlineEdit />
        </div>
      </div>
      <div onClick={() => openModal(3, false)}>
        <div className="card-title">Birthday</div>
        <div className="card-body">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
          necessitatibus tenetur accusamus magnam vero labore odit assumenda
          eligendi sint corporis.
        </div>
      </div>
      <div className="time">10 Jan 2021</div>
    </div>
  );
};

export default NoteCard;
