import React from 'react';
import './App.css';

function Paavalikko() {
  return (
    <nav>
      <a href="."> Etusivu </a>
      <a href="."> Kalenteri </a>
      <a href="."> Palvelimet </a>
      <a href="."> Sovellukset </a>
      <a href='.'> Info </a>
    </nav>
  )
}

function Footer() {
  return (
    <footer>
      <h2> FPSTUKKU </h2>
    </footer>
  )
}

function Kalenteri() {
  return (
    <div className='treenikalenteri'>
      <h3>Treenikalenteri</h3>
      <iframe title='kalenteri' src="https://calendar.google.com/calendar/embed?src=fpstukku%40gmail.com&ctz=Europe%2FHelsinki" width={600} height={600}> </iframe>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Paavalikko></Paavalikko>
        <Kalenteri></Kalenteri>
      </header>


      <Footer></Footer>
    </div >
  )
}

export default App;
