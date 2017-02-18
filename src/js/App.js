import React, { Component } from 'react';
import '../assets/styles/App.css';
import AvatarPicker from './AvatarPicker/AvatarPicker';

const avatars = [
  { "src": require("../assets/images/avatar1.png"), "label": "Test 1", "id": 1 },
  { "src": require("../assets/images/avatar2.png"), "label": "Test 2", "id": 2 },
  { "src": require("../assets/images/avatar3.png"), "label": "Avafar 3", "id": 3 },
  { "src": require("../assets/images/avatar4.png"), "label": "Avatar 4", "id": 4 },
  { "src": require("../assets/images/avatar5.png"), "label": "Avatar 5", "id": 5 },
  { "src": require("../assets/images/avatar6.png"), "label": "Avaatar 6", "id": 6 },
  { "src": require("../assets/images/avatar3.png"), "label": "Avatar 3", "id": 7 },
  { "src": require("../assets/images/avatar4.png"), "label": "Avatar 4", "id": 8 },
  { "src": require("../assets/images/avatar5.png"), "label": "Avatar 5", "id": 9 },
  { "src": require("../assets/images/avatar6.png"), "label": "Avatar 6", "id": 10 },
];

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      avatarsList: avatars, 
    }

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({
      avatarsList: avatars.filter(avatar => 
        avatar.label.includes(event.target.value)
      )
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React avatar picker v1</h2>
        </div>
        <AvatarPicker avatars={ this.state.avatarsList } onInputChange={ this.onInputChange }/>
      </div>
    );
  }
}
//w tym komponencie trzymamycala strukture htmla, A
//AvatarPicker to tag, ktory sami sobie utworzylismy.