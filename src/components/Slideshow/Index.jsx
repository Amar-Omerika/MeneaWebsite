/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import Reac, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { AnimatePresence, motion } from "framer-motion";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SliderComponent() {
	//check the size of an screen
	const [screenSize, setScreenSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	useEffect(() => {
		const handleResize = () => {
			setScreenSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<AnimatePresence>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 4500,
					disableOnInteraction: false,
				}}
				// pagination={{
				// 	clickable: true,
				// }}

				navigation={true}
				modules={[Autoplay, Pagination, Navigation, EffectFade]}
				effect="fade"
				className="mySwiper mt-[65px]"
			>
				<SwiperSlide>
					{screenSize.width < 600 ? (
						<img
							className="object-cover w-full h-[500px]"
							src="images/CNCMachiningGrinding/machining12.jpg"
						/>
					) : screenSize.width < 1200 ? (
						<img
							className="object-cover w-full h-[500px] aspect-[3/4]"
							src="images/About/combinedpic.png"
						/>
					) : (
						<img
							className="object-cover w-full h-[500px] aspect-[3/4]"
							src="images/About/combinedpic.png"
						/>
					)}
				</SwiperSlide>
				<SwiperSlide>
					{screenSize.width < 600 ? (
						<img
							className="object-cover w-full h-[500px]"
							src="images/CNCMachiningGrinding/machining2.jpg"
						/>
					) : screenSize.width < 1200 ? (
						<img
							className="object-cover w-full h-[500px]"
							src="images/CNCMachiningGrinding/combinedmachinig.png"
						/>
					) : (
						<img
							className="object-cover w-full h-[500px]"
							src="images/CNCMachiningGrinding/combinedmachinig.png"
						/>
					)}
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="object-cover w-full h-[500px]"
						src="images/SurfaceTreatment/surfacetreatment1.jpg"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="object-cover w-full h-[500px]"
						src="images/QA/Qa3.jpg"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="object-cover w-full h-[500px]"
						src="images/CNCMachiningGrinding/combinedpic1.png"
					/>
				</SwiperSlide>
			</Swiper>
		</AnimatePresence>
	);
}
