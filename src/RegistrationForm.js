//mail rest api; f9050504f168667ea6771a3bc53bc724f4cdea8e

import React, { Component } from 'react';
import './styles/RegistrationForm.css';
import moment from 'moment'
import Rebase from 're-base'
import axios from 'axios'
import {Link} from 'react-router'

const base = Rebase.createClass({
    apiKey: "AIzaSyDnoxYjmFPcZSQWKRNlebHr9n0pkSGOyUw",
    authDomain: "final-project-34471.firebaseapp.com",
    databaseURL: "https://final-project-34471.firebaseio.com",
    storageBucket: "final-project-34471.appspot.com",
  });


class RegistrationForm extends Component {
  constructor() {
    super();
    this.state = {
      urls: [],
      url: {}
    }
  }


  componentDidMount() {
    this.rebaseRef = base.syncState(`housetwo/${this.state.user.user.UID}/url`, {
      context: this,
      state: 'urls',
      asArray: true,
    })
    // console.log("household1", household)
  }

  componentWillUnmount() {
    base.removeBinding(this.rebaseRef)
  }


sendEmail() {
  axios({
    method: 'post',
    url: 'https://api.sparkpost.com/api/v1/transmissions',
    headers: {
    'Authorization': 'f9050504f168667ea6771a3bc53bc724f4cdea8e',
    'Content-Type': 'application/json'
  },
    data: {
        "content": {
        "from": "tiyfinalproject@gmail.com",
        "subject": "Your personal invite to living better!",
        "text": "Click here to view our app"
      },
      recipients: [{ "address": this.refs.roommateEmail }]
   }
 }).then(response => console.log(response))
      console.log("show me the email");

}

// sendEmail() {
//   axios({
//     method: 'post',
//     url: 'https://api.sparkpost.com/api/v1/transmissions',
//     data: {
//       "content": {
//       "from": "tiyfinalproject@gmail.com",
//       "subject": "Your personal invite to living better!",
//       "text": "Click here to view our app"
//     },
//     "recipients": [{ "address": this.refs.roommateEmail }]
//     }
//   })
// }




//   https://api.sparkpost.com/api/v1/transmissions \
//   -H "Authorization: f9050504f168667ea6771a3bc53bc724f4cdea8e" \
//   -H "Content-Type: application/json" \
//   -d '{
//     "content": {
//       "from": "sandbox@sparkpostbox.com",
//       "subject": "Thundercats are GO!!!",
//       "text": "Sword of Omens, give me sight BEYOND sight"
//     },
//     "recipients": [{ "address": "tiyfinalproject@gmail.com" }]
//   }'
// }



  //end of email code



render() {
  return (
    <div className="RegistrationForm">
      <div className="header">
        <h1>Registration Form</h1>
      </div>
      <div className="profileInfo">
        <div className="imageBox">
        <p>Profile Avatar</p>
        <img src={this.state.urls.map((url) => <url url={url} key={url.key}/>)} alt="user avatar"  />
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

    <div className="emailBox">
      <p>Enter new roommates email address and send them an invite</p>
      <input type="text" className="emailInput" placeholder="New roommate" ref="roommateEmail"/>
      <button onClick={() => this.sendEmail()}>Send Email</button>
    </div>



    </div>

  );
 }
}

export default RegistrationForm;
