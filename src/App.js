import "./App.scss";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImgContainer from "./components/ImgContainer";
import TodoModal from "./components/TodoModal";
import EmptyTodoList from "./components/EmptyTodoList";

function App() {
  const [isShow, setShow] = useState(false);
  const [todoList, setTodoList] = useState([]);
  
  useEffect(()=> {}, [todoList]);

return (
    
<section className="main-container">
      <section className="container">
        <ImgContainer />
      <section className="user-interface">
      <Header setShow={setShow} />
      {todoList.length>0 ? <TodoList todoList={todoList} setTodoList={setTodoList} /> : <EmptyTodoList/>}
      </section>
        {isShow ? <TodoModal setShow={setShow} todoList={todoList} setTodoList={setTodoList} /> : null}
      </section>
    </section>
  );
  


}

export default App;
