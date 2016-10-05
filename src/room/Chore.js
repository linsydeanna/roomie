import React, { Component } from 'react';

class Chore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInput: false
    }
  }

  changeToInput() {
    this.setState({
      displayInput: !this.state.displayInput
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addEditedChore(this.name.value, this.props.chore.name)
    this.setState({
      displayInput: !this.state.displayInput
    })
  }

  claim() {
    console.log( " this.props.chore is ", this.props.chore)
    this.props.claimChore(this.props.chore)
    this.setState({
      claimed: !this.state.claimed
    })
  }

  handleClick(){
    console.log (" in chores, this.props.rooms is", this.props.rooms)
    if (this.props.rooms.length) {
      this.props.deleteChore(this.props.chore.name)
    }
  }

  render() {
    const thisUser = JSON.parse(sessionStorage.getItem('currentUser'))
    const thisUserPhoto = sessionStorage.getItem('UserAvatar')

    let choreClaimer = <p>Unclaimed</p>
    if (this.state.claimed) {
      choreClaimer = <p>{thisUser.displayName}</p>
    }

    let choreClaimerAvatar = <div></div>
    if (this.state.claimed) {
      choreClaimerAvatar = <div><img src={thisUserPhoto} alt="choreClaimer"/></div>
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
          <button onClick={this.handleClick.bind(this)}>
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
          </div>
          <div className="ChoreFrequency">
          </div>
        </div>
        <div className="ChoreRight">
          <div>
          </div>
          {choreClaimerAvatar}
          {choreClaimer}
          <button onClick={this.claim.bind(this)}>{buttonText}</button>
        </div>
      </div>
    );
  }
}

export default Chore;
