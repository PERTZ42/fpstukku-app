import React from "react";
import './palvelin.css'

function Palvelin(props: any) {
	return (props.trigger) ? (
		<div>
			<img src={require('../../palvelinarkkitehtuuri.png')} alt=''></img>
		</div >
	) : null;
}

export default Palvelin
