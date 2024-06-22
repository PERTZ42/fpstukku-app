import React from "react";

function Palvelin(props: any) {
	return (props.trigger) ? (
		<div>
			<img src={require('../../palvelinarkkitehtuuri.png')} alt=''></img>
		</div >
	) : null;
}

export default Palvelin
