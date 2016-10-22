import React, { Component } from 'react';
import Avatar from './Avatar';

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
        <ul>
          { avatars }
        </ul>
      </div>
    );
  }
}
