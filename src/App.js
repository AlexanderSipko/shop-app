
import React, { Component } from 'react';
import './App.css';
import Shop from './components/Shop'

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          time:'asdf'
    }
  }

  componentDidMount() {
    // Популярный пример (не забудьте сравнить пропсы):
    this.setState({time:new Date().getFullYear()});
  }

  render () {
    return (
      <div className="App">
        <Shop
          time={this.state.time}
        />
      </div>
    );
  }
}

export default App

