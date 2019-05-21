import React from 'react';
import { render } from 'react-dom';



class ParntList extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
        data: []
    };
  }
    


componentDidMount() {
    fetch('')
    .then(res => res.json())
    .then(res => {
      this.setState({
        data: res.data
      });
    });
  }

  render() {
      return(
          <div>
              <h2>Welcome {this.props.name}</h2>
              <input className="child">You Have no current child care request</input>
              <input classname="child-care">Request Child Care</input>              
          </div>
          <div className="child-care-h">Cild Care History</div>
          <div className="profile">Profile</div>
          <div className="settings">Settings and Support</div>
      );
  }
}
export default ParentList;
