import React, { Component } from "react";

class TestRegistration extends Component {
    state = { 
        email: "",
        password: "",
        passwordConf: "",
        userName: "",
        fullName: "",
        registrationErrors: ""
    };

    handleChange = (event) => {
        this.setState({
        [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        const data = {
            "email": this.state.email,
            "password": this.state.password,
            "passwordConf": this.state.passwordConf,
            "userName": this.state.userName,
            "fullName": this.state.fullName,
        };

        // console.log(data);

        fetch('https://api.habihero.com:443/signup', {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                }
                // credentials: 'include',
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        
        event.preventDefault();
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="passwordConf"
            placeholder="Password confirmation"
            value={this.state.passwordConf}
            onChange={this.handleChange}
            required
          />

          <input
            type="text"
            name="userName"
            placeholder="Username"
            value={this.state.userName}
            onChange={this.handleChange}
            required
          />

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={this.state.fullName}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default TestRegistration;