import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faSquareCheck } from "@fortawesome/free-solid-svg-icons";


const TodoList = ({ todoList, setTodoList }) => {
 
    const removeTask = (todoId) => {
      const filteredItems = todoList
        .filter(x => x.id != todoId);
      setTodoList(filteredItems);
    }
    const completeTask = (e) => {
      const findedTodoIndex = todoList
        .findIndex(x => x.id == e.currentTarget.dataset.id)
      if (findedTodoIndex != -1) {
        e.currentTarget.parentNode.classList.toggle("completed")
       
        todoList[findedTodoIndex].isComplete = true;
        setTodoList(todoList);
      }
    }

  return (
    <section className="todo-list-container">
      {todoList.map((todoItem, index) => {
        return <div key={index} data-id={todoItem.id} className={"todo-item " + (todoItem.isComplete ? "completed" : "")}>
      <div data-id={todoItem.id} className="check-btn" onClick={ (e) => {completeTask(e)}}>
        <FontAwesomeIcon icon={faSquareCheck} className="check-icon"/>
      </div>
      <div className="todo-item-details">
        <div className="details-title">
          {todoItem.title}
        </div>
        <div className="details-desc">
        {todoItem.desc}
        </div>
      </div>
      <div className="delete-btn" onClick={() => { removeTask(todoItem.id) }} >
        <FontAwesomeIcon icon={faTrashCan} />
      </div>
    </div>
})}
</section>);
};

export default TodoList;
