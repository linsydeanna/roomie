import React, {Component} from 'react';
import './styles/Login.css';
import './styles/App.css';

class Login extends Component {
 render() {
    return (
      <div className="Login">
        <button className="loginBtn" onClick={this.props.onLogin}>Sign in with Facebook</button>
      </div>
    );
  }
}

export default Login;
