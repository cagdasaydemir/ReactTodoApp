import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";
import axios from "axios";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";



let todoFormValidationSchema = yup.object().shape({
  title: yup.string().required("Please type a title"),
  desc: yup.string(),
});

const TodoModal = ({ setShow, getTodos}) => {

const addTodoItemToList = (newItem) =>{
  // setTodoList([...todoList, newTodoItem]);
  axios.post("Todo", newItem).then((res)=> console.log(res)).finally(()=> {getTodos()});
}

  useEffect(() => {
    const todoModalEl = document.querySelector("#todoModalEl");

    todoModalEl.addEventListener("click", (e) => {
     if (e.target.id == "todoModalEl") setShow(false);
  });
});
  return (
    <div id="todoModalEl" className="todo-modal-container">
      <Formik
        initialValues={{ title: "", description: "" }}
        validationSchema={todoFormValidationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const newItem = {...values , isComplete: false };
          
          addTodoItemToList(newItem);
          setShow(false);
          document.getElementById("todoForm").reset();
        }}
      >
        {({ isSubmitting, handleSubmit, errors, touched, handleChange }) => (
          <Form id="todoForm" className="todo-form">
            <div className="todo-bg-container"></div>
            <input id="task-title" name="title" placeholder="Title" onChange={handleChange} />


            <textarea
              id="task-description"
              name="description"
              placeholder="Description"
              onChange={handleChange}
            ></textarea>

            <button
              type="submit"
              className="create-btn"
              disabled={isSubmitting}
            >
              <FontAwesomeIcon
                className=""
                icon={faCirclePlus}
              ></FontAwesomeIcon>
              <span>CREATE</span>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default TodoModal;
