import React, { useState } from 'react';
import './App.css';
import './components/PopupPlayer'
import PopupPlayer from './components/PopupPlayer';


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

function Kalenteri(props: any) {
  return (props.trigger) ? (
    <div className='treenikalenteri'>
      <h1>Treenikalenteri</h1>
      <h4> Tässä näkyy tapahtumat, jotka on lisätty fpstukun™️ google tilille. </h4>
      <iframe title='kalenteri' src="https://calendar.google.com/calendar/embed?height=NaN&wkst=2&ctz=Europe%2FHelsinki&bgcolor=%23ffffff&showTitle=0&showPrint=0&showTz=0&src=ZnBzdHVra3VAZ21haWwuY29t&src=ZmkuZmlubmlzaCNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%230B8043&color=%2333B679"></iframe>
      <p> Kuuluisiko sinulla olla oikeudet muokata fpstukun™️ tapahtumia? Olet väärässä!<br></br> mutta voit lähettää pyynnön discordissa käyttäjälle pertz.</p>
    </div >
  ) : null;
}

function Etusivu(props: any) {
  return (props.trigger) ? (
    <div className='etusivuteksti'>
      <h3> Tämä on fpstukun™️ virallinen verkkosivu ja sen sisältö tulee ottaa kuolettavan vakavasti. </h3>
      <h1> Tervetuloa </h1>
      <iframe height={500} width={800} src="https://www.youtube.com/embed/xf8q0TG7_pE?si=nzQt1TDmKso0qk__&amp;controls=0" title="FPSTUKKU TRAILER"></iframe>
      <h4> Säännöt: </h4>
      <ul>
        <li> Liity <a href='https://steamcommunity.com/groups/fitnesstukkufps'> ryhmään</a>. </li>
        <li> Tästä sivusta ei puhuta. </li>
        <li> Tämän sivuston sisällöstä ei puhuta. </li>
        <li> Kanavat <a href='https://www.youtube.com/channel/UCW-Opd1byUToGjmG5B8exnw'>PERTZ</a> ja <a href='https://www.youtube.com/channel/UCW-Opd1byUToGjmG5B8exnw'>FPSTUKKU</a> tilataan youtubessa. </li>
      </ul>

      <h4> Toivottavasti sivuston tarjoamat palvelut ovat sinulle hyödyksi. 😄 </h4>

      <small> emme ole vastuussa sivuston aiheuttamista mielenterveysongelmista, äitisi kasvavasta mahasta emmekä 9.11.2001 tapahtumista.
        <br></br> ps: tehty isolta osin everstin voimalla.💗 </small>

    </div >
  ) : null;
}

function Tietosuoja(props: any) {
  return (props.trigger) ? (
    <div className='etusivuteksti'>
      <p>
        Sivusto ei kerää sen käyttäjiltä mitään henkilökohtaisia tietoja. Tietysti teknisistärajoituksista johtuen sinun äitisi etunimi, sukunimi, puhelinnumero ja ne videot, jotka teidän smarthome-kamerat ottavat hänen ollessaan suihkussa joudutaan tallentamaan ja mahdollisesti jakamaan <strong>tukun™️</strong> perustajajäsenien kesken.
      </p>
    </div>
  ) : null;
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

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div onClick={() => {
            setEtusivu(true);
            setKalenteri(false);
          }}> Etusivu </div>

          <div onClick={() => {
            setKalenteri(true);
            setEtusivu(false);
          }}> Kalenteri </div>
          <div> Sovellukset </div>
          <div> Palvelimet </div>
          <div> Info </div>
        </nav >
      </header>

      <div className='sivu'>
        <Main>
          <Kalenteri trigger={kalenteri} setTrigger={setKalenteri}></Kalenteri>
          <Etusivu trigger={etusivu} setTrigger={setEtusivu}></Etusivu>
        </Main>
        <BannerAd></BannerAd>

      </div>

      <Footer></Footer>
    </div >

  )
}

export default App;
