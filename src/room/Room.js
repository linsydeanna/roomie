import React, { Component } from 'react';
import Chore from './Chore'
import '../styles/ChoreView.css'
import Rebase from 're-base'

const base = Rebase.createClass({
    apiKey: "AIzaSyDnoxYjmFPcZSQWKRNlebHr9n0pkSGOyUw",
    authDomain: "final-project-34471.firebaseapp.com",
    databaseURL: "https://final-project-34471.firebaseio.com",
    storageBucket: "final-project-34471.appspot.com",
  });

class Room extends Component {
  constructor(props){
    super(props);
    this.state = {
      chores: [],
      chore: {}
    }
  }

  componentDidMount() {
    this.rebaseRef = base.syncState(`houseone/rooms/kitchen/chores`, {
      context: this,
      state: 'chores',
      asArray: true,
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.rebaseRef)
  }

  addChore() {
    event.preventDefault()
    let chores = this.state.chores
    let chore = {
      name: this.name.value
    }
    console.log(chore)
    this.setState({
      chores: chores.concat([chore])
    })
  }

  deleteChore(deletedChore){
    event.preventDefault()
    let chores = this.state.chores
    this.setState({
      chores: chores.filter(chore => deletedChore !== chore.name)
  })
}

  render() {

    return (
        <div className="Room">
          {this.state.chores.map((chore, index) => <Chore chore={chore} deleteChore={this.deleteChore.bind(this)} key={index}/>)}
          <div className="Chore">
          <div className="ChoreLeft">
            <div className="ChoreName">
            <form onSubmit={this.addChore.bind(this)}><input type="text" ref={(input) => this.name = input}/><button type="submit">Add Chore</button></form>
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

export default Room;
