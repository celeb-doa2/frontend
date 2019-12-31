import React from "react";
import axios from "axios";

class Register extends React.Component {
    
 state = {
      username: "",
      password: ""
  };


  handleChange = e => {
    this.setState({
        ...this.state,
        [e.target.name]: e.target.value
    });
  };


  register = e => {
    e.preventDefault();
    axios
      .post("https://celeb-death-game.herokuapp.com/api/auth/register", this.state)
      .then(res => {
        console.log("register data", res);
        console.log("register data 2", res.data.newU);
        localStorage.setItem("token", res.data.payload);
        this.setState({ username: "", password: ""});
        this.props.history.push('/scoreboard')
      })
      .catch(err =>
        console.log(
          " err.message",
          err.message
        )
      );
  };

  render() {
    return (
      <div>
      <h1>Register</h1>
        <form onSubmit={this.register}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
