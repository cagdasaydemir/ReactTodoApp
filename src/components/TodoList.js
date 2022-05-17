import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <section className="todo-list-container">
      <TodoItem />
      <TodoItem />
    </section>
  );
};

export default TodoList;
