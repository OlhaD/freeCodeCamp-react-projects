import * as classes from './App.module.scss';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import DrumPad from './components/DrumPad/DrumPad';
import {setKeyDownKey} from './store/actions/default';

class App extends Component {
  constructor(props){
    super(props);
  }

  onButtonKeyPressed(event){
    this.props.setKeyDownKey(event.key);
  }

  render() {
    return (
      <div className={classes.App} onKeyDown={(e) => this.onButtonKeyPressed(e)} tabIndex="0">
        <header className="App-header">
        </header>
        <main>
          <div className={classes.Container} >            
            <DrumPad />
          </div>
        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pressedKey: state.default.pressedKey
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setKeyDownKey: (key) => dispatch(setKeyDownKey(key))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
