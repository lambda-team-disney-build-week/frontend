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
import './styles.scss';


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
          .get(`https://disney-parent.herokuapp.com/api/posts/${id}`,  {headers: {Authorization: token}})
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

  render() {
    return (
      <Container className="wrap">
        <div>
          <Card className="shadow border">
            <CardTitle onClick={(e) => this.getPost(e, this.props.posts)} className="center">{this.props.posts.title}</CardTitle>
            <CardSubtitle className="attraction"><strong>{this.props.attraction}</strong></CardSubtitle>
            <CardText className="children">this.props.children</CardText>
            <CardText className="time">{this.props.time}</CardText>
            <CardText className="created">{this.props.created_at}</CardText>
            <CardText className="updated_at">{this.props.updated_at}</CardText>
          </Card>
        </div>
      </Container>
    );
  }
}

export default Post;


