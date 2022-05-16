import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <section className="todos">
      <ul id="todoItems" className='todoItems'>
        <TodoItem />
        <TodoItem />
        <TodoItem />
            
      </ul>
    </section>
  );
};

export default TodoList;
