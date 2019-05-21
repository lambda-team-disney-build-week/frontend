import React from 'react';
import { connect }from 'react-redux';

class Parent extends React.Component{
  constructor(props) {
      super(props);
        this.state = {
        username: '',
        password: '',
        email: '',
        id: '',
        accountType: ''
      };
   }
 // adding parents
  addParent = e => {
    const parent = {
      username: this.state.name,
      password: this.state.password,
      email: this.state.email,
      id: this.state.id,
      accountType: this.state.accountType
    }
    this.props.addParent(parent)
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value});
  }
  //delete parent
  deleteParent = e => {
      this.setState({id: e.target.value})
      this.props.deleteParent(this.state.id);
      this.setState({ id : ''})
  }  
  idSet = e => {
      this.setState({ id: e.target.value })
  }

  componentDidMount() {
      this.props.getParents()
  }
}
 const mapStateToProps = state => {
     return {
         parents: state.parents,
         fetchingParents: state.fetchingParents
     }
 }

 export default connect(mapStateToProps, {
     addParent,
     deleteParent,
     getParents
 })(Parent);

