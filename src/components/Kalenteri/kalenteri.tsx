import React from 'react'
import './kalenteri.css'

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


export default Kalenteri
