import React, { Component } from 'react';
import SideNav from './SideNav'
import Room from './room/Room';

class DashboardContainer extends Component {
  render() {

    console.log("this.props.params is", this.props.params)
    return (
      <div className="DashboardContainer">
        <SideNav />
        <Room
          room={this.props.params.room}
          key={this.props.params.room}
           />
      </div>
    );
  }
}

export default DashboardContainer;
