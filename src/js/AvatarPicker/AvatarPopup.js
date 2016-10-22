import React, { Component } from 'react';
import Avatar from './Avatar';

import '../../assets/styles/Avatar/AvatarList.css';

export default class AvatarPopup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const avatars = this.props.avatars.map(avatar =>
      <Avatar avatar={ avatar } key={ avatar.id }/>
    );
    return (
      <div className="avatar-popup">
        <ul className="avatar-list">
          { avatars }
        </ul>
      </div>
    );
  }
}
