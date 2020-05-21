import React, { Component } from "react";
// import axios from "axios";
// style (?)

class TestRegistration extends Component {
    state = { 
        email: "",
        password: "",
        passwordConf: "",
        userName: "",
        firstName: "",
        lastName: "",
        registrationErrors: ""
    };

    handleChange = (event) => {
        this.setState({
        [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        // const { 
        //     email, 
        //     password, 
        //     passwordConf,
        //     userName,
        //     firstName,
        //     lastName
        // } = this.state;

        const data = {
            "email": this.state.email,
            "password": this.state.password,
            "passwordConf": this.state.passwordConf,
            "userName": this.state.userName,
            "firstName": this.state.firstName,
            "lastName": this.state.lastName
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
        
        // let config = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         withCredentials: true,
        //     }
        // }

        // axios
        // .post(
        //     "https://api.habihero.com:443/signup",
        //     {
        //     // body: {
        //         email: email,
        //         password: password,
        //         passwordConf: passwordConf,
        //         userName: userName,
        //         firstName: firstName,
        //         lastName: lastName
        //     // }
        //     },
        //     config
        //     // { withCredentials: true }
        // )
        // .then(response => {
        //     // if (response.data.status === "created") {
        //     // this.props.handleSuccessfulAuth(response.data);
        //     // }
        //     console.log(response);
        // })
        // .catch(error => {
        //     console.log("registration error", error);
        // });
        // axios.post('/user', {
        //     firstName: 'Fred',
        //     lastName: 'Flintstone'
        // })
        // .then(function (response) {
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
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
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
            required
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
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