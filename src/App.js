import './App.css';
import Dictionary from './Dictionary.js'

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1>
        <br/>
        <Dictionary />
      </div>
      <br />
        <footer><a href="https://github.com/metvor/dictionary" target="_blank" rel="noreferrer">Open-source code</a> by MV</footer>
    </div>
  );
}

export default App;
