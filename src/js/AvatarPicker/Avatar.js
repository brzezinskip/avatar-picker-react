import React, { Component } from 'react';
import '../../assets/styles/Avatar.css';

export default class Avatar extends Component {
  constructor(props) {
    super(props);
    console.log(props.avatar);
  }

  render() {
    return (
      <li className="avatar">
        <img className="avatar-image" src={this.props.avatar.src} alt='avatar'/>
      </li>
    );
  }
}
