import React from 'react'
import './popupplayer.css'

function PopupPlayer(props: any) {
	return (props.trigger) ? (
		<div className='video-popup'>
			<div className='button'>
				<button onClick={() => props.setTrigger(false)}> X </button>
			</div>
			<div className='popup-inner'>
				<iframe width="1200" height="800" src="https://www.youtube.com/embed/jwsoT2diqSc?si=vFn-PtFKdKy3OqIN&autoplay=1;controls=0" title="YouTube video player"></iframe>
			</div>
		</div >
	) : null;
}

export default PopupPlayer
