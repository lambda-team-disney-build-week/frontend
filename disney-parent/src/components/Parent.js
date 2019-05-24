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


class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     id:'',
     username: '',
     email: "",
     accountType:'',
    };
  }

  componentDidMount(){
      this.props.getParents()
      this.setState({        
        id: localStorage.getItem('id'),
        username:  this.props.username,
        time: this.props.time,
        email: this.props.email,
        accountType: this.props.accountType,
      })
      console.log(this.props,"props")
    }
    
    getParent = (e, id) => {
      const token = localStorage.getItem('token')
        axios
          .get('https://disneyparent-backend.herokuapp.com/parents',  {headers: {Authorization: token}})
          .then(res => {
            console.log(res)
            .then( res => {
            this.setState({
              id: res.data.id,
              username: res.data.username,
              children: res.data.children,
              time: res.data.time,
              email: res.data.email,
              accountType: res.data.accountType,
            })
          })
          })
          .catch(err=> console.log(err));
    
    }

    deleteParent = (e, id) => {
      e.preventDefault();
      const token = localStorage.getItem('token')
        axios
          .delete(`https://disneyparent-backend.herokuapp.com/parents`, {headers: { Authorization: token}})
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
            <CardTitle className="id"><h1><strong>{this.props.parents.id}</strong></h1></CardTitle>
            <CardSubtitle className="username"><strong>Location: {this.props.parents.username}</strong></CardSubtitle>
            <CardText className="time">Number of time: {this.props.parents.time}</CardText>
            <CardText className="email">email: {this.props.parents.email}</CardText>
            <CardText className="accountType">Requested at: {this.parents.accountType}</CardText>
          </Card>
        </div>
      </Container>
    );
  }
}

export default Parent;

