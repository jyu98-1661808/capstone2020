import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/TeacherValidation.css';

function TeacherSignUp() {
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
        <div className='teacher-sign-up'>
            <img className='logo' src='../img/white-logo.png' alt='habi hero logo' />
            <img className='background' src='../img/banner.png' alt='habi hero background' />
            <div className='sign-up-view'>
                <ScrollAnimation delay={800} animateIn="slideInUp">
                    <div className='sign-up-container'>
                        <h1>Create Teacher Account</h1>
                        <Form className='sign-up-form' noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group controlId="validationUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control required type="text" placeholder="Enter your username" />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </Form.Group>
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
                            <Form.Group controlId="validationClassname">
                                <Form.Label>Class Name</Form.Label>
                                <Form.Control required type="text" placeholder="Enter your classroom name" />
                                <Form.Control.Feedback type="invalid">
                                    Please chooose a class name.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <div className='button-container'>
                                <NavLink className='student-sign-up btn btn-primary' to="/student-main">I'm a student!</NavLink>
                                <div className='teacher-buttons'>
                                    <Button variant="success" type="submit">
                                        Sign Up
                                    </Button>
                                    <NavLink className='sign-in-link' to="/teacher-signin">or Sign In</NavLink>
                                </div>
                            </div>
                        </Form>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
}

export default TeacherSignUp;
