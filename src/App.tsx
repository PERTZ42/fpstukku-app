import React, { useState } from 'react';
import './App.css';
import PopupPlayer from './components/VideoPopup/PopupPlayer';
import Etusivu from './components/Etusivu/etusivu';
import Kalenteri from './components/Kalenteri/kalenteri';
import Leaderboard from './components/Leaderboard/leaderboard';
import Palvelin from './components/Palvelin/palvelin';


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
            <h2> One - The Sex God </h2>
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
            <h2> PERTZ - IT TUKI </h2>
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
          <img className='seize' src={require('./seizethemeans.jpg')} width={300} alt='' />
        </div>
        <PopupPlayer trigger={buttonPopup} setTrigger={setButtonPopup}></PopupPlayer>
      </div>
      <div>
        <a href='https://steamcommunity.com/groups/fitnesstukkufps'>
          <img src={require('./wewantyou.jpg')} width={300} alt='' />
        </a>
      </div>
      <div>
        <a href='https://en.wikipedia.org/wiki/Billy_Herrington'>
          <img src={require('./fight.gif')} width={300} alt='' />
        </a>
      </div>
    </div >
  )
}


function Main(props: any) {
  return (
    <div className='main'>
      {props.children}
    </div>
  )
}


function App() {
  const [etusivu, setEtusivu] = useState(true);
  const [kalenteri, setKalenteri] = useState(false);
  const [leaderboard, setLeaderboard] = useState(false);
  const [tietosuoja, setTietosuoja] = useState(false);
  const [palvelin, setPalvelin] = useState(false);

  function setFalse() {
    setEtusivu(false);
    setKalenteri(false);
    setLeaderboard(false);
    setTietosuoja(false);
    setPalvelin(false);
  }
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div onClick={() => {
            setFalse();
            setEtusivu(true);
          }}> Etusivu </div>
          <div onClick={() => {
            setFalse();
            setKalenteri(true);
          }}> Kalenteri </div>
          <div onClick={() => {
            setFalse();
            setLeaderboard(true);
          }}> Leaderboards </div>
          <div> Sovellukset </div>
          <div onClick={() => {
            setFalse();
            setPalvelin(true);
          }}> Palvelimet </div>
          <div> Info </div>
        </nav >
      </header>

      <div className='sivu'>
        <Main>
          <Kalenteri trigger={kalenteri} setTrigger={setKalenteri}></Kalenteri>
          <Etusivu trigger={etusivu} setTrigger={setEtusivu}></Etusivu>
          <Leaderboard trigger={leaderboard} setTrigger={setLeaderboard}></Leaderboard>
          <Palvelin trigger={palvelin} setTrigger={setPalvelin}></Palvelin>
        </Main>
        <BannerAd></BannerAd>
      </div>
      <Footer></Footer>
    </div >
  )
}

export default App;
