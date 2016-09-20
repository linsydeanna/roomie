import React, { Component } from 'react';
// import AddRoom from './room/AddRoom'
import Rebase from 're-base'
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
                <p>Kitchen</p>
                <p>Bathroom</p>
                {this.state.rooms.map((room, index) => <p key={index}>{room}</p>)}
              </div>
              {addRoomBox}
            </div>
        </div>
      </div>
    );
  }
}

export default SideNav;
