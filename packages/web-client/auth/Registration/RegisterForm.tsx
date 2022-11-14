import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ErrorRes } from "./ErrorRes.interface";
import { validationSchema } from "./ValidationSchema";
import { PropsForm } from "./PropsForm.interface";

const RegisterForm = () => {
    const navigate = useNavigate();
    const [status, setStatus] = useState<number>()
    const [error, setError] = useState<ErrorRes>();


    const initialValues: PropsForm['values'] = { full_name: '', email: '', password: '' }

    const handleSubmit = async (values: PropsForm['values']) => {
        const data = values
        try {
            const res = await axios.post('http://localhost:3001/auth/register', data);
            setStatus(res.status)
        } catch (error) {
            if (error instanceof Error) {
                setError(error)
            }
        }

    }
    useEffect(() => {
        if (status === 201) {
            navigate('/login')
        }
    }, [navigate, status])


    return (
        <div>
            {error ? <><h1>Message: {error.message}</h1>
                <h3>Code: {error.code}</h3>
                <h4>Status: {error.response?.status}</h4>
            </> :
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <label htmlFor="full_name">Full Name</label>
                        <Field name="full_name" type='text' />
                        <ErrorMessage name="full_name" />

                        <label htmlFor="email">Email</label>
                        <Field name="email" type='text' />
                        <ErrorMessage name="email" />

                        <label htmlFor="password">Password</label>
                        <Field name="password" type='password' />
                        <ErrorMessage name="password" />

                        <button type="submit">Register</button>
                    </Form>
                </Formik>
            }
        </div>
    )
}

export default RegisterForm;