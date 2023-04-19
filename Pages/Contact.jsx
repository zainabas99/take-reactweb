
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    
  });


  const handleFormSubmit = (values, { resetForm }) => {
    console.log(values);
    // add your logic to submit the form data
    resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Page</h1>
      <Formik
        initialValues={formData}
        onSubmit={handleFormSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name:
              </label>
              <Field
                type="text"
                name="name"
                className={
                  errors.name && touched.name
                    ? "border-red-500 border-2 p-2 w-full"
                    : "border-gray-300 border-2 p-2 w-full"
                }
              />
              <ErrorMessage name="name" className="text-red-500" />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email:
              </label>
              <Field
                type="email"
                name="email"
                className={
                  errors.email && touched.email
                    ? "border-red-500 border-2 p-2 w-full"
                    : "border-gray-300 border-2 p-2 w-full"
                }
              />
              <ErrorMessage name="email" className="text-red-500" />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Message:
              </label>
              <Field
                as="textarea"
                name="message"
                className={
                  errors.message && touched.message
                    ? "border-red-500 border-2 p-2 w-full"
                    : "border-gray-300 border-2 p-2 w-full"
                }
              />
              <ErrorMessage name="message" className="text-red-500" />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;

