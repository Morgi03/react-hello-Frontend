import React, { ChangeEvent, Component } from "react";
import "./App.css";

interface State {
  datum: Date;
  dobas: number;
  meret: number;
  szin: string;
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      datum: new Date(),
      dobas: 0,
      meret:  14,
      szin: '#FFFFFF'
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

  betumeret = (e: ChangeEvent) => {
    let ujMeret =  parseInt((e.currentTarget as HTMLInputElement).value);
    this.setState({
      meret: ujMeret
    })
  }
  hatter = (e: ChangeEvent) => {
    let ujhatter = (e.currentTarget as HTMLInputElement).value;
    this.setState({
      szin: ujhatter
    })
  }

  render(): React.ReactNode {
    return (
      <body style={{ backgroundColor: this.state.szin }}>
      <div style={{ fontSize: this.state.meret+'pt'}}>
        <p id="hello" style={{
          fontStyle: 'italic',
          color:"limegreen",
        }}>
          {this.state.datum.toLocaleString()}</p>
        <p className="kockadobas">Kockadobás eredménye: {this.state.dobas }</p>
        <button onClick={this.kockadobas}>Kockadobás</button><br /><br />
        <input type='number' value={this.state.meret} onChange={this.betumeret}/><br /><br />
        <input type='color' value={this.state.szin} onChange={this.hatter} />
      </div>
      </body>
    );
  }
}

export default App;
