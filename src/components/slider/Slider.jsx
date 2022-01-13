import React, { useContext } from "react"

//Context
import LanguageContext from "../../context/LanguageContext"

//Carousel
import Carousel, {
	slidesToShowPlugin,
} from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

//Components
import Slides from "./Slides"
import SlidesEng from "./SlidesEng"

//Styles
import "./Slider.css"

const Slider = () => {
	const { lang } = useContext(LanguageContext)

	const carouselImgs = lang ? Slides : SlidesEng

	return (
		<>
			<div className='carousel-container'>
				<div className='carousel-title'>
					<h2>{`${
						lang ? "Mis Proyectos" : "My Pojects"
					}`}</h2>
				</div>

				<Carousel
					plugins={[
						"centered",
						"infinite",
						"arrows",
						{
							resolve: slidesToShowPlugin,
							options: {
								numberOfSlides: 2,
							},
						},
					]}
					offset={30}
					itemWidth={350}
					slides={carouselImgs}
					breakpoints={{
						640: {
							plugins: [
								"arrows",
								"centered",
								"infinite",
								{
									resolve: slidesToShowPlugin,
									options: {
										numberOfSlides: 1,
									},
								},
							],
						},
						900: {
							plugins: [
								{
									resolve: slidesToShowPlugin,
									options: {
										numberOfSlides: 2,
									},
								},
							],
						},
					}}
				/>
			</div>
		</>
	)
}

export default Slider
