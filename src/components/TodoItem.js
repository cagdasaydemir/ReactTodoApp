import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faSquareCheck } from "@fortawesome/free-solid-svg-icons";

const TodoItem = () => {
  return (
    <div className="todo-item">
      <div className="check-btn">
        <FontAwesomeIcon icon={faSquareCheck} />
      </div>
      <div className="todo-item-details">
        <div className="details-title">
          {" "}
          lorem lorem lorlorem lorem lorem loremlorem lorem lorem loremlorem
          lorem lorem loremem lorem{" "}
        </div>
        <div className="details-desc">
          lorem lorem lorem lorem lorem loremlorem lorem lorem loremlorem lorem
          lorem loremlorem lorem
        </div>
      </div>
      <div className="delete-btn">
        <FontAwesomeIcon icon={faTrashCan} />
      </div>
    </div>
  );
};

export default TodoItem;
