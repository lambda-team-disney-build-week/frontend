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
// import './styles.scss';
import axios from 'axios';


class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      attraction: '',
      children: '',
      time: '',
      parent_id: '',
      created_at: '',
      updated_at: ''
    };
  }

  componentDidMount(){
      this.props.getPosts()
      this.setState({
        title: localStorage.getItem('title'),
        attraction: this.props.attraction,
        children: this.props.children,
        time: this.props.time,
        parent_id: this.props.parent_id,
        created_at: this.props.created_at,
        updated_at: this.props.created_at
      })
      console.log(this.props,"props")
    }
    
    getPost = (e, id) => {
      const token = localStorage.getItem('token')
        axios
          .get(`https://disney-parent.herokuapp.com/api/posts`,  {headers: {Authorization: token}})
          .then(res=> {
          console.log(res)
          .then(res => {
            this.setState({
              title: res.data.title,
              attraction: res.data.attraction,
              children: res.data.children,
              time: res.data.time,
              parent_id: res.data.parent_id,
              created_at: res.data.created_at,
              updated_at: res.data.updated_at
            })
          })
          })
          .catch(err=> console.log(err));
    }

    deletePost = (e, id) => {
      e.preventDefault();
      const token = localStorage.getItem('token')
        axios
          .delete(`https://disneyparent-backend.herokuapp.com/posts${id}`, {headers: { Authorization: token}})
          .then(res => {
            window.location.reload()
            console.log(res,"res");
          })
          .catch(err => console.log(err));
    }

  render() {
    console.log(this.props)
    return (
      <Container className="wrap">
        <div>
          <Card className="shadow border">
            <CardTitle className="title"><h1><strong>{this.props.post.title}</strong></h1></CardTitle>
            <CardSubtitle className="attraction"><strong>Location: {this.props.post.attraction}</strong></CardSubtitle>
            <CardText className="children">Number of Children: {this.props.post.children}</CardText>
            <CardText className="time">Time: {this.props.post.time}</CardText>
            <CardText className="created">Requested at: {this.props.post.created_at}</CardText>
            <CardText className="updated_at">Updated at: {this.props.post.updated_at}</CardText>
          </Card>
        </div>
      </Container>
    );
  }
}

export default Post;


