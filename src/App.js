
import React, { Component } from 'react';
import './App.css';
import Shop from './components/Shop'
import {ContextProvider} from './context'

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
          <ContextProvider>
            <Shop
                time={this.state.time}
              />
          </ContextProvider>
        </div>
    );
  }
}

export default App

