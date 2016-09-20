import React, { Component } from 'react';
import './styles/RegistrationForm.css';

class RegistrationForm extends Component {

render() {
  return (
    <div className="RegistrationForm">
      <div className="header">
        <h1>Registration Form</h1>
      </div>
      <div className="profileInfo">
        <div className="imageBox">
        <p>Upload picture or import from Facebook</p>
        <input type="text" className="imageUpload" placeholder="Select Image"/>
        </div>
        <p>Date of move-in:</p>
      </div>


    </div>
  );
 }
}

export default RegistrationForm;
