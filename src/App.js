import "./App.scss";
import React, { useEffect, useState } from "react";
import UserInterface from "./components/UserInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImgContainer from "./components/ImgContainer";
import TodoModal from "./components/TodoModal";

function App() {
  const [isShow, setShow] = useState(false);
  

  return (
    <section className="main-container">
      <section className="container">
        <ImgContainer />
        <UserInterface setShow={setShow} />
        {isShow ? <TodoModal setShow={setShow} /> : null}
      </section>
    </section>
  );
}

export default App;
