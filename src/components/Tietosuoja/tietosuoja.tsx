import './tietosuoja.css'

function Tietosuoja(props: any) {
	return (props.trigger) ? (
		<div className='etusivuteksti'>
			<p>
				Sivusto ei kerää sen käyttäjiltä mitään henkilökohtaisia tietoja. Tietysti teknisistärajoituksista johtuen sinun äitisi etunimi, sukunimi, puhelinnumero ja ne videot, jotka teidän smarthome-kamerat ottavat hänen ollessaan suihkussa joudutaan tallentamaan ja mahdollisesti jakamaan <strong>tukun™️</strong> perustajajäsenien kesken.
			</p>
		</div>
	) : null;
}

export default Tietosuoja
