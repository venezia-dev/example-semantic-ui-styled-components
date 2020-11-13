import logo from './logo.svg';
import './App.css';
import Test from './components/test';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>Probando Semantic UI con Styled Components</code>
        </p>
        <Test />
      </header>
    </div>
  );
}

export default App;
