import React, { Component } from 'react';
import Chore from './Chore'
import '../styles/ChoreView.css'

class Room extends Component {
  render() {
    return (
      <div className="Room">
      <Chore />
      </div>
    );
  }
}

export default Room;
