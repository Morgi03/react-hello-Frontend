import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

interface State {
  datum: Date;
}

class App extends Component<{}, State> {

  constructor(props: {}) {
    super(props);

    this.state = {
      datum: new Date()
    }
  }


  render(): React.ReactNode {
    return <p id="hello">{ this.state.datum.toLocaleString() }</p>;
  }
}

export default App;
