import React from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

const Authentication = UsersPage => Login => Register =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
        registering: false,
        usernamevalue: "",
        passwordvalue: ""
      };
    }

    componentDidMount() {
      axios
      .get("http://localhost:5000/api/checkauth")
      .then(res => {
        console.log(res)
        if (res.data) {
          this.setState({ loggedIn: true })
        }
      })
    }

    handleChanges = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

    submitLogin = e => {
      e.preventDefault();
      axios
        .post("http://localhost:5000/api/login", {
          username: `${this.state.usernamevalue}`,
          password: `${this.state.passwordvalue}`
        })
        .then(res => {
          this.setState({ loggedIn: true });
        })
        .catch(err => alert(err));
    };

    toggleRegister = () => {
      this.setState(currentState => ({
        registering: !currentState.registering
      }));
    };

    handleLogout = () => {
      axios.get("http://localhost:5000/api/logout")
      .then(() => {
        this.setState({ loggedIn: false })
      })
      .catch(err => alert(err))
    };

    conditionalRender = () => {
      if (this.state.loggedIn) {
        return (
          <UsersPage
            usernamevalue={this.state.usernamevalue}
            handleLogout={this.handleLogout}
          />
        );
      } else {
        if (this.state.registering) {
          return <Register toggleRegister={this.toggleRegister} />;
        } else {
          return (
            <Login
              passwordvalue={this.state.passwordvalue}
              usernamevalue={this.state.usernamevalue}
              handleChanges={this.handleChanges}
              submitLogin={this.submitLogin}
              toggleRegister={this.toggleRegister}
            />
          );
        }
      }
    };

    render() {
      return this.conditionalRender();
    }
  };

export default Authentication;
