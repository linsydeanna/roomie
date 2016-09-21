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
      chores: []
    }
  }

  componentDidMount() {
    base.fetch(`houseone/rooms/kitchen/chores`, {
      context: this,
      asArray: true,
      then(data){
        console.log(data)
        this.setState({
          chores: data
        })
      }
    })
  }

  render() {

    return (
      <div className="Room">
        {this.state.chores.map((chore) => <Chore name={chore.key} key={chore.key}/>)}
      </div>
    );
  }
}

export default Room;
