import * as classes from './App.module.scss';
import PomodoroPage from './views/pomodoro/PomodoroPage';

function App() {
  return (
    <div className={classes.App}>
      <PomodoroPage />
    </div>
  );
}

export default App;
