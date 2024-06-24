import React from 'react'
import './etusivu.css'

function Etusivu(props: any) {
	return (props.trigger) ? (
		<div className='etusivuteksti'>
			<h3> Tämä on fpstukun™️ virallinen verkkosivu ja sen sisältö tulee ottaa kuolettavan vakavasti. </h3>
			<h1> Tervetuloa </h1>
			<iframe src="https://www.youtube.com/embed/xf8q0TG7_pE?si=nzQt1TDmKso0qk__&amp;controls=0" title="FPSTUKKU TRAILER"></iframe>
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

export default Etusivu
