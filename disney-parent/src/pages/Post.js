import React  from 'react';
import { Card, 
         CardImg, 
         CardBody,
         CardTitle, 
         CardSubtitle, 
         Button, 
         Container, 
         Input, 
         Form } from 'reactstrap';
import './post.css';
import axios from 'axios';

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
       username: this.props.username,
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

   addComment = (comment, id, username) => {
  const token = localStorage.getItem('token')
  axios
      .post(`https://disneyparent-backend.herokuapp.com/comment`,  {comment: this.state.comment, username: this.state.username , post_id: this.state.post_id}, {headers: {Authorization: token}})
      .then(res=> {
          console.log(res, 30)
          this.props.getPosts()
          this.setState({
            comment: this.post
          })
      })
      .catch(err=> console.log(err));
    }
   
  getComment = (e, id) => {

      const token = localStorage.getItem('token')
        axios
          .get(`https://disneyparent-backend.herokuapp.com/comments/${id}`,  {headers: {Authorization: token}})
          .then(res=> {
          console.log(res, 20)
            this.props.getPosts()
            this.toggle()
            this.setState({
             comment: res.data
          })
        })
          .catch(err=> console.log(err));
    }



  updateComment = (comment, id) => {
    const token = localStorage.getItem('token')
    console.log({comment: this.state.comment}, {post_id: this.state.post_id}, 10)
    axios
      .put(`https://disneyparent-backend.herokuapp.com/comments/${id}`, {comment: this.state.comment, username: this.state.username}, {headers: {Authorization: token}})
      .then(res => {
        console.log(res, 26)
        this.setState({
                posts: res.data
            })
            this.props.history.push('./posts')
        })
        .catch(err=> console.log(err))
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
          console.log(res , 10)

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
        {this.state.isEditing ?  this.updateComment(this.state) : this.deleteComment(this.state.comment, this.state.id)}
      </div>
    )
  }

      
  
  render() {

  const thisId = localStorage.getItem('parentId');
  const username = localStorage.getItem('updatedAt');
 console.log(this.props.post, 40)
   
   
    return (
       <Container className="wrap">
            <div>

              <Card className="shadow border">
             <CardTitle onClick={(e) => this.getPost(e, this.props.post.id)} className='center large'>{this.props.post.title}</CardTitle>

                <CardImg top width="100%" src="" alt="" />
                <CardBody className='teal'>
                  <CardTitle className="strong"><strong>Date Created:<span>&nbsp;</span></strong> {this.props.post.created_at} </CardTitle>          
                  <CardSubtitle className='pad'><strong>Updated at: <span>&nbsp;</span></strong> {this.props.post.updated_at}</CardSubtitle>
                  <CardSubtitle className='pad'><strong>Location:<span>&nbsp;</span></strong> We are located in {this.props.post.attraction} with  {this.props.post.children} children
                  </CardSubtitle>
                  
              <Form onSubmit={this.submitHandler}>
                  <CardSubtitle>
                       {this.props.post.comment && this.props.post.comment.map(comment => {
                         
                          return(
                            <div key={comment.id}>
                            
                                <CardSubtitle className='pad'><strong>Comment: <span>&nbsp;</span></strong>{comment.comment} </CardSubtitle>
                                {this.state.isEditing ?
                                  (<div>
                                <div className='centered'>
                                {comment.username === username ? <Button className='smaller blue left' onClick={(e) => this.deleteComment(e, comment.id)}>Delete</Button> : null}
                                
                                  {comment.username === username ? <Button className='smaller red' onClick={this.toggle(comment.id, comment.comment)}>Edit </Button> : null}
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
                      <Button className='blue smaller centered' onClick={this.toggle(this.state.comment)}>Cancel</Button>
                      <Input name='comment' value={this.state.comment} onChange={this.changeHandler} placeholder= 'Edit your comment...'></Input>
                      </div>
                  }   
            </Form>
                 
                </CardBody>
                <div className='displayFlex'>
                   {this.props.post.parent_id === thisId ? <Button className='leftButton red' onClick={(e) => this.deletePost(e, this.props.post.id)}>Delete Post</Button> : null}
                   {this.props.post.parent_id === thisId ? <Button className='rightButton light-blue' onClick={(e) => this.updatePost(e, this.props.post.id)}>Update Post</Button> : null}
                  </div>
                </Card>
              </div>
            </Container>
        )
      }
}


export default Post;


