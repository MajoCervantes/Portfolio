import React, {
	useContext,
	useState,
	useEffect,
} from "react"
import { motion } from "framer-motion"

//Context
import LanguageContext from "../../context/LanguageContext"

//Styles
import "./Navbar.css"

const Navbar = () => {
	const { lang, handleLanguage } = useContext(
		LanguageContext
	)

	const [scrollHeight, setScrollHeight] =
		useState(0)

	const handleScroll = () => {
		const position = window.pageYOffset
		setScrollHeight(position)
	}

	useEffect(() => {
		window.addEventListener(
			"scroll",
			handleScroll
		)
	}, [scrollHeight])

	const toTheTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		})
	}

	const toAbout = () => {
		window.scrollTo({
			top: 575,
			left: 0,
			behavior: "smooth",
		})
	}

	const toProjects = () => {
		window.scrollTo({
			top: 1050,
			left: 0,
			behavior: "smooth",
		})
	}

	const toContact = () => {
		window.scrollTo({
			top: 2073,
			left: 0,
			behavior: "smooth",
		})
	}

	return (
		<motion.nav
			initial={{ x: "-1050px", opacity: 0 }}
			animate={{
				x: 0,
				opacity: 1,
				transition: {
					delay: 0.5,
					duration: 2,
					ease: "easeIn",
				},
			}}
			className={`navbar ${
				scrollHeight > 500 ? "scrolling" : null
			}`}>
			<div className='navbar-logo'>
				<h1 onClick={toTheTop}>Majo Cervantes</h1>

				<div className='section-container'>
					<button onClick={toAbout}>
						{" "}
						{`${lang ? "Acerca" : "About"}`}{" "}
					</button>
					<button onClick={toProjects}>
						{`${lang ? "Proyectos" : "Projects"}`}{" "}
					</button>
					<button onClick={toContact}>
						{`${lang ? "Contacto" : "Contact"}`}{" "}
					</button>
					<button onClick={handleLanguage}>{`${
						!lang ? "ESP" : "ENG"
					}`}</button>
				</div>
				<button
					className='language-button'
					onClick={handleLanguage}>{`${
					!lang ? "ESP" : "ENG"
				}`}</button>
			</div>
		</motion.nav>
	)
}

export default Navbar
