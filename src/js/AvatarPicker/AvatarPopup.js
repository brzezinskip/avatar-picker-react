import React, { Component } from 'react';
import Avatar from './Avatar';
import { pulse } from 'react-animations'

import '../../assets/styles/Avatar/AvatarList.css';
import '../../assets/styles/Avatar/AvatarPopup.css';

export default class AvatarPopup extends Component {

  render() {

    const avatars = this.props.avatars.map(avatar =>
      <li className="avatar" key={ avatar.id }>
        <Avatar
          avatar={ avatar }
          onPress={ this.props.onPress }
        />
      </li>
    );
    return (
      <div className={`avatar-popup ${ this.props.isOpened? 'show' : '' }`} style={ pulse }>
        <p className="choose-text"> Choose your avatar </p>
        <ul className="avatar-list">
          { avatars }
        </ul>
      </div>
    );
  }
}
