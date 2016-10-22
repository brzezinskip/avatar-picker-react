import React, { Component } from 'react';
import '../../assets/styles/Avatar/Avatar.css';

export default class Avatar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img className="avatar-image" src={this.props.avatar.src} alt='avatar'/>
    );
  }
}
