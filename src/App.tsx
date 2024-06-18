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
      <h2> FPSTUKKU - WALL OF SHAME </h2>

      <div className='tiedot'>
        <div className='one'>
          <div>
            <img src={require('./one200x200.png')} alt='' />
          </div>
          <div>
            <h4> One - The Sex God </h4>
            <a href='https://www.instagram.com/oskuisokangas_/'> Instagram </a>
            <a href='https://www.youtube.com/@oaxyoaxy'> Youtube </a>
          </div>
        </div>

        <div className='pertz'>
          <div>
            <img src={require('./pertz200x200.png')} alt='' />
          </div>
          <div>
            <h4> PERTZ - IT TUKI </h4>
            <a href='https://github.com/PERTZ42'> GitHub </a>
            <a href='https://www.youtube.com/channel/UCW-Opd1byUToGjmG5B8exnw'> Youtube </a>
          </div>
        </div>
      </div>
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
