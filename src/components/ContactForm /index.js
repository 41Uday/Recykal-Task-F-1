import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";

import "./index.css";

const initialValues = {
  fullName: "",
  companyName: "",
  email: "",
  mobileNumber: "",
  clientType: "",
  serviceRequired: "",
  queries: "",
};

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Name is required"),
  companyName: Yup.string().required("Company name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  mobileNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid mobile number")
    .required("Mobile number required"),
  clientType: Yup.string().required("Please select an option"),
  serviceRequired: Yup.string().required("Please select an option"),
  queries: Yup.string().required("Message is required"),
});

const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  // console.log(values);

  return (
    <div className="cf-container">
      <h1 className="cf-head-1">Contact Us</h1>
      <p className="cf-para-1">
        If you wish to reach out to us, please fill in your details. <br />
        Our team will get back to you soon{" "}
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form-container">
          <div className="input-container">
            <Field
              type="text"
              className="input-1"
              placeholder="Full Name"
              name="fullName"
            />
            <div className="error">
              <ErrorMessage name="fullName" />
            </div>
          </div>
          <div className="input-container">
            <Field
              type="text"
              className="input-1"
              placeholder="Company Name"
              name="companyName"
            />

            <div className="error">
              <ErrorMessage name="companyName" />
            </div>
          </div>
          <div className="input-container">
            <Field
              type="email"
              className="input-1"
              placeholder="Email Id"
              name="email"
            />
            <div className="error">
              <ErrorMessage name="email" />
            </div>
          </div>
          <div className="input-container">
            <Field
              type="tel"
              className="input-1"
              placeholder="Mobile Number"
              name="mobileNumber"
            />
            <div className="error">
              <ErrorMessage name="mobileNumber" />
            </div>
          </div>
          <div className="input-container input-container-dropdown">
            <Field
              as="select"
              className="cf-select-container-2"
              name="clientType"
            >
              <option>I am...</option>
              <option>Seller</option>
              <option>Buyer</option>
              <option>Producers, Importers, and Brand Owners</option>
              <option>ULB</option>
              <option>PCB/PCC</option>
              <option>Others</option>
            </Field>
            <div className="error">
              <ErrorMessage name="clientType" />
            </div>
          </div>

          {/* This is a Second DropDown} */}
          <div className="input-container">
            <Field
              as="select"
              className="cf-select-container-2"
              name="serviceRequired"
            >
              <option>I need help with?</option>
              <option>EPR</option>
              <option>Buy/Sell Recyclables</option>
              <option>Digitising Waste Center</option>
              <option>Careers</option>
              <option>Others</option>
            </Field>
            <div className="error">
              <ErrorMessage name="serviceRequired" />
            </div>
          </div>
          <div className="cf-ta-container">
            <Field
              as="textarea"
              className="textarea-container"
              placeholder="Message / Questions"
              name="queries"
            />
            <div className="error">
              <ErrorMessage name="queries" />
            </div>
          </div>
          <button className="cf-button" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
