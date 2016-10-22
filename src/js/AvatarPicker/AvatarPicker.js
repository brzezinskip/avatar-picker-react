import React, { Component } from 'react';
import AvatarPopup from './AvatarPopup';
import Avatar from './Avatar';

import '../../assets/styles/Avatar/AvatarPicker.css';

export default class AvatarPicker extends Component {
  constructor(props) {
    super(props);
    this.onAvatarSelected = this.onAvatarSelected.bind(this);
    this.onPopupOpened = this.onPopupOpened.bind(this);

    this.state ={
      activeAvatar: {},
      popupOpened: false,
    };
  };

  onAvatarSelected(avatar) {
    this.setState({
      activeAvatar: avatar,
      popupOpened: false,
    });
  };

  onPopupOpened() {
    this.setState({
      popupOpened: !this.state.popupOpened,
    });
  }

  render() {
    const activeAvatar = Object.keys(this.state.activeAvatar).length ?
      this.state.activeAvatar : this.props.avatars[0]
    return (
      <div className="avatar-picker">
        <div className="selected-avatar">
          <Avatar
            avatar={ activeAvatar }
            onPress={ this.onPopupOpened }
          />
        </div>
        <AvatarPopup
          avatars={ this.props.avatars }
          onPress={ this.onAvatarSelected }
          isOpened={ this.state.popupOpened }
        />
      </div>
    );
  };
}
