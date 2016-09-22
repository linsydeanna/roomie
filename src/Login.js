import React, {Component} from 'react';
import './styles/Login.css';
import base from './config/base'
import './styles/App.css';
import Rebase from 're-base'


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
     this.setState({
       user: user
     })
     console.log("is setState working", this.state)
  // const userAvatar = this.state.user.user.photoURL
    // this.addPhoto()

     console.log(user.user.photoURL)
      this.context.router.push('/registration')

   }
 }


 handleClick(event) {
   event.preventDefault();
   console.log("working")
   base.authWithOAuthPopup('facebook', this.authHandler)
   .then(() => {
     base.post(`housetwo/roommates/${this.state.user.user.uid}`, {
       data: {
        userName: this.state.user.user.displayName,
        url: this.state.user.user.photoURL
       },
       then(err){
         if(!err){
           console.log("beer")
         }
       }
     });
   })
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
