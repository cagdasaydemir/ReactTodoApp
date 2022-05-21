import React, { useEffect, useState } from 'react'
import axios from 'axios';

import ImgContainer from './ImgContainer';
import Header from './Header';
import TodoList from './TodoList';
import EmptyTodoList from './EmptyTodoList';
import TodoModal from './TodoModal/Index';


const Home = () => {
    const [isShow, setShow] = useState(false);
    const [todoList, setTodoList] = useState([]);
    
  
    const getTodos = async () => {
      axios.get("Todo").then((res) => setTodoList(res.data));
    };
  
    useEffect(() => {
      getTodos();
    }, []);
  
    return (
      <section className="main-container">
        <section className="container">
          <ImgContainer />
          <section className="user-interface">
            <Header setShow={setShow} />
            
              <TodoList getTodos={getTodos} todoList={todoList} />
            
            
          </section>
          {isShow ? <TodoModal getTodos={getTodos} setShow={setShow} /> : null}
        </section>
      </section>
    );
  
}

export default Home