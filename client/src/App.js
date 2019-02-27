import React, { Component } from "react";
import UsersPage from "./components/UsersPage.js";
import Authentication from "./Authentication.js";
import "./App.css";
import Login from "./components/Login.js";
import Register from "./components/Register.js"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ConditionalView
          usernamevalue={this.props.usernamevalue}
          handleLogOut={this.props.handleLogOut}
        />
      </div>
    );
  }
}

const ConditionalView = Authentication(UsersPage)(Login)(Register);

export default App;