/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { AnimatePresence, motion } from "framer-motion";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SliderComponent() {
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
					<img
						className="object-cover w-full h-[500px]"
						src="images/About/combinedpic.png"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="object-cover w-full h-[500px]"
						src="images/PackagingLogistics/Logistics.jpg"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="object-cover w-full h-[500px]"
						src="images/About/about4.jpg"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="object-cover w-full h-[500px]"
						src="images/Engineering/engineering1.jpg"
					/>
				</SwiperSlide>
			</Swiper>
		</AnimatePresence>
	);
}
