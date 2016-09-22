import React, { Component } from 'react';
import Rebase from 're-base'

const base = Rebase.createClass({
    apiKey: "AIzaSyDnoxYjmFPcZSQWKRNlebHr9n0pkSGOyUw",
    authDomain: "final-project-34471.firebaseapp.com",
    databaseURL: "https://final-project-34471.firebaseio.com",
    storageBucket: "final-project-34471.appspot.com",
  });

class Chore extends Component {
    constructor(){
      super();
      this.state = {
        chore: {}
      }
    }
  // constructor() {
  //   super();
  //   this.state = {
  //     displayInput: true
  //   }
  // }

  // changeToInput() {
  //   console.log(this.state)
  //   this.setState({
  //     displayInput: !this.state.displayInput
  //   })
  // }

  // addChore() {
  //   console.log("AddChore button works")
  //   let input = this.refs.input
  //   let addedChore = input.value
  //   let chores = this.state.chores
  //   this.setState({
  //     chores: chores.concat([addedChore]),
  //     displayInput: !this.state.displayInput
  //   })
  // }

  // handleSubmit(event) {
  //   event.preventDefault()
  //   let name = this.name
  //   this.addChore(name.value)
  // }

  componentDidMount() {
    this.rebaseRef = base.syncState(`houseone/rooms/kitchen/chores/${this.props.name}`, {
      context: this,
      state: 'chore',
      // asArray: true
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.rebaseRef)
  }

  // let choreInputArea = <div onClick={this.changeToInput.bind(this)} className="ChoreName">
  //   <p>{this.props.name}</p>
  // </div>
  // if (this.state.displayInput) {
  // choreInputArea = <form onSubmit={this.handleSubmit.bind(this)}><input type="text" ref={(input) => this.name = input}/><button>Add Chore</button></form>
  // }

  // {choreInputArea}

  render() {
    return (
      <div className="Chore">
        <div className="ChoreLeft">
          {this.state.chore.name}
          <div className="Frequency">
            {this.state.chore.frequency}
          </div>
          <div className="Description">
            {this.state.chore.description}
          </div>
          <div className="ClaimedBy">
            {this.state.chore.claimedBy}
          </div>
          <div className="isComplete">
            {this.state.chore.isComplete}
          </div>
        </div>
        <div className="Avatar">
          <img src={localStorage.fbAvatar} />
        </div>
      </div>
    );
  }
}

export default Chore;
