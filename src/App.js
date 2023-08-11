import logo from './logo.svg';
import './App.css';
import ExerciseComponent from './components/ExerciseComponent';
import NavBar from './components/nav.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ExerciseComponent />
      </header>
    </div>
  );
}

export default App;
