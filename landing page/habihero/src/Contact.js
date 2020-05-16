import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import './App.css'
import { Button, Form, FormGroup, Input } from 'reactstrap'

class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        subject: 'HabiHero Contact',
        message: '',
    }

    handleSubmit(e) {
        e.preventDefault()
        const { email, subject, message } = this.state
        let templateParams = {
            from_name: email,
            to_name: 'jyu98@uw.edu',
            subject: subject,
            message_html: message,
        }
        emailjs.send(
            'gmail',
            'template_xQsBvh9W',
            templateParams,
            'user_i334YTpsSvZ2RO9C0SULA'
        )
        this.resetForm()
    }

    resetForm() {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }

    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }

    render() {
        return (
        <div className="contact-container" id="contact">
            <h1>Contact Us</h1>
            <p>Email us with any questions, collaborations, or inquiries.</p>
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <div className='small-forms'>
                    <FormGroup className="name" controlId="formBasicName">
                        <Input
                            type="text"
                            name="name"
                            value={this.state.name}
                            className="text-primary"
                            onChange={this.handleChange.bind(this, 'name')}
                            placeholder="Name"
                        />
                    </FormGroup>
                    <FormGroup className="email" controlId="formBasicEmail">
                        <Input
                            type="email"
                            name="email"
                            value={this.state.email}
                            className="text-primary"
                            onChange={this.handleChange.bind(this, 'email')}
                            placeholder="Email"
                        />
                    </FormGroup>
                </div>
                <FormGroup className="message" controlId="formBasicMessage">
                    <Input
                        type="textarea"
                        name="message"
                        className="text-primary"
                        value={this.state.message}
                        onChange={this.handleChange.bind(this, 'message')}
                        placeholder="Your message"
                    />
                </FormGroup>
                <div className='submit-container'>
                    <Button className='btn btn-success' type="submit">
                        Send
                    </Button>
                </div>
            </Form>
            <img src={ require('./assets/img/branding/logo.png') }  alt='habi hero logo' />
        </div>
        )
    }
}

export default ContactForm