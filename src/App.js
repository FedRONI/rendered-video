import React from 'react';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <body>
        <div className="App-container">
          <div className="App-player"></div>
          <div className="App-footer">
            <div className="App-info">
              тут то шо надо вставь блин
            </div>
            <div class="container">
		            <div class="btn"><a href="#" >Map</a></div>
	            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
