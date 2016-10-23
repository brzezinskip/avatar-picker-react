import React, { Component } from 'react';
import Avatar from './Avatar';

import '../../assets/styles/Avatar/AvatarList.css';
import '../../assets/styles/Avatar/AvatarPopup.css';

export default class AvatarPopup extends Component {

  constructor(props) {
    super(props);
    this.clickOutsideElement = this.clickOutsideElement.bind(this);
  }

  componentDidMount() {
    window.__app_container.addEventListener('click', this.clickOutsideElement)
  }

  clickOutsideElement(e) {
    const popup = this.refs.popup;

    if (!popup.contains(e.target) && this.props.isOpened) {
      this.props.onBlur()
    }
  }

  render() {

    const avatars = this.props.avatars.map(avatar =>
      <li className="avatar list-avatar" key={ avatar.id }>
        <Avatar
          avatar={ avatar }
          onPress={ this.props.onPress }
          isSelected={ false }
          isMainScreenAvatar={ false }
        />
      </li>
    );

    return (
      <div ref='popup' className={`avatar-popup ${ this.props.isOpened? 'show' : 'hide' }`} >
        <p className="choose-text"> Choose your avatar </p>
        <ul className="avatar-list">
          { avatars }
        </ul>
      </div>
    );
  }
}
