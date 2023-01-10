import React from 'react'
import { useState } from 'react';
import { BsPinAngle } from 'react-icons/bs'
import { BsPinAngleFill } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'
import { AiOutlineEdit } from 'react-icons/ai'
const TodoCard = () => {
    const [isPInned,setIsPinned]=useState(false)
    const HandlePin=()=>{
        if(isPInned){
            setIsPinned(false)
        }
        else{
            setIsPinned(true)
        }
    }
    return (
        <div className='card'>
            <div className="btns">
                <div className="pin" onClick={HandlePin}>{isPInned ? <BsPinAngleFill /> :<BsPinAngle />}</div>
                <div className="delete"><AiOutlineDelete/></div>
                <div className="edit"><AiOutlineEdit/></div>

            </div>
            <div className="card-title">Birthday</div>
            <div className="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus necessitatibus tenetur accusamus magnam vero labore odit assumenda eligendi sint corporis.</div>
            <div className="time">10 Jan 2021</div>
        </div>
    )
}

  
export default TodoCard
