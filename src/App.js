
import './App.scss';
import BgImage from './components/BgImage';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Modal from './components/Modal';
import React from 'react';

function App() {
  return (
    <section className="container">
      <BgImage/>
      <Header/>
      <TodoList/>
        <Modal />
    </section>
  );
}

export default App;
