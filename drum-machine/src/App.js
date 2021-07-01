import * as classes from './App.module.scss';
import React, { Component } from 'react';

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
            App
          </div>
        </main>
      </div>
    );
  }
}

export default App;
