import React from "react";
import Header from "./Header";
import TodoList from "./TodoList";

const UserInterface = ({ setShow }) => {
  return (
    <section className="user-interface">
      <Header setShow={setShow} />
      <TodoList />
    </section>
  );
};

export default UserInterface;
