import * as classes from './App.module.scss';
import React, { Component } from 'react';
import DrumPad from './components/DrumPad/DrumPad';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className={classes.App}>
        <header className="App-header">
        </header>
        
        <main>
          <div className={classes.Container}>            
            <DrumPad />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
