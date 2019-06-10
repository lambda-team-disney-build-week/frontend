import React from "react";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import "./login.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Navi from '../pages/Navi'
 
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      accountType: ""
    };
  }
 
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
 
  submitHandler(e) {
    e.preventDefault();
    axios
      .post("https://disneyparent-backend.herokuapp.com/auth/parents/login", {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        accountType: this.state.accountType
      })
      .then(res => {
        console.log(res);
        const { token, username, userId } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        localStorage.setItem("userId", userId);
        console.log(token);
        this.props.history.push("/Posts");
        axios
          .get("https://disneyparent-backend.herokuapp.com/posts", {
             
            headers: { Authorization: token }
          })
          .then(res => {
            console.log(res);
           
          })
          .catch(err => console.log(err));
      });
  }
 
  render() {
    return (
    
      <Container className="App"><Navi />   
        <h2 className="display-4 h2">Sign In</h2>
        <Form className="form" onSubmit={e => this.submitHandler(e)}>
          <Col>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="useername"
                name="username"
                id="exampleUser"
                placeholder="Username"
                onChange={this.changeHandler}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                onChange={this.changeHandler}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>email</Label>
              <Input
                type="email"
                name="email"
                id="exampleUser"
                placeholder="email"
                onChange={this.changeHandler}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Account Type</Label>
              <Input
                type="accountType"
                name="accountType"
                id="exampleUser"
                placeholder="accountType"
                onChange={this.changeHandler}
              />
            </FormGroup>
          </Col>
 
          <Button className="btn btn-primary btn-lg">Submit</Button>
        </Form>
      </Container>
    );
  }
}
 
export default withRouter(LoginForm);