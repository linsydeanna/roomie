import React, { Component } from 'react';
import './styles/RegistrationForm.css';
import moment from 'moment'
import Rebase from 're-base'
import {hashHistory, Link} from 'react-router'

const base = Rebase.createClass({
    apiKey: "AIzaSyDnoxYjmFPcZSQWKRNlebHr9n0pkSGOyUw",
    authDomain: "final-project-34471.firebaseapp.com",
    databaseURL: "https://final-project-34471.firebaseio.com",
    storageBucket: "final-project-34471.appspot.com",
  });


class RegistrationForm extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     userID: '',
  //     userInfo: {}
  //   }
  // }
  //
  // componentDidMount() {
  //   this.rebaseRef = base.syncState('userInfo', {
  //     context: this,
  //     state: 'userInfo',
  //   })
  // }
  //
  // componentWillUnmount() {
  //   base.removeBinding(this.rebaseRef)
  // }
  // handleClick(event) {
  //   event.preventDefault();
  //   console.log("Is button working")
  //   this.addUserInfo();
  //   console.log("Does addUserInfo work")
  // }
  //
  // addUserInfo() {
  //   event.preventDefault()
  //   console.log("Adding UserInfo to FireBase")
  //   let preCInput = this.refs.preferredInput
  //   let lCInput = this.refs.leastInput
  //   let peeInput = this.refs.peevesInput
  //   let addedUserInfo = input.value
  //   let userInfo = this.state.userInfo
  //   this.setState({
  //     userInfo: userInfo.concat([addedUserInfo])
  //   })
  // }
  //
  //



render() {
  return (
    <div className="RegistrationForm">
      <div className="header">
        <h1>Registration Form</h1>
      </div>
      <div className="profileInfo">
        <div className="imageBox">
        <p>Profile Avatar</p>
        <img src={localStorage.fbAvatar} />
        </div>
        <p>Date of move-in:</p>
          <input
               id="changeStarting"
               min={moment().format('YYYY-MM-DD')}
               type="date"
               className="ui-input"
               onChange={(e) => this.setState({
                 starting: moment(e.target.value),
                 currentlyChoosing: null,
               })}
             />
        <p>Most perferred chores:</p>
        <input type="text" className="answerBox" placeholder="Enter Answer"ref="preferredInput"/>
        <p>Least perferred chores:</p>
        <input type="text" className="answerBox" placeholder="Enter Answer"ref="leastInput"/>
        <p>Pet peeves:</p>
        <input type="text" className="answerBox" placeholder="Enter Answer"ref="peevesInput"/>
      </div>
      <Link to="/dashboard">
      <div className="submitBtn">
        <button onClick={this.handleClick}>Submit</button>
      </div>
    </Link>
    </div>

  );
 }
}

export default RegistrationForm;
