import * as classes from './App.module.scss';
import Calculator from './components/Calculator/Calculator';

function App() {
  String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
  }

  return (
    <div className={classes.App}>
      <Calculator />
    </div>
  );
}

export default App;
