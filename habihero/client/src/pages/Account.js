import React, { useState } from 'react';
import '../styles/Account.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Account() {
    return (
        <div className='account-view'>
            <div className='account-header'> 
                <h2>My Account</h2>
            </div>
            <div className='account-container'>
                <div className='account-1'>
                    <h3>Account Information</h3>
                    <Form>
                        <Form.Group size="sm" className="input-username mb-3" controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    placeholder=""
                                    aria-label="Change username"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text id="basic-addon2"><i class="fas fa-pencil-alt"></i></InputGroup.Text>
                                </InputGroup.Append>
                                <Form.Control.Feedback type="invalid">
                                    Please enter a new username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group size="sm" className="input-email mb-3" controlId="formUsername">
                        <Form.Label>Email</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    placeholder=""
                                    aria-label="Change email"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text id="basic-addon2"><i class="fas fa-pencil-alt"></i></InputGroup.Text>
                                </InputGroup.Append>
                                <Form.Control.Feedback type="invalid">
                                    Please enter a new email.
                            </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form>
                    <h3>Notifications</h3>
                </div>
                <div className='account-2'>
                    
                </div>
            </div>
        </div>
    );
}

export default Account;