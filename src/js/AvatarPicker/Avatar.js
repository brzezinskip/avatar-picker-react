import React from 'react';
import '../../assets/styles/Avatar/Avatar.css';

function generateLoadingBorder(props) {
  if (! props.isMainScreenAvatar && props.avatar.isLoading) {
      return (
        <div
          className='border-animation'
          onClick={ () => props.onPress() }
        />
      );
    }
    return null;
}

export default function Avatar(props) {

  const isLoadingBorderStyle = (props.avatar.isLoading) ? {
    border: '3px solid transparent',
  } : {};
  const imageStyles = `avatar-image ${ props.isMainScreenAvatar ?
    'main' : 'list' } ${ props.avatar.isSelected ? 'selected' : ''} `

  return (
    <div
      className={ `avatar ${ props.isMainScreenAvatar ? 'main-avatar' : 'list-avatar' }` }
    >
      { generateLoadingBorder(props) }
      <div
        className={ `${ (props.isMainScreenAvatar) ? '' : 'overlay' } ${ props.avatar.isSelected ? 'selected': '' }` }
        style={ isLoadingBorderStyle }
      >
        <img
          className={ imageStyles }
          src={ props.avatar.src }
          alt='avatar'
          onClick={ () => props.onPress(props.avatar) }
        />
      </div>
    </div>
  );
}
