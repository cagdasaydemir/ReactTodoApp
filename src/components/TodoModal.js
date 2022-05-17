import React from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const TodoModal = () => {
  let todoFormValidationSchema = yup.object().shape({
    title: yup.string().required("Please fill all the spaces"),
    desc: yup.string(),
  });
  return (
    <div className="todo-modal-container">
      <Formik
        initialValues={{ title: "", desc: "" }}
        validationSchema={todoFormValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
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
              type="button"
              className="create-btn"
              disabled={isSubmitting}
              onClick={() => {
                handleSubmit();
              }}
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
