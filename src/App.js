import "./App.scss";
import React from "react";
import UserInterface from "./components/UserInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImgContainer from "./components/ImgContainer";
import TodoModal from "./components/TodoModal";

function App() {
  return (
    <section className="main-container">
      <section className="container">
        <ImgContainer />
        <UserInterface />
        <TodoModal />
      </section>
    </section>
  );
}

export default App;
