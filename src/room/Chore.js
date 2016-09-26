import React, { Component } from 'react';
import Rebase from 're-base'

const base = Rebase.createClass({
    apiKey: "AIzaSyDnoxYjmFPcZSQWKRNlebHr9n0pkSGOyUw",
    authDomain: "final-project-34471.firebaseapp.com",
    databaseURL: "https://final-project-34471.firebaseio.com",
    storageBucket: "final-project-34471.appspot.com",
  });

  const peopleinhouse = {
    iaks1: {
        displayName: "Linsy Joyner Obama"
      }
  }

class Chore extends Component {
  constructor() {
    super();
    this.state = {
      displayInput: false,
      claimed: false
    }
  }

  changeToInput() {
    this.setState({
      displayInput: !this.state.displayInput
    })
  }

  addEditedChore(editedChore) {
    event.preventDefault()
    base.update(`houseone/rooms/kitchen/chores/${this.props.chore.key}`, {
      data: {name: editedChore}
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log("this.props.chore.key is", this.props.chore.key)
    this.addEditedChore(this.name.value)
    this.setState({
      displayInput: !this.state.displayInput
    })
  }

  handleClick(){
    this.props.deleteChore(this.props.chore.name)
  }

  claimChore(){
    console.log("displayName is", peopleinhouse.iaks1.displayName)
    this.setState({
      claimed: !this.state.claimed
    })
  }

  render() {

    let choreClaimer = <p>Unclaimed</p>
    if (this.state.claimed) {
      choreClaimer = <p>{peopleinhouse.iaks1.displayName}</p>
    }

    let choreInputArea = <div onClick={this.changeToInput.bind(this)} className="ChoreName">
      <p>{this.props.chore.name}</p>
    </div>
    if (this.state.displayInput) {
    choreInputArea = <form onSubmit={this.handleSubmit.bind(this)}><input type="text" ref={(input) => this.name = input}/><button>I'm done editing</button></form>
    }
    return (
      <div className="Chore">
        <div className="ChoreLeft">
          <div className="ChoreName">
            {choreInputArea}
          <button onClick={this.handleClick.bind(this)}>Delete</button>
          </div>
          <div className="ChoreFrequency">
            {this.props.chore.frequency}
          </div>
        </div>
        <div className="ChoreRight">
          <div>
            AVATAR
          </div>
          {choreClaimer}
          <button onClick={this.claimChore.bind(this)}>Claim this chore</button>
        </div>
      </div>
    );
  }
}

export default Chore;
