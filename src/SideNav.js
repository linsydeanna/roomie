import React, { Component } from 'react';
import Rebase from 're-base'
// import {Link} from 'react-router'
import './styles/SideNav.css';

const base = Rebase.createClass({
    apiKey: "AIzaSyDnoxYjmFPcZSQWKRNlebHr9n0pkSGOyUw",
    authDomain: "final-project-34471.firebaseapp.com",
    databaseURL: "https://final-project-34471.firebaseio.com",
    storageBucket: "final-project-34471.appspot.com",
  });

class SideNav extends Component {
  constructor() {
    super();
    this.state = {
      showAddRoomBox: false,
      rooms: []
    }
  }

  componentDidMount() {
    this.rebaseRef = base.syncState('rooms', {
      context: this,
      state: 'rooms',
      asArray: true,
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.rebaseRef)
  }

  handleClick() {
    event.preventDefault()
    console.log("Add room button is working")
    this.setState({
      showAddRoomBox: !this.state.showAddRoomBox
    })
  }

addRoom() {
  event.preventDefault()
  console.log("addRoomBox button is working")
  let input = this.refs.roomInput
  let addedRoom = input.value
  let rooms = this.state.rooms
  this.setState({
    rooms: rooms.concat([addedRoom])
  })
}

onRoomClick() {
  event.preventDefault()
  console.log("onRoomClick is working")
}

  render() {

    let addRoomBox;
if (this.state.showAddRoomBox) {
  addRoomBox =
  <div className="AddRoom">
    <form onSubmit={this.addRoom.bind(this)}>
      <input type="text" placeholder="room" ref="roomInput"/>
      <button>Add room</button>
    </form>
  </div>
}

    return (
      <div className="SideNav">
        ChoreShare
        <div>
          <div className="NavItems">
            <p>Calendar</p>
          </div>
          <div className="NavItems">
            <p>People</p>
          </div>
          <div className="NavItems AddRooms">
            <p>Rooms</p>
            <button onClick={this.handleClick.bind(this)}>Add room</button>
          </div>
            <div className="NavRooms">
              <div>
                {this.state.rooms.map((room, index) => <div onClick={this.onRoomClick.bind(this)} key={index}><p>{room}</p></div>)}
              </div>
              {addRoomBox}
            </div>
        </div>
      </div>
    );
  }
}

export default SideNav;
