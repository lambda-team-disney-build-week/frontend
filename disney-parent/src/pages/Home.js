import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import Login from '../components/Login';


export default class Home extends Component {

    render() {
        return ( 
            <div> {
                localStorage.getItem('token') ? ( 
                    < Redirect to = {
                    { pathname: '/posts'}
                    }/>) : (<Login />)
            } 
            </div>
        )
    }
}