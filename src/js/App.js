import React, { Component } from 'react';
import '../assets/styles/App.css';
import AvatarPicker from './AvatarPicker/AvatarPicker';

const avatars = [
  { "src": "../assets/images/avatar1.png", "label": "Avatar 1", "id": 1 },
  { "src": "../assets/images/avatar2.png", "label": "Avatar 2", "id": 2 },
  { "src": "../assets/images/avatar3.png", "label": "Avatar 3", "id": 3 },
  { "src": "../assets/images/avatar4.png", "label": "Avatar 4", "id": 4 },
  { "src": "../assets/images/avatar5.png", "label": "Avatar 5", "id": 5 },
  { "src": "../assets/images/avatar6.png", "label": "Avatar 6", "id": 6 },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React avatar picker</h2>
        </div>
        <AvatarPicker avatars={ avatars }/>
      </div>
    );
  }
}

export default App;
