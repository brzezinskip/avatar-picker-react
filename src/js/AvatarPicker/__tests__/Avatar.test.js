import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from '../Avatar';
import { shallow } from 'enzyme';

// let props;
describe('avatar', () => {
  const onPopupToggledMock = jest.fn();
  let props;
  beforeAll(() => {
    props = {
      avatar: { "src": require("../assets/images/avatar6.png"), "label": "Avatar 6", "id": 10 },
      onPress: onPopupToggledMock ,
      isSelected: false,
      isMainScreenAvatar: false
  }
  })

  it('renders single avatar', () => {
    const wrapper = shallow(<Avatar { ...props }/>);
    expect(wrapper.find('.avatar').length).toBe(1)
  });

  it('sets main-avatar class if avatar is on main screen', () => {
    props.isMainScreenAvatar = true;
    const wrapper = shallow(<Avatar {...props } />);
    expect(wrapper.find('.main-avatar').length).toBe(1);
  })

  it('sets list-avatar class if avatar is on list popup', () => {
    props.isMainScreenAvatar = false;
    const wrapper = shallow(<Avatar {...props } />);
    expect(wrapper.find('.list-avatar').length).toBe(1);
  })

  it('renders border animation if avatar loading and on popup', () => {
    props.avatar.isLoading = true;
    const wrapper = shallow(<Avatar {...props } />);
    expect(wrapper.find('div.border-animation').length).toBe(1);
  })

  it('calls function passed from props on image click', () => {
    const wrapper = shallow(<Avatar {...props } />);
    wrapper.find('img').simulate('click');
    expect(onPopupToggledMock).toBeCalled();
  })
})
