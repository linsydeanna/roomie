import React, {Component} from 'react';
import './styles/Login.css';
import base from './config/base'
import './styles/App.css';


class Login extends Component {
 constructor(props) {
   super(props);
   this.state = {
     user: ''
   }
   this.handleClick = this.handleClick.bind(this);
   this.authHandler = this.authHandler.bind(this);
 }

 authHandler(error, user) {
   if (error) {
     console.log(error)
   } else {
     console.log(user)
      this.context.router.push('/registration')
   }

 }

 handleClick(event) {
   event.preventDefault();
   base.authWithOAuthPopup('facebook', this.authHandler)
   // rebase method that authenticates a user using an
   // OAuth popup. Also, takes in an Auth provider and handler

 }

 render() {
   return (
     <div className="Login">
     <button className="loginBtn" onClick={this.handleClick}>Sign in with Facebook</button>
   </div>
  );
}
}
Login.contextTypes = {
 router: React.PropTypes.object.isRequired
}

export default Login;
