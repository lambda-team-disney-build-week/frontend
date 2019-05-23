import React, {Component} from 'react';
import axios from 'axios';
import Post from './Post';
import Navi from './Navi';

export default class Posts extends Component {
    constructor(props){
        super(props)
    this.state= {
        posts: [],
        users: []
        }
    }

    componentDidMount(){
        this.getPosts();
        this.getUsers();
    }

    getPosts = () => {
        const token = localStorage.getItem('token')
    axios
      .get('https://disneyparent-backend.herokuapp.com/posts', {headers:{Authorization: token}})
      .then(res=>{ 
          console.log(res.data)
      this.setState({
          posts: res.data
      })
      console.log(this.state.posts)
      })
      .catch(err=> console.log(err))
    }
    
    getUsers = () => {
        const token = localStorage.getItem('token')
        axios
          .get('https://disneyparent-backend.herokuapp.com/parents', {headers: {Authorization: token}})
          .then(res => {
              this.setState({
                  users: res.data
              })
          })
          .catch(err => console.log(err))
    }
    render(){
      return(
          <div>
              <Navi />
              {this.state.posts.map((post)=>
                <Post post={post} key={post.id} getPosts={this.getPosts}/>
              )}
          </div>
      )
  }

}    
