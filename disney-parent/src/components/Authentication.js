import React, {Component} from 'react';
import {getToken} from '../helpers/getToken'
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import Login from '../pages/Login';
import Signup from '../pages/Signup';

class Auth extends Component {
    constructor(props){
        super(props);

        this.state={
            user: undefined
        }
    }

    componentDidMount(){
        const token = getToken();
        console.log(token)
        if(!token){
            this.props.history.push(`/parents/${userInfo.id}`)
        }
        axios
        .post('https://disneyparent-backend.herokuapp.com/auth/parents/login', { headers: { Authorization: token}})
        .then(res=> 
          this.setState({      
              user: res.data
          }))
          .catch(err=> {
              localStorage.removeItem('token');
              this.props.history.push('/Signup')
          })
    }
    render(){
        const token= getToken()
        if (!token){
            return(<div> 
                <Login />
                    </div>)
        }
        return (
            <div>
            {this.props.children}
            </div>
        )
}
}

export default withRouter(Auth);

