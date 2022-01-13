import React, {
	createContext,
	useState,
} from "react"

const LanguageContext = createContext()

const LanguageProvider = ({ children }) => {
	const [lang, setLang] = useState(true)

	const handleLanguage = () => setLang(!lang)

	const data = { lang, handleLanguage }

	return (
		<LanguageContext.Provider value={data}>
			{children}
		</LanguageContext.Provider>
	)
}

export { LanguageProvider }
export default LanguageContext
