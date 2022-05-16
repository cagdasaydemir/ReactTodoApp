import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCheck } from "@fortawesome/free-solid-svg-icons";

const TodoItem = () => {
  return (
    <li className='todo-item' data-id='8334'>
    <div className='todo-item-check' data-id='8334' >
        <div className='checkBox'> <FontAwesomeIcon icon={faCheck}/> </div>
    </div>
    <div className='todo-item-details'>
        <span className='todo-item-title'>cxcfgvds</span>
        <span className='todo-item-descript'>dsfdsf</span>
    </div>
    <div className='delete-container'>
        <div className='delete-todo' data-id='8334'>
        <FontAwesomeIcon className='fa-trash-can' icon={faTrashCan}/>
        </div>
    </div>
</li>

  )
}

export default TodoItem;