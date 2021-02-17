import React, { Component } from 'react';
import Size from './components/Size';
import './App.css';

class App extends Component {
  state = {
    step: 1,
    size: ''
  }
  render(){
    return (
      <div className="App">
        <Size size={this.state.size} />
      </div>
    );
  }
}

export default App;
