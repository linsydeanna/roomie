import React, { Component } from 'react';

class Chore extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayInput: false,
      dueDate: false,
      isComplete: false,
      claimed: false
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
    const thisUserPhoto = sessionStorage.getItem('UserAvatar')
    this.props.claimChore(thisUserPhoto, this.props.chore)
    this.setState({
      claimed: !this.state.claimed
    })
  }

  dueDate() {
    this.props.setDueDate(this.refs.date.value, this.props.chore)
    this.setState({
      dueDate: true
    })
  }

  editDueDate() {
    this.setState({
      dueDate: false
    })
  }

  handleClick(){
    if (this.props.rooms.length) {
      this.props.deleteChore(this.props.chore.name)
    }
  }

  complete() {
    this.setState({
      isComplete: true
    })
  }

  unclaim() {
    this.setState({
      claimed: !this.state.claimed
    })
  }

  render() {
    const thisUser = JSON.parse(sessionStorage.getItem('currentUser'))

    let dateSelected = <input ref="date"
        type="date"
        className="ui-input"
        onChange={this.dueDate.bind(this)}
      />
    if (this.state.dueDate) {
      dateSelected = <div onClick={this.editDueDate.bind(this)}>{this.props.chore.dueDate}</div>
    }

    let choreClaimer = <p>Unclaimed</p>
    if (this.state.claimed) {
      this.props.storeClaimState(this.state.claimed, this.props.chore)
      choreClaimer = <p className="claimedText">{thisUser.displayName}</p>
    }

    let checked = <div className="Check" onClick={this.complete.bind(this)}><i className="fa fa-check" aria-hidden="true"></i></div>
    if (this.state.isComplete) {
      this.props.completeChore(this.state.isComplete, this.props.chore)
    }
    if (this.props.chore.done) {
      checked = <div><i className="fa fa-thumbs-up" aria-hidden="true"></i></div>
    }

    let avatar = this.props.chore.avatarURL
    let choreClaimerAvatar = <div></div>
    if (this.props.chore.claimed) {
      choreClaimerAvatar = <div><img className="avatar" src={avatar} alt="choreClaimer" width="50" height="66"/></div>
    }
    if (!this.state.claimed) {
      choreClaimerAvatar = <div></div>
    }

    let buttonText = <button className="claimBtns" onClick={this.claim.bind(this)}>Claim this chore</button>
    if (this.state.claimed) {
      buttonText = <button className="claimBtns" onClick={this.unclaim.bind(this)}>Unclaim</button>
    }

    let choreInputArea = <div onClick={this.changeToInput.bind(this)} className="ChoreName">
    <p className="choreInputAreaText">{this.props.chore.name}</p></div>

    if (this.state.displayInput) {

      choreInputArea = <form onSubmit={this.handleSubmit.bind(this)}><input type="text"
      ref={(input) => this.name = input}/><button className="editingBtn">Edit chore</button></form>
    }


    return (
      <div className="Chore">
        <div className="itemsLeft">
          <div className="ChoreLeft">
            {checked}
          </div>
        <div className="firstChoreItems">
          <div className="ChoreName">
            {choreInputArea}
          </div>
          <div className="ChoreDueDate">
            <p className="choreDateText">Due Date</p>
              {dateSelected}
          </div>
        </div>
      </div>
      <div className="itemsRight">
        <div className="ChoreRight">
            <div>
              {choreClaimerAvatar}
            </div>
            <div>
              {choreClaimer}
            </div>
            {buttonText}
        </div>
        <div className="trashCan">
          <button className="trashCanBtn" onClick={this.handleClick.bind(this)}>
            <i className="fa fa-trash fa-lg" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
    );
  }
}

export default Chore;
