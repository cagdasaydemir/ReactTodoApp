import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

let todoFormValidationSchema = yup.object().shape({
  title: yup.string().required("Please type a title"),
  desc: yup.string(),
});

const uniqueIdGenerator = ()=> {
  return Math.floor(Math.random() * 100000 +1);
};

const TodoModal = ({ setShow, todoList, setTodoList  }) => {

const addTodoItemToList = (newItem) =>{
  setTodoList([...todoList, newItem]);
};

  useEffect(() => {
    const todoModalEl = document.querySelector("#todoModalEl");

    todoModalEl.addEventListener("click", (e) => {
      if (e.target.id == "todoModalEl") setShow(false);

      return {};
    });
  });

  return (
    <div id="todoModalEl" className="todo-modal-container">
      <Formik
        initialValues={{ title: "", desc: "" }}
        validationSchema={todoFormValidationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const newItem = { id:uniqueIdGenerator(), isComplete: false, ...values};
          addTodoItemToList(newItem);
          setShow(false);
          document.getElementById("todoForm").reset();
        }}
      >
        {({ isSubmitting, handleSubmit, errors, touched, handleChange }) => (
          <Form id="todoForm" className="todo-form">
            <div className="todo-bg-container"></div>
            <input name="title" placeholder="Title" onChange={handleChange} />
            {errors.title && touched.title ? (
              <small>{errors.title}</small>
            ) : null}

            <textarea
              name="desc"
              placeholder="Description"
              onChange={handleChange}
            ></textarea>
            {errors.desc && touched.desc ? <small>{errors.desc}</small> : null}


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
  );
};

export default TodoModal;
