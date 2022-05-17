import React from "react";
import Header from "./Header";
import TodoList from "./TodoList";

const UserInterface = () => {
  return (
    <section className="user-interface">
      <Header />
      <TodoList></TodoList>
    </section>
  );
};

export default UserInterface;
