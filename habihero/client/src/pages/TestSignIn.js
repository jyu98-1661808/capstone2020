import React, { Component } from "react";
// import style

class TestSignIn extends Component {
    state = { 
        email: "",
        password: "",
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
        };

        fetch('https://api.habihero.com:443/signin', {
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

          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}

export default TestSignIn;