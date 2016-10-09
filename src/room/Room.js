import React, { Component } from 'react';
import Chore from './Chore'
import '../styles/ChoreView.css'

class Room extends Component {

  handleSubmit(event) {
    event.preventDefault()
    this.props.handleSubmit(event)
    this.refs.input.value = ''
    console.log("1")
  }

render() {
    return (
      <div className="Room">
        {this.props.selectedRoom().map((chore, index) => <Chore rooms={this.props.rooms} room={this.props.room} chore={chore} deleteChore={this.props.deleteChore} addEditedChore={this.props.addEditedChore} claimChore={this.props.claimChore}
        setDueDate={this.props.setDueDate}
        completeChore={this.props.completeChore}
        storeClaimState={this.props.storeClaimState} key={index}/>)}
        <div className="Chore">
          <div className="ChoreLeft">
            <div className="ChoreName">
              <form onSubmit={this.handleSubmit.bind(this)}><input ref="input" type="text"/><button type="submit">Add Chore</button></form>
            </div>
            <div className="ChoreFrequency">
            </div>
          </div>
          <div className="Avatar">
          </div>
        </div>
      </div>
    );
  }
}

Room.contextTypes = {
household: React.PropTypes.string
}

export default Room;
