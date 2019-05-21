import React, {Component} from 'react';
import './jumbo.css';
import {Button, Jumbotron} from 'reactstrap';

class Jumbo extends Component {
    render(){
        return(
            
            <div className="jumbotron">
                <Jumbotron>
                    <h1 className="display-4">Disney Parent</h1>
                    {this.props.loginForm ? 
                        <Button onClick={this.props.toggle} className="btn btn-lg btn-blue">Sign Up</Button>
                            :
                        <Button onClick={this.props.toggle} className="btn btn-lg btn-blue">Sign In</Button>}
                </Jumbotron>
            </ div>
            
        
            
        )
    }
}

export default Jumbo