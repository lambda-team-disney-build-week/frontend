import React, { Component } from 'react';
import { Redirect, Link} from 'react-router-dom';
import Login from '../components/Login';


export default class Home extends Component {

    render() {
        return ( 
            <div> {
                localStorage.getItem('token') ? ( < Redirect to = {
                        {
                            pathname: '/parent'
                        }
                    }
                    />) : (<Login / > )
            } 
           </div>
        )
    }

}