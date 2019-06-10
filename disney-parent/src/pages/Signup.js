import React, {Component} from 'react';
import axios from 'axios';
import {Button, Form, Col, FormGroup, Label, Input, Container} from 'reactstrap';
 
import '../';
 
class Signup extends Component{
    state= {
        username:'',
        password: '',
        email:'',
        accountType: ''
    }
 
 
  componentDidMount(){}
 
  changeHandler = e => {
      this.setState({
          [e.target.name]: e.target.value
      })
   }
 
  submitHandler = e => {
      e.preventDefault();
      axios
          .post("https://disneyparent-backend.herokuapp.com/auth/parents/register", {
              username: this.state.username,
              password: this.state.password,
              email: this.state.email,
              accountType: this.state.accountType
          }).then(res => {
              this.props.toggle();
              console.log(res)
          })
          .catch(err=> console.log(err))
  }
 
 
  render() {
      return(
        <Container className="App Sign-up">
          <h2 className='display-4 h2'>Register</h2>
          <Form className="form" onSubmit={(e) => this.submitHandler(e)}>
              <Col>
              <FormGroup>
                  <Label>Username</Label>
                  <Input
                  type="username"
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
                placeholder="account-type"
                onChange={this.changeHandler}
              />
            </FormGroup>
          </Col>
            <Button className='btn btn-primary btn-lg'>Submit</Button>
        </Form>
     </Container>
    )
  }
}
 
export default Signup;
