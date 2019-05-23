import React, {Component} from 'react';
// import axios from 'axios';
import PostComponent from '../components/PostComponent';
import {Jumbotron, Container} from 'reactstrap';
import Navi from './Navi';
import Header from './Header';

export default class Profile extends Component {
    constructor(props){
        super(props)
    this.state= {
        users: [],
        posts: []
    }
    }
render(){
      const hello= localStorage.getItem('username')
      return(
          <div>
              <Header />
                <Navi />
                <Jumbotron fluid>
                    <Container fluid>
                    <h1 className="display-3">Hello!</h1>
                    <p className="lead">Please post a request below.</p>
                    </Container>
                </Jumbotron>
                <div>
                    <PostComponent/>
                </div>

          </div>
      )
  }


}
