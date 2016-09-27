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
      user: {}
    }
    this.handleClick = this.handleClick.bind(this);
    this.authHandler = this.authHandler.bind(this);
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
      console.log(data.user.photoURL)
      console.log(data.user.displayName)
      sessionStorage.setItem('currentUser', JSON.stringify(data.user))
       this.context.router.push('/registration')
    }
  }

  handleClick(event) {
    event.preventDefault();
    base.authWithOAuthPopup('facebook', this.authHandler)
    .then(() => {
      base.post(`housetwo/roommates/${this.state.user.uid}`, {
        data: {
         userName: this.state.user.displayName,
         url: this.state.user.photoURL
        },
        then(err){
          if(!err){
            console.log("beer")
          }
        }
      });
    })
  }

  render() {
    return (
      <div className="App">
        {this.props.children && React.cloneElement(this.props.children, {onLogin: this.handleClick.bind(this), applicationUser: this.state.user})}
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
