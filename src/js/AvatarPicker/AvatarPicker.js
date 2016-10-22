import React, { Component } from 'react';
import AvatarPopup from './AvatarPopup';
import Avatar from './Avatar';

import '../../assets/styles/Avatar/AvatarPicker.css';

export default class AvatarPicker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="avatar-picker">
        <div className="selected-avatar">
          <Avatar avatar={ this.props.avatars[0] } />
        </div>
        <AvatarPopup avatars={ this.props.avatars }/>
      </div>
    );
  }
}
