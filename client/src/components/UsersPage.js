import React, { Component } from "react";
import axios from "axios";
import Users from "./Users";
axios.defaults.withCredentials = true;

class UsersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    let userdata = JSON.parse(localStorage.getItem("jwt"))
    console.log(userdata)
    axios
      .get("http://localhost:5000/api/users/", {
        headers: {
          authorization: userdata.token,
          department: userdata.department
        }
      })
      .then(res => {
        this.setState({ users: res.data["users"] });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Users usersarray={this.state.users} />
         <button style={buttonstyles} onClick={this.props.handleLogout}>Log Out</button>
      </div>
    );
  }
}

const buttonstyles = {
  width: '30%',
  backgroundColor: "orange",
  color: "black",
  textAlign: "center"
}

export default UsersPage;
