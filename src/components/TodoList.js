import React from "react";
import axios from "axios";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faSquareCheck,faCirclePlus } from "@fortawesome/free-solid-svg-icons";



const TodoList = ({ todoList, getTodos }) => {
 
    const removeTask = (todoId) => {
      axios.delete("Todo?id=" + todoId)
      .then(res => {
        window.alert(`Yayy"${res.data.title}" deleted !`);
      }).finally(() => {
        getTodos();
      });
    }
    const completeTask = (todoId) => {
      axios.patch("Todo?id=" + todoId)
      .then(res => {
        window.alert(`Yayy "${res.data.title}" updated !`);
      }).finally(() => {
        getTodos();
      });
      };
      // const updateTask = (todoId) => {
      //   axios.get("Todo?id=" + todoId)
      //   .then(res => getUpdatedTodo(res.data.title))
      //   .then(setShow(true))
      //   .then(setUpdate(true));
      // };
    

  return (
    <section className="todo-list-container">
      {todoList.map((todoItem, index) => {
        return <div key={index} data-id={todoItem.id} className={"todo-item " + (todoItem.isComplete ? "completed" : "")}>
      <div data-id={todoItem.id} className="check-btn" onClick={ (e) => {completeTask(todoItem.id)}}>
        <FontAwesomeIcon icon={faSquareCheck} className="check-icon"/>
      </div>
      <div className="todo-item-details">
        <div className="details-title">
          {todoItem.title}
        </div>
        <div className="details-desc">
        {todoItem.description}
        </div>
      </div>
      <div className="delete-btn" onClick={() => { removeTask(todoItem.id) }} >
        <FontAwesomeIcon icon={faTrashCan} />
      </div>
    </div>}
)}</section>);

      };

export default TodoList;
