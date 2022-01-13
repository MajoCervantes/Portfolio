import React, { useContext } from "react"

//Context
import LanguageContext from "../../context/LanguageContext"

//Styles
import "./Info.css"

const Info = () => {
	const { lang } = useContext(LanguageContext)

	return (
		<div className='info-container'>
			<div className='info'>
				<h1>
					{`${
						lang
							? "Trabajemos juntos y creemos algo único"
							: "Let's work together and create something unique"
					}`}
				</h1>
			</div>
		</div>
	)
}

export default Info
