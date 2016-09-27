import React, { Component } from 'react';
import Rebase from 're-base'
import base from '../config/base'

class Chore extends Component {
  constructor(props) {
    super(props);
    const isClaimed = this.props.chore.claimedBy
    this.state = {
      displayInput: false,
      claimed: isClaimed
    }
  }

  changeToInput() {
    this.setState({
      displayInput: !this.state.displayInput
    })
  }

  addEditedChore(editedChore) {
    event.preventDefault()
    let roomname = this.props.room
    base.update(`houseone/rooms/${roomname}/chores/${this.props.chore.key}`, {
      data: {name: editedChore}
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.addEditedChore(this.name.value)
    this.setState({
      displayInput: !this.state.displayInput
    })
  }

  handleClick(){
    this.props.deleteChore(this.props.chore.name)
  }

  claimChore(){
    const thisUser = JSON.parse(sessionStorage.getItem('currentUser'))
    let roomname = this.props.room
    base.update(`houseone/rooms/${roomname}/chores/${this.props.chore.key}`, {
      data: {claimedBy: thisUser.displayName}
    })
    if (this.state.claimed) {
      base.update(`houseone/rooms/${roomname}/chores/${this.props.chore.key}`, {
        data: {claimedBy: ''}
      })
    }
    this.setState({
      claimed: !this.state.claimed,
    })
    console.log("this.props.chore.key is", this.props.chore.key)
  }
              // <img src="https://scontent.xx.fbcdn.net/v/t1.0-1/s100x100/10354686_10150004552801856_220367501106153455_n.jpg?oh=be6de6cd82a42bb74605217ee7026d06&oe=58788C73"/>

  render() {
    const thisUser = JSON.parse(sessionStorage.getItem('currentUser'))

    let choreClaimer = <p>Unclaimed</p>
    let choreClaimerAvatar = <div></div>
    if (this.state.claimed) {
      choreClaimer = <p>{thisUser.displayName}</p>
    }

    if (this.state.claimed) {
      choreClaimerAvatar = <div><img src={thisUser.photoURL} alt="choreClaimer"/></div>
    }

    let buttonText = 'Claim this chore'
    if (this.state.claimed) {
      buttonText = 'Unclaim'
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
          </div>
          {choreClaimer}
          <button onClick={this.claimChore.bind(this)}>{buttonText}</button>
        </div>
      </div>
    );
  }
}

Chore.contextTypes = {
 applicationUser: React.PropTypes.object.isRequired
}

export default Chore;
