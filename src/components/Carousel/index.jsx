import React, { useState } from "react";
import CarouselButtons from "./CarouselButtons";
/**
 * @description This carousel will have a "Prev" and "Next" button that allows the user to navigate between the different images.
 * This Buttons will be passed through props to CarouselButtons component
 *  The carousel will also loop back to the first image once the user reaches the end.
 */
const Carousel = ({
	imgData,
	showFullImage,
	setShowFullImage,
	imageRoute,
	setImageRoute,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const lastIndex = imgData.length - 1;
		const shouldResetIndex = currentIndex === 0;
		const index = shouldResetIndex ? lastIndex : currentIndex - 1;
		setCurrentIndex(index);
	};

	const nextSlide = () => {
		const lastIndex = imgData.length - 1;
		const shouldResetIndex = currentIndex === lastIndex;
		const index = shouldResetIndex ? 0 : currentIndex + 1;
		setCurrentIndex(index);
	};
	const handleModal = () => {
		setShowFullImage(true);
		setImageRoute(window.location.origin + imgData[currentIndex]);
	};

	return (
		<div>
			<button onClick={handleModal}>
				<img
					src={window.location.origin + imgData[currentIndex]}
					alt="slide"
					className="object-cover desktop:max-w-[600px] desktop:min-w-[600px] desktop:max-h-[500px] desktop:min-h-[500px]  tablet:max-w-[400px] tablet:min-w-[400px] tablet:max-h-[400px] tablet:min-h-[400px] px-3 py-6"
				/>
			</button>
			<CarouselButtons previousSlide={prevSlide} nextSlide={nextSlide} />
		</div>
	);
};

export default Carousel;
