import React, { Component } from 'react';
import Avatar from './Avatar';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import '../../assets/styles/Avatar/AvatarList.css';
import '../../assets/styles/Avatar/AvatarPopup.css';

export default class AvatarPopup extends Component {

  constructor(props) {
    super(props);
    this.state ={
      isOpenedStyle: {},
    }
  }

  componentWillReceiveProps(newProps) {
    this.animation(newProps);
  }

  animation(newProps) {
    let keyframes = `@-webkit-keyframes fadeIn {
          95% { -webkit-transform:transform(3)) }
          100% { -webkit-transform:transform(1)) }
        }`
    const isOpened = newProps.isOpened ?
      {

        opacity: 1,
        transform: 'scale(1)',
        keyframes,
      } :
      {
        // visibility: 'hidden'
      };

      const style = document.createElement('style');
      document.getElementsByClassName('avatar-popup')[0].appendChild(style);
      style.appendChild(document.createTextNode(keyframes));

      this.setState({
        isOpenedStyle: isOpened
      })
  }

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
      <div className="avatar-popup" style={ this.state.isOpenedStyle }>
        <p className="choose-text"> Choose your avatar </p>
        <ul className="avatar-list">
          { avatars }
        </ul>
      </div>
    );
  }
}
