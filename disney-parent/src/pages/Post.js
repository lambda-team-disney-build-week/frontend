import React  from 'react';
import { Card, 
         CardImg, 
         CardBody,
         CardTitle, 
         CardSubtitle, 
         CardText,
         Button, 
         Container, 
         Input, 
         Form } from 'reactstrap';
import './post.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      username:'',
      comment: '',
      post_id: '',
      created_at: '',
      updated_at: '',
      isEditing: true
    };
  }

componentDidMount(){
      this.props.getPosts()
      this.setState({
       username: localStorage.getItem('username'),
       post_id: this.props.post.id
      })
      console.log(this.props, 'props')
    }


  toggle = (id, comment) => e => {
    this.setState({
    isEditing: !this.state.isEditing,
    id,
    comment
    })
  }

  
 

    changeHandler = e => {
     this.setState({
       [e.target.name]: e.target.value
     });
   }

   

  

  addComment = ( comment, id, username) => {

    const token = localStorage.getItem('token')
    axios
       .post(`https://disneyparent-backend.herokuapp.com/comments/${id}`, {comment: this.state.comment, username: this.state.username, post_id: this.state.post_id}, {headers:{authorization: token}})
      .then(res => {
            this.props.getPosts()
            this.toggle()
            this.setState({
              comment:''
            })
        })
        .catch(err=> console.log(err))

  }

  updateComment = (comment, id) => {
    const token = localStorage.getItem('token')
    console.log({comment: this.state.comment}, {post_id: this.state.id}, 10)
    axios
      .put(`https://disneyparent-backend.herokuapp.com/comments/${id}`, {comment: this.state.comment, username: this.state.username}, {headers: {Authorization: token}})
      .then(res => {
        this.props.getPosts()
        this.toggle()
        this.seState({
          comment: ''
        })
      })
      .catch(err => console.log(err));
  }


  deleteComment = (e, id) => {
    e.preventDefault();
    const token = localStorage.getItem('token')
    axios
        .delete(`https://disneyparent-backend.herokuapp.com/comments/${id}`, {headers: {Authorization: token}})
        .then(res=> {
            this.props.getPosts()        
         })
        .catch(err=> console.log(err));
  }


  getPost = (e, id) => {
      const token = localStorage.getItem('token')
        axios
          .get(`https://disneyparent-backend.herokuapp.com/posts/${id}`,  {headers: {Authorization: token}})
          .then(res=> {
          console.log(res)

          })
          .catch(err=> console.log(err));
    }

    deletePost = (e, id) => {
      e.preventDefault();
      const token = localStorage.getItem('token')
        axios
          .delete(`https://disneyparent-backend.herokuapp.com/posts/${id}`, {headers: { Authorization: token}})
          .then(res => {
            window.location.reload()
            console.log(res,"res");
          })
          .catch(err => console.log(err));
    }


   submitHandler = (e) => {
    e.preventDefault()
    return(
      <div>
        {this.state.isEditing ? this.addComment(this.state) : this.updateComment(this.state.comment, this.state.id)}
      </div>
    )
  }

      
  
  render() {

  const thisId = +localStorage.getItem('parent_id');
  const username = localStorage.getItem('username');
 console.log(this.props)
   
   
    return (
       <Container className="wrap">
            <div>

              <Card className="shadow border">
             <CardTitle onClick={(e) => this.getPost(e, this.props.post.id)} className='center large'>{this.props.post.title}</CardTitle>

                <CardImg top width="100%" src="" alt="" />
                <CardBody className='teal'>
                  <CardTitle className="strong"><strong>Date Requested:<span>&nbsp;</span></strong> {this.props.post.created_at} </CardTitle>          
                  <CardSubtitle className='pad'><strong>Date: <span>&nbsp;</span></strong> {this.props.post.time}</CardSubtitle>
                  <CardSubtitle className='pad'><strong>Location:<span>&nbsp;</span></strong> We are located in {this.props.post.attraction} with  {this.props.post.children} children
                  </CardSubtitle>
                  
              <Form onSubmit={this.submitHandler}>
                  <CardSubtitle>
                       {this.props.post.comment && this.props.post.comment.map(comment=> {
                         
                          return(
                            <div key={comment.id}>
                            
                                <CardSubtitle className='pad'><strong>Comment: <span>&nbsp;</span></strong>{comment.comment} </CardSubtitle>
                                {this.state.isEditing ?
                                  (<div>
                                <div className='centered'>
                                {comment.id === username ? <Button className='smaller blue left' onClick={(e) => this.deleteComment(e, comment.id)}>Delete</Button> : null}
                                
                                  {comment.id === username ? <Button className='smaller red' onClick={this.toggle(comment.id, comment.comment)}>Edit </Button> : null}
                                    </div>
                                  </div>)
                                  :
                                  null
                                }
                            </div>
                            
                          )
                          
                      }
                       )}
    
                  </CardSubtitle> 
                  {this.state.isEditing ? 
                      <Input name='comment' value={this.state.comment} onChange={this.changeHandler} placeholder= 'Add a comment...'></Input>
                      :
                      <div className='centered'>
                      <Button className='blue smaller centered' onClick={this.toggle(this.state.parent_id, this.state.comment)}>Cancel</Button>
                      <Input name='comment' value={this.state.comment} onChange={this.changeHandler} placeholder= 'Edit your comment...'></Input>
                      </div>
                  }   
            </Form>
                 
                </CardBody>
                <div className='displayFlex'>
                   {this.props.post.id === thisId ? <Button className='leftButton red' onClick={(e) => this.deletePost(e, this.props.post.id)}>Delete Post</Button> : null}
                   {this.props.post.id === thisId ? <Button className='rightButton light-blue' onClick={(e) => this.updatePost(e, this.props.post.id)}>Update Post</Button> : null}
                  </div>
                </Card>
              </div>
            </Container>
        )
      }
}


export default Post;


