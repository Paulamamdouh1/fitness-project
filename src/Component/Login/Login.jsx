import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {

  const navigate = useNavigate();

  async function handleRegister(values) {
    try {

      let { data } = await axios.post(
        "https://route-ecommerce.onrender.com/api/v1/auth/signup",
        values
      );

      if (data.message === "success") {
        navigate("/login");
      }

    } catch (error) {
      console.log(error);
    }
  }

  const registerSchema = Yup.object({

    name: Yup.string()
      .min(2, 'Name is too short')
      .required('Name is required'),

    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),

    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),

    rePassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm password is required'),

    phone: Yup.string()
      .required('Phone is required')

  });

  return (

    <div className="container mt-5 d-flex justify-content-center">

      <div className="card p-4 w-50">

        <h4 className="mb-4 text-center">Register Now</h4>

        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            rePassword: '',
            phone: ''
          }}

          validationSchema={registerSchema}

          onSubmit={handleRegister}
        >

          <Form>

            <div className="mb-3">
              <label>Name</label>
              <Field
                type="text"
                name="name"
                className="form-control"
              />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>


            <div className="mb-3">
              <label>Email</label>
              <Field
                type="email"
                name="email"
                className="form-control"
              />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>


            <div className="mb-3">
              <label>Password</label>
              <Field
                type="password"
                name="password"
                className="form-control"
              />
              <ErrorMessage name="password" component="div" className="text-danger" />
            </div>


            <div className="mb-3">
              <label>Confirm Password</label>
              <Field
                type="password"
                name="rePassword"
                className="form-control"
              />
              <ErrorMessage name="rePassword" component="div" className="text-danger" />
            </div>


            <div className="mb-3">
              <label>Phone</label>
              <Field
                type="text"
                name="phone"
                className="form-control"
              />
              <ErrorMessage name="phone" component="div" className="text-danger" />
            </div>


            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Register
            </button>

          </Form>

        </Formik>

      </div>

    </div>

  );
}