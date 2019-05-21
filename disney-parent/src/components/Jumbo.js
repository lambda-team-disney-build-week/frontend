import React, {Component} from 'react';
import './jumbo.css';
import {Button, Jumbotron} from 'reactstrap';

class Jumbo extends Component {
    render(){
        return(
            
            <div className="jumbotron">
            <Jumbo>
                <h1 className="display-4">Theme Park Buddy</h1>
                {this.props.loginForm ? 
                    <Button onClick={this.props.toggle} className="btn btn-lg btn-blue">Sign Up</Button>
                        :
                    <Button onClick={this.props.toggle} className="btn btn-lg btn-blu">Sign In</Button>}
            </Jumbo>
            </ div>
            
        
            
        )
    }
}

export default Jumbo