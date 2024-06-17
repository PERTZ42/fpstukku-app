import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div><a href="Home#"> Etusivu </a></div>
          <div><a href=""> Info </a></div>
        </nav>
        <div className='jakaja'>
          <div className='tekstialue'>
            <h3>Tekstialue</h3>
          </div>
          <div className='treenikalenteri'>
            <h3>Treenikalenteri</h3>
            <iframe className='kalenteri' src="https://calendar.google.com/calendar/embed?src=fpstukku%40gmail.com&ctz=Europe%2FHelsinki" width={600} height={600}></iframe>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
