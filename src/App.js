import React from 'react';
import './App.css';
import '../node_modules/xterm/css/xterm.css';
import { Terminal } from 'xterm';


export default class App extends React.Component {
  term;
  constructor() {
    super();
  }
  componentDidMount() {
    this.term = new Terminal({cursorBlink: true});
    this.term.open(document.getElementById("terminal"));
    this.term.write("Hello xterm!");
    this.term.onKey(key => {
      const char = key.domEvent.key;
      if (char === "Enter") {
        this.prompt();
      } else if (char === "Backspace") {
        this.term.write("\b \b");
      } else {
        this.term.write(char);
      }
    });
    this.prompt();
  }

  prompt = () => {
    var shellprompt = "$ ";
    this.term.write("\r\n" + shellprompt);
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            xterm.js tests
          </p>
          <div id="terminal" ></div>
        </header>
      </div>
    );
  }
}


