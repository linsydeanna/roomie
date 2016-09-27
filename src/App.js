import React, { Component } from 'react';
import './styles/App.css';
import base from './config/base'

class App extends Component {
  getChildContext() {
    return {applicationUser: this.state.user}
  }

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      household: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.authHandler = this.authHandler.bind(this);
  }

  addHouseholdName(event) {
    this.setState({
      household: event.target.value
    })
  }

  authHandler(error, data) {
    if (error) {
      console.log(error)
    } else {
      console.log(data)
      this.setState({
        user: data.user
      })
   // const userAvatar = this.state.user.user.photoURL
     // this.addPhoto()
      sessionStorage.setItem('currentUser', JSON.stringify(data.user))
       this.context.router.push('/registration')
    }
  }

  handleClick(event) {
    event.preventDefault();
    base.authWithOAuthPopup('facebook', this.authHandler)
    .then(() => {
      base.post(`${this.state.household}/roommates/${this.state.user.uid}`, {
        data: {
         userName: this.state.user.displayName,
         url: this.state.user.photoURL
        },
        then(err){
          if(!err){
          }
        }
      });
    })
  }

  render() {
    return (
      <div className="App">
        {this.props.children && React.cloneElement(this.props.children, {onLogin: this.handleClick.bind(this), addHousehold: this.addHouseholdName.bind(this), applicationUser: this.state.user})}
      </div>
    );
  }
}

App.contextTypes = {
 router: React.PropTypes.object.isRequired
}

App.childContextTypes = {
 applicationUser: React.PropTypes.object.isRequired
}

export default App;
