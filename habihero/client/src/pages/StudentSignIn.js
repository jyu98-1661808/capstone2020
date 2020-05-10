import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/StudentValidation.css';

function StudentSignIn() {
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
    }

    return (
        <div className='student-sign-in'>
            <div className='student-header'>
                <NavLink className='student-back-btn' to='/student-main'>
                    <i className="fas fa-arrow-left"/> Go Back
                </NavLink>
                <img className='logo' src='../img/outlined-logo.png' alt='habi hero logo' />
            </div>
            <img className='signin-text' src='../img/signin-text.png' alt='sign in title' />
            <div className='sign-in-view'>
                <img className='character-container' src='../img/character-icons/orca.png' alt='orca' />
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
                    <div className='student-buttons'>
                        <Button variant="success" type="submit">
                            Sign In
                        </Button>
                    </div>
                </Form>
            </div>

        </div>
    );
}

export default StudentSignIn;