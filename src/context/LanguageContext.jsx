import React, {
	createContext,
	useState,
} from "react"

const LanguageContext = createContext()

const LanguageProvider = ({ children }) => {
	const [lang, setLang] = useState(true)

	const handleLanguage = () => setLang(!lang)

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	)
}

export { LanguageProvider }
export default LanguageContext
