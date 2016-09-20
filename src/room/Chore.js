import React, { Component } from 'react';

class Chore extends Component {
  render() {
    return (
      <div className="Chore">
        <div className="ChoreLeft">
          <div className="ChoreName">
            <p>Clean table surfaces</p>
          </div>
          <div className="Frequency">
            <p>Once a week</p>
          </div>
        </div>
        <div className="Avatar">
          PHOTO
        </div>
      </div>
    );
  }
}

export default Chore;
