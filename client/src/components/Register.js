import React from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      department: "",
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleRegister = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/register/", {
        username: `${this.state.username}`,
        password: `${this.state.password}`,
        department: `${this.state.department}`,
      })
      .then(() => {
        this.props.toggleRegister();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h2>Register User</h2>
        <form onSubmit={this.handleRegister}>
          <input
            name="username"
            placeholder="username"
            onChange={this.handleChanges}
          />
          <input
            name="password"
            placeholder="password"
            onChange={this.handleChanges}
          />
          <input
            name="department"
            placeholder="department"
            onChange={this.handleChanges}
          />
          <button type="submit">Register User</button>
        </form>
        <button type="submit" onClick={this.props.toggleRegister}>
          {" "}
          Back to Login{" "}
        </button>
      </div>
    );
  }
}

export default Register;
