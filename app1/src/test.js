import './App.css';
import logo from './img/windmill.png';


function main() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
           Hello World From React
        </p>
      </header>
      <footer className='App-footer'>
        © 2023 Apinun Umbao @KMUTNB:EnET-C
      </footer>
    </div>
  );
}

export default main;
