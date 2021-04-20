import React, { Component } from 'react';
import axios from 'axios';

export default class MainPage extends Component {
  state = {};
  render() {
    let hi = axios({
      url: 'http://api.open-notify.org/iss-now.json',
    });
    hi.then((e) => {
      this.setState({ xcoord: e.data.iss_position.latitude, ycoord: e.data.iss_position.longitude });
    });
    console.log(this.state.xcoord, this.state.ycoord);
    return (
      <div>
        <div>
          <h1>Latitude</h1>
          <span>{this.state.xcoord}</span>
          <h1>longitude</h1>
          <span>{this.state.ycoord}</span>
        </div>
        <h3>This is live coordinates of space ship from an api</h3>
      </div>
    );
  }
}
