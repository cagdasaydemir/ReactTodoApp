import React, { useEffect, useState } from "react";
import Header from "./Header";
import TodoList from "./TodoList";

const UserInterface = ({ setShow }) => {

  const [todoList, setTodoList] = useState([
    {id: 72641, title: "asdf", desc: "asdf", isComplete: false},
    {id: 72642, title: "a432f", desc: "asfdsf", isComplete: false}
  ]);
  
  useEffect(()=> {}, [todoList]);

  return (
    <section className="user-interface">
      <Header setShow={setShow} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </section>
  );
};

export default UserInterface;
