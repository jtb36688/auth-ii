import React from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
 background-color: rgb(140,140,140);
 color: white;
 min-width: 300px;
 height: 100%;
 font-size: 1.8rem;
 font-family: "Source Sans Pro", Helvetica, sans-serif;
 h1 {
   font-size: 28px;
 }
`;

const LoginDialog = styled.div`
 height: 500px;
 border-radius: 5px;
`;

const LoginForm = styled.form`
 height: 100%;
 display: flex;
 flex-direction: column;
 justify-content: space-evenly;
 align-items: center;
 margin-top: 150px;
 border: 1px solid #8b9dc3;
`;

const InputsButtonsDiv = styled.div`
 display: flex;
 width: 100%;
 height: 35%;
 justify-content: center;

 `;

const InputsDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width:100%;
  align-items:center;

 `;

const UsernameDiv = styled.div`
 display: flex;
 align-items: baseline;
 width:100%;
 justify-content:center;
`;

const PasswordDiv = styled.div`
 display: flex;
 align-items: baseline;
 margin-left: 5px;
 width:100%;
 justify-content:center;
`;

const UsernameInput = styled.input`
 margin-left: 18px;
 border: 0;
 color: black;
 background-color: #ffffff;
 height: 40px;
 border-radius: 3px;
 font-size: 1.8rem;
 text-align: center;
 width:60%;

`;

const PasswordInput = styled.input`
 margin-left: 20px;
 border: 0;
 color: black;
 background-color: #ffffff;
 height: 40px;
 font-size: 1.8rem;
 border-radius: 3px;
 text-align: center;
 width:60%;

`;
const LogRegButtons = styled.div`
display:flex;
width:60%;
justify-content:space-around;
`;

const LoginButton = styled.button`
 display: block;
 height: 50px;
 width: 100px;
 border-radius: 5px;
 color: white;
 background-color: midnightblue;
 cursor:pointer;
`;
const RegisterButton = styled.button`
 display: block;
 height: 50px;
 width: 100px;
 border-radius: 5px;
 color: white;
 background-color: midnightblue;
 cursor:pointer;
`;

class Login extends React.Component {

  render() {
    return (
      <LoginContainer>
        <LoginDialog>
          <LoginForm onSubmit={this.props.submitLogin}>
            <h1 className="LoginTitle">User Database Login</h1>
            Please Login:
            <InputsButtonsDiv>
              <InputsDiv>
                <UsernameDiv>
                  <div>Username:</div>
                  <UsernameInput
                    value={this.props.usernamevalue}
                    type="text"
                    name="usernamevalue"
                    onChange={this.props.handleChanges}
                  />
                </UsernameDiv>
                <PasswordDiv>
                  <div>Password:</div>
                  <PasswordInput
                    value={this.props.passwordvalue}
                    type="password"
                    name="passwordvalue"
                    onChange={this.props.handleChanges}
                  />
                </PasswordDiv>
              </InputsDiv>
            </InputsButtonsDiv>
            <LogRegButtons>
            <LoginButton type="submit">Login</LoginButton>
            <RegisterButton type="button" onClick={this.props.toggleRegister}> Register</RegisterButton>
            </LogRegButtons>
          </LoginForm>
        </LoginDialog>
      </LoginContainer>
    );
  }
 }

export default Login;
