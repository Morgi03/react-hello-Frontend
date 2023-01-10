import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

interface State {
  datum: Date;
  dobas: number;
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      datum: new Date(),
      dobas: 0,
    };

    setInterval(() => {
      this.setState({
        datum: new Date(),
      });
    }, 1000);
  }

  kockadobas = () => {
    const ujSzam = Math.floor(Math.random() * 6 + 1);
    this.setState({
      dobas: ujSzam
    })
  }

  render(): React.ReactNode {
    return (
      <div>
        <p id="hello" style={{
          fontStyle: 'italic',
          color:"limegreen",
        }}>
          {this.state.datum.toLocaleString()}</p>
        <p className="kockadobas">Kockadobás eredménye: {this.state.dobas }</p>
        <button onClick={this.kockadobas}>Kockadobás</button>
      </div>
    );
  }
}

export default App;
