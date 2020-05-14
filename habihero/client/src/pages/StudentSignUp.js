import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
// import ScrollAnimation from 'react-animate-on-scroll';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/StudentValidation.css';

function StudentSignUp() {
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
        <div className='student-sign-up'>
            <div className='student-header'>
                <NavLink className='student-back-btn' to='/student-main'>
                    <i className="fas fa-arrow-left"/> Go Back
                </NavLink>
                <img className='logo' src='../img/outlined-logo.png' alt='habi hero logo' />
            </div>
            <img className='create-text' src='../img/create-text.png' alt='create hero title' />
            <div className='sign-up-view'>
                <Form className='sign-up-form' noValidate validated={validated} onSubmit={handleSubmit}>
                    <div className='sign-up-hero'> 
                        <h2>Choose Your Hero</h2>
                        <div className='hero-options'>
                            <div className="custom-control custom-radio">
                                <label className="custom-control-label" htmlFor="customRadioInline1">
                                    <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" checked />
                                    <div id='male' className='hero-container'>
                                        <img src='../img/male-hero.png' alt='male hero' />
                                    </div>
                                </label>
                            </div>
                            <div className="custom-control custom-radio">
                                <label className="custom-control-label" htmlFor="customRadioInline2">
                                    <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input sr-only" />
                                    <div id='female' className='hero-container'>
                                        <img src='../img/female-hero.png' alt='female hero' />
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='sign-up-info'> 
                        <Form.Group controlId="validationClassCode">
                            <img className='class-code-text' src='../img/class-code-text.png' alt='class code title' />
                            <Form.Label className='class-code'>(optional)</Form.Label>
                            <Form.Control type="text" placeholder="Enter your classroom code, if you have one" />
                        </Form.Group>
                        <Form.Group controlId="validationUsername">
                            <Form.Label>Student's Full Name</Form.Label>
                            <Form.Control required type="text" placeholder="Enter your full name" />
                            <Form.Control.Feedback type="invalid">
                                Please enter your full name (student).
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
                        <div className='student-buttons'>
                            <Button variant="success" type="submit">
                                Finish
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default StudentSignUp;