import React from "react";
import axios from "axios";

class SignIn extends React.Component {
    
  state = {
      username: "",
      password: ""
  }

  componentDidMount() {
    this.axiosWithAuth();
    console.log(localStorage)
  }

axiosWithAuth = () => {
    const token = localStorage.getItem("token");
  
    return axios.create({
      baseURL: "http://localhost:5000/api",
      headers: {
        Authorization: token
      }
    });
};

  handleChange = e => {
    this.setState({
        ...this.state,
        [e.target.name]: e.target.value
    });
  };

  login = e => {
    e.preventDefault();
    axios
      .post("https://celeb-death-game.herokuapp.com/api/auth/login", this.state)
      .then(res => {
        console.log("Login ", res.data.token);
        console.log("Login 2 ", res.data);
        localStorage.setItem("count", 0);
        localStorage.setItem("score", 0);
        localStorage.setItem("token", res.data.token);
        this.setState({ username: "", password: ""});
        this.props.history.push("/scoreboard")
      })
      .catch(err =>
        console.log(
          "catch: err.message: ",
          err.message
        )
      );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
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
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
