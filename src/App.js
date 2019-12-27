import React, { Component } from 'react';
import Input from './User/UserInput';
import Output from './User/UserOutput';
import './App.css';
import './User/User.css';

class App extends Component {
  state = {
    userName: 'MinhMai90'
  };

  changeName = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>This application take and display user's input</h1>
        <div className='User'>
          <Input changed={this.changeName} />
          <Output text='The user name is: ' userName={this.state.userName} />
          <Output />
          <Output />
        </div>
      </div>
    );
  }
}

export default App;
