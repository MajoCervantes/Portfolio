import React, { useContext } from "react"
import { motion } from "framer-motion"

//Context
import LanguageContext from "../../context/LanguageContext"

//Styles
import "./cover.css"

//Media
import videoCover from "../../media/videoCover.mp4"
import coverVideoSmaill from "../../media/video-s.mp4"

const Cover = () => {
	const { lang } = useContext(LanguageContext)
	return (
		<div className='cover-container'>
			<video
				className='video'
				src={videoCover}
				autoPlay
				loop
				muted
			/>

			<motion.h1
				initial={{ x: "-1050px" }}
				animate={{
					x: "0",
					transition: {
						delay: 0.5,
						duration: 2,
						ease: "easeIn",
					},
				}}>
				Majo Cervantes
			</motion.h1>
			<motion.div
				className='dev-container'
				initial={{ x: "1050px" }}
				animate={{
					x: "0",
					transition: {
						delay: 0.5,
						duration: 2,
						ease: "easeIn",
					},
				}}>
				<p>
					{`${
						lang
							? "Desarrolladora | Diseñadora | CreadoraDe Contenido"
							: "Web Developer | Deigner | Content Creator"
					}`}
				</p>
			</motion.div>
		</div>
	)
}

export default Cover
