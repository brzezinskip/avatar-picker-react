import React, { Component } from 'react';
import Avatar from './Avatar';

import '../../assets/styles/Avatar/AvatarList.css';
import '../../assets/styles/Avatar/AvatarPopup.css';

export default class AvatarPopup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const avatars = this.props.avatars.map(avatar =>
      <li className="avatar" key={ avatar.id }>
        <Avatar avatar={ avatar } />
      </li>
    );
    return (
      <div className="avatar-popup">
        <p className="choose-text"> Choose your avatar </p>
        <ul className="avatar-list">
          { avatars }
        </ul>
      </div>
    );
  }
}
