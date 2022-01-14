import React, {
	useContext,
	useEffect,
} from "react"
import {
	motion,
	useAnimation,
} from "framer-motion"
import { useInView } from "react-intersection-observer"

//Styles
import "./About.css"

//Context
import LanguageContext from "../../context/LanguageContext"
// import DarkModeContext from "../../context/DarkModeContext"

//Media
import majo from "../../media/majo.jpeg"

//Documents
import CV from "../../documents/CV-Majo-Cervantes.pdf"
import CVeng from "../../documents/CV-Majo-Cervantes-ENG.pdf"

const About = () => {
	const { lang } = useContext(LanguageContext)

	const { ref, inView } = useInView()
	const animation = useAnimation()
	const imgAnimation = useAnimation()

	useEffect(() => {
		console.log(inView)
		if (inView) {
			animation.start({
				x: 0,
				transition: {
					type: "spring",
					duration: 2,
					bounce: 0.1,
				},
			})
		}
		if (!inView) {
			animation.start({
				x: "-100vw",
			})
		}
	}, [inView])

	useEffect(() => {
		if (inView) {
			imgAnimation.start({
				opacity: 1,
				x: 0,
				transition: {
					type: "spring",
					duration: 2.5,
					bounce: 0.1,
					ease: "easeIn",
				},
			})
		}
		if (!inView) {
			imgAnimation.start({
				opacity: 0,
				x: "500px",
			})
		}
	}, [inView])

	return (
		<div className='about-container'>
			<motion.div
				ref={ref}
				className='about-desc'
				animate={animation}>
				<h3>{`${
					lang
						? "Déjame contarte acerca de mi"
						: "Let me tell you something about me"
				}`}</h3>
				<p>
					{`${
						lang
							? "Conocimiento en todos los aspectos del proceso creativo, desde la conceptualización y la planificación hasta la ejecución. Apasionada por el desarrollo de aplicaciones web, enfocada en crear entornos laborales agradables y exigentes, donde pueda contribuir a crear proyectos increíbles a medida de cada cliente gracias a mis habilidades singulares y creativas, a mis conocimientos especializados y a mi sentido de la estética y actitud detallista."
							: "Knowledge of all aspects of the creative process, from conceptualization and planning to execution. Passionate about	web application development, focused on creating pleasant and demanding work environments, where I can contribute to creating incredible projects tailored to each client thanks to my unique and creative skills, my specialized knowledge and my sense of aesthetics and attention to detail."
					}`}
				</p>
				<div className='CV-container'>
					<a
						href={lang ? CV : CVeng}
						target='_blank'
						rel='noreferrer'>
						<motion.i
							initial={{ y: -10 }}
							animate={{
								y: 10,
								transition: {
									duration: 1,
									delay: 2,
									ease: "easeIn",
									repeat: Infinity,
									repeatType: "reverse",
								},
							}}
							className='fa-solid fa-cloud-arrow-down'></motion.i>
						{`${
							lang
								? "Descargar CV"
								: "Download CV"
						} `}
					</a>
				</div>
			</motion.div>
			<div className='about-img'>
				<motion.img
					ref={ref}
					src={majo}
					alt='Majo'
					animate={imgAnimation}
				/>
			</div>
		</div>
	)
}

export default About
