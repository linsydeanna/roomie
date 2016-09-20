import React, { Component } from 'react';
import SideNav from './SideNav'
import Room from './room/Room';

class DashboardContainer extends Component {
  render() {
    return (
      <div className="DashboardContainer">
        <SideNav />
        <Room />
      </div>
    );
  }
}

export default DashboardContainer;
