import React, { useState } from 'react';
import './App.css';
import './components/PopupPlayer'
import PopupPlayer from './components/PopupPlayer';


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
      <h2> FPSTUKKU - Wall of Shame </h2>

      <div className='tiedot'>
        <div className='one'>
          <div>
            <img src={require('./one200x200.png')} alt='' />
          </div>
          <div>
            <h4> One - The Sex God </h4>
            <a href='https://www.instagram.com/oskuisokangas_/'> 📸Instagram </a>
            <a href='https://www.youtube.com/@oaxyoaxy'> 🎞️Youtube </a>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'> 🍆Nudes </a>
          </div>
        </div>

        <div className='pertz'>
          <div>
            <img src={require('./pertz200x200.png')} alt='' />
          </div>
          <div>
            <h4> PERTZ - IT TUKI </h4>
            <a href='https://github.com/PERTZ42'> 🛠️GitHub </a>
            <a href='https://www.youtube.com/channel/UCW-Opd1byUToGjmG5B8exnw'> 🎞️Youtube </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function BannerAd() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className='ads'>
      <div>
        <div className='open' onClick={() => {
          return setButtonPopup(true);
        }}>
          <img src={require('./seizethemeans.jpg')} width={300} alt='' />
        </div>
        <PopupPlayer trigger={buttonPopup} setTrigger={setButtonPopup}></PopupPlayer>
      </div>
      <div>
        <a href='https://en.wikipedia.org/wiki/Billy_Herrington'>
          <img src={require('./fight.gif')} width={300} alt='' />
        </a>
      </div>
      <div>
        <a href='https://steamcommunity.com/groups/fitnesstukkufps'>
          <img src={require('./wewantyou.jpg')} width={300} alt='' />
        </a>
      </div>
    </div >
  )
}

function Kalenteri() {
  return (
    <div className='treenikalenteri'>
      <h3>Treenikalenteri</h3>
      <iframe title='kalenteri' src="https://calendar.google.com/calendar/embed?height=NaN&wkst=2&ctz=Europe%2FHelsinki&bgcolor=%23ffffff&showTitle=0&showPrint=0&showTz=0&src=ZnBzdHVra3VAZ21haWwuY29t&src=ZmkuZmlubmlzaCNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%230B8043&color=%2333B679"></iframe>
    </div >
  )
}

function Etusivu() {
  return (
    <div>
      <h1> Tervetuloa </h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Paavalikko></Paavalikko>
      </header>

      <div className='sivu'>
        <div className='main'>
          <Kalenteri></Kalenteri>
        </div>

        <BannerAd></BannerAd>

      </div>

      <Footer></Footer>
    </div >
  )
}

export default App;
