import React, {Component} from 'react';
import axios from 'axios';
import Parent from './Parent';
import Navi from './Navi';

export default class Parent extends Component {
    constructor(props){
        super(props)
    this.state= {
        parents: [],
        }
    }

    componentDidMount(){
        this.getParents();
    }

    getParents = () => {
        const token = localStorage.getItem('token')
    axios
      .get('https://disneyparent-backend.herokuapp.com/parents', {headers: {Authorization: token}})
      .then(res=> 
        {console.log(res.data)
        this.setState({      
            parents: res.data
        })
        console.log(this.state.parents)
    })
    .catch(err=> console.log(err))
    }

   
     render(){
      return(
          <div>
              <Navi />
              {this.state.parents.map((parent)=>
                <Parent parent={parent} key={parent.id} getParents={this.getParents}/>
              )}
          </div>
      )
  }
}    
