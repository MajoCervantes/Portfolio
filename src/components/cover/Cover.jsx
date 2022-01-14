import React, { useContext } from "react"

//Context
import LanguageContext from "../../context/LanguageContext"

//Styles
import "./cover.css"

//Media
import videoCover from "../../media/videoCover.mp4"
import coverVideoSmaill from "../../media/video-s.mp4"

const Cover = () => {
	const { lang } = useContext(LanguageContext)

	return lang ? (
		<div className='cover-container'>
			<video
				className='video'
				src={videoCover}
				autoPlay
				loop
				muted
			/>

			<h1>Majo Cervantes</h1>
			<p>
				Desarrolladora | Diseñadora | Creadora De
				Contenido
			</p>
		</div>
	) : (
		<div className='cover-container'>
			<video
				className='video'
				src={videoCover}
				autoPlay
				loop
				muted
			/>
			<h1>Majo Cervantes</h1>
			<p>
				Web Developer | Designer | Content Creator
			</p>
		</div>
	)
}

export default Cover
