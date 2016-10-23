import React, { Component } from 'react';
import '../../assets/styles/Avatar/Avatar.css';

export default class Avatar extends Component {

  generateLoadingBorder() {
    if (! this.props.isMainScreenAvatar && this.props.avatar.isLoading) {
      return (
        <div
          className='border-animation'
          onClick={ () => this.props.onPress() }
        />
      );
    }
    return null;
  };

  render() {
    const isLoadingBorderStyle = (this.props.avatar.isLoading) ? {
      border: '3px solid transparent',
    } : {};
    return (
      <div
        className={ `avatar ${ this.props.isMainScreenAvatar ? 'main-avatar' : 'list-avatar' }` }
      >
        { this.generateLoadingBorder() }
        <div
          className={ `${ (this.props.isMainScreenAvatar) ? '' : 'overlay' }` }
          style={ isLoadingBorderStyle }
        >
          <img
            className={ `avatar-image ${ this.props.isSelected ? 'main' : 'list' }` }
            src={ this.props.avatar.src }
            alt='avatar'
            onClick={ () => this.props.onPress(this.props.avatar) }
          />
        </div>
      </div>
    );
  }
}
