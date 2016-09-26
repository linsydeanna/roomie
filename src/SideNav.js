import React, { Component } from 'react';
import Rebase from 're-base'
import {Link, hashHistory} from 'react-router'
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
      rooms: [],
      people: []
    }
    console.log("sidenav this.props is", this.props)
  }

  componentDidMount() {
    this.rebaseRef = base.syncState(`houseone/rooms`, {
      context: this,
      state: 'rooms',
      asArray: true
    })
      this.rebaseRef = base.syncState(`houseone/roommates`, {
        context: this,
        state: 'people',
        asArray: true
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
  let input = this.refs.roomInput
  let addedRoom = {
    roomname: input.value,
    chores: []
  }
  console.log("addedRoom is", addedRoom)
  let rooms = this.state.rooms
  this.setState({
    rooms: rooms.concat([addedRoom])
  })
  hashHistory.push(`/dashboard/${addedRoom.roomname}`)
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

console.log("this.state.rooms is", this.state.rooms)

    return (
      <div className="SideNav">
        ChoreShare
        <div>
          <div className="NavItems">
            <p>Calendar</p>
          </div>
          <div className="NavItems">
            <p>People</p>
            {this.state.people.map((person, index) => <p className="roommates" key={index}>{person.userName}</p>)}
          </div>
          <div className="NavItems AddRooms">
            <p>Rooms</p>
            <button onClick={this.handleClick.bind(this)}>Add room</button>
          </div>
            <div className="NavRooms">
              <div>
                {this.state.rooms.map((room, index) =>
                  <Link
                    to={`/dashboard/${room.roomname}`}
                    key={index}
                  >
                    <div
                      onClick={this.onRoomClick.bind(this)}
                    >
                      <p>{room.roomname}</p>
                    </div>
                  </Link>
                )}
              </div>
              {addRoomBox}
            </div>
        </div>
      </div>
    );
  }
}

export default SideNav;
