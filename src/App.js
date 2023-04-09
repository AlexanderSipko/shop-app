
import React, { Component } from 'react';
import './App.css';
import { API_KEY, API_URL } from './config'; 
import Shop from './components/Shop'

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          userName: "Adam",
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
          api_key={API_KEY}
          api_url={API_URL}
          user={this.state.userName}
          time={this.state.time}
        />
      </div>
    );
  }
}

export default App

