import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/TeacherValidation.css';

function TeacherSignIn() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } 
        setValidated(true);

        if (validated) {

        }
    };

    return (
        <div className='teacher-sign-in'>
            <img className='logo' src='../img/white-logo.png' alt='habi hero logo' />
            <img className='background' src='../img/banner.png' alt='habi hero background' />
            <div className='sign-in-view'>
                <ScrollAnimation delay={800} animateIn="slideInUp">
                    <div className='sign-in-container'>
                        <h1>Sign into your Teacher Account</h1>
                        <Form className='sign-in-form' noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group controlId="validationEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control required type="email" placeholder="Enter your email" />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid email.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="validationPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required type="password" placeholder="Enter your password" />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid password.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <div className='button-container'>
                                <NavLink className='student-sign-in btn btn-primary' to="/student-main">I'm a student!</NavLink>
                                <div className='teacher-buttons'>
                                    <Button variant="success" type="submit">
                                        Sign In
                                    </Button>
                                    <NavLink className='sign-up-link' to="/teacher-signup">or Sign Up</NavLink>
                                </div>
                            </div>
                        </Form>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
}

export default TeacherSignIn;