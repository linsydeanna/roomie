import React, { Component } from 'react';
import Chore from './Chore'
import '../styles/ChoreView.css'

const chores = [
  {
    name: 'dishes',
    isCompleted: false
  }
]

class Room extends Component {
  constructor(props){
    super(props);
    this.state = {
      chores
    }
  }

  getChores() {
    return this.state.chores.map((choreAdded, index) => {
      return (<Chore name={choreAdded.name} isCompleted={choreAdded.isCompleted} key={index}/>)
    })
  }


  render() {

    const chores = this.getChores()

    return (
      <div className="Room">
        {chores}
      </div>
    );
  }
}

export default Room;
