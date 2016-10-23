import React, { Component } from 'react';
import AvatarPopup from './AvatarPopup';
import Avatar from './Avatar';

import '../../assets/styles/Avatar/AvatarPicker.css';

export default class AvatarPicker extends Component {
  constructor(props) {
    super(props);
    this.onAvatarSelected = this.onAvatarSelected.bind(this);
    this.onPopupToggled = this.onPopupToggled.bind(this);
    this.onBlur = this.onBlur.bind(this);

    this.state ={
      activeAvatar: {},
      avatarCopy: {},
      popupOpened: false,
    };
  };

  onBlur(e) {
    this.setState({
      popupOpened: false,
    });
  }

  onAvatarSelected(avatar) {
    avatar.isLoading = true;
    this.setState({
      activeAvatar: avatar,
      avatarCopy: this.state.activeAvatar,
    });

    setTimeout(() => {
      avatar.isLoading = false;
      this.setState({
        activeAvatar: avatar,
        popupOpened: false,
      });
    }, 1000);
  };

  onPopupToggled() {
    this.setState({
      popupOpened: !this.state.popupOpened,
    });
  }

  render() {
    let activeAvatar;
    if (Object.keys(this.state.activeAvatar).length && !this.state.activeAvatar.isLoading) {
      activeAvatar = this.state.activeAvatar;
    } else if (Object.keys(this.state.avatarCopy).length) {
      activeAvatar = this.state.avatarCopy;
    } else {
      activeAvatar = this.props.avatars[0]
    }
    return (
      <div className="avatar-picker">
        <div className="selected-avatar">
          <Avatar
            avatar={ activeAvatar }
            onPress={ this.onPopupToggled }
            isSelected={ this.state.popupOpened }
            isMainScreenAvatar
          />
        </div>
        <AvatarPopup
          avatars={ this.props.avatars }
          onPress={ this.onAvatarSelected }
          isOpened={ this.state.popupOpened }
          onBlur={ this.onBlur }
        />
      </div>
    );
  };
}
