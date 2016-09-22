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

  render() {

    return (
      <div className="Room">
        {this.state.chores.map((chore) => <Chore chore={chore} key={chore.key}/>)}
        <button onClick={this.addChore.bind(this)}>Add Chore</button>
      </div>
    );
  }
}

export default Room;
