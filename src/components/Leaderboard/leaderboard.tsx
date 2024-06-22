import React from "react";
import './leaderboard.css'

function Leaderboard(props: any) {
	return (props.trigger) ? (
		<div>
			<h1> Leetify </h1>
		</div>
	) : null;
}



export default Leaderboard
