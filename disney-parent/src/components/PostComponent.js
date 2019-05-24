import React from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import "./postcomponent.css";
import axios from "axios";
import {withRouter} from 'react-router-dom'


class PostComponent extends React.Component {
  state = {
      parent_id: 1+localStorage.getItem('id'),
      title:'',
      attraction:'',
      children: '',
      time: '',
      created_at: '',
      updated_at: ''
  }

   addPost = post => {
    const token = localStorage.getItem("token");
    console.log(post);
    axios
      .post("https://disneyparent-backend.herokuapp.com/posts", post, {
        headers: { Authorization: token }
      })
      .then(res => { console.log(res);
        this.props.history.push('./posts')
      }
     
      )
      .catch(err => console.log(err));
  };

  changeHandler = e => {
    console.log(this.props);
    this.setState({
      [e.target.name]:
        e.target.name === "children"
          ? parseFloat(e.target.value)
          : e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    this.addPost(this.state);
    this.props.history.push('./posts')
  };

  render() {
    return (
      <Container>
        <Form className='spaced' onSubmit={this.submitHandler}>
          <FormGroup>
            <Label for='postRequest'>Request</Label>
            <Input
              type='text'
              name='title'
              id='post'
              placeholder='Post Request'
              onChange={this.changeHandler}
              value={this.state.title}
            />
          </FormGroup>
          <FormGroup>
            <Label for="attraction">Where are You?</Label>
            <Input
              type='text'
              name='attraction'
              id="attraction"
              onChange={this.changeHandler}
              value={this.state.attraction}
            >
             
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for='children'>Number of Kids</Label>
            <Input
              type='select'
              name='children'
              id='exampleText'
              onChange={this.changeHandler}
              value={this.state.children}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </Input>            
            <Label for='time'>Meeting Time</Label>
            <Input
              type='text'
              name='time'
              id='exampleText'
              placeholder='What time should we meet?'
              onChange={this.changeHandler}
              value={this.state.time}
            />
          </FormGroup>
          <div className='center'>
            <Button className='centered blue'>Submit</Button>
          </div>
        </Form>
      </Container>
    );
  }
}

export default withRouter(PostComponent);

