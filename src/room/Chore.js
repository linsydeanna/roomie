import React, { Component } from 'react';
import Rebase from 're-base'

const base = Rebase.createClass({
    apiKey: "AIzaSyDnoxYjmFPcZSQWKRNlebHr9n0pkSGOyUw",
    authDomain: "final-project-34471.firebaseapp.com",
    databaseURL: "https://final-project-34471.firebaseio.com",
    storageBucket: "final-project-34471.appspot.com",
  });

class Chore extends Component {
  constructor() {
    super();
    this.state = {
      displayInput: false
    }
  }

  changeToInput() {
    console.log(this.state)
    this.setState({
      displayInput: !this.state.displayInput
    })
  }

  addChore() {
    event.preventDefault()
    console.log("AddChore button works")
    let input = this.refs.input
    let addedChore = input.value
    let chores = this.state.chores
    this.setState({
      chores: chores.concat([addedChore])
    })
  }

  componentDidMount() {
    this.rebaseRef = base.syncState('chores', {
      context: this,
      state: 'chores',
      asArray: true,
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.rebaseRef)
  }

  render() {
    let choreInputArea = <div onClick={this.changeToInput.bind(this)} className="ChoreName">
      <p>{this.props.name}</p>
    </div>
    if (this.state.displayInput) {
    choreInputArea = <form onSubmit={this.addChore.bind(this)}><input type="text" ref="input"/><button>Add Chore</button></form>
    }
    console.log(this.props)
    return (
      <div className="Chore">
        <div className="ChoreLeft">
          {choreInputArea}
          <div className="Frequency">
          </div>
        </div>
        <div className="Avatar">
        </div>
      </div>
    );
  }
}

export default Chore;
