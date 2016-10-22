import React, { Component } from 'react';
import AvatarPopup from './AvatarPopup';

export default class AvatarPicker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="avatar-picker">
        <h1>this is my avatar picker component</h1>
        <AvatarPopup avatars={ this.props.avatars }/>
      </div>
    );
  }
}
