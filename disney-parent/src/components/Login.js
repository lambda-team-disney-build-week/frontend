import React, {Component} from 'react';
import LoginForm from '../components/LoginForm'
import Jumbo from '../components/Jumbo'
import Signup from '../pages/Signup'


  class Login extends Component {
    constructor(props){
      super(props)
    this.state={
        loginForm:true,
        visible: true
          }
    }
    toggle = () => {
      this.setState({
        loginForm:!this.state.loginForm
      })
    }
    render() {
      return (
        <div>
          <Jumbo toggle={this.toggle} loginForm={this.state.loginForm}/>
          {this.state.loginForm ?  <LoginForm history={this.props.history}/> : <Signup toggle={this.toggle}/>}
        </div>
      );
    }
  }


  export default Login