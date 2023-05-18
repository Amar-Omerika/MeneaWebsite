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
	const variants = {
		item: {
			initial: {
				opacity: 0,
			},
			animate: {
				opacity: 1,
				transition: {
					duration: 0.4,
					when: "beforeChildren",
					staggerChildren: 0.1,
				},
			},
		},
		items: {
			initial: {
				opacity: 0,
				transform: "translateY(-30%)",
			},
			animate: {
				opacity: 1,
				transform: "translateY(0%)",
				transition: {
					duration: 0.6,
				},
			},
		},
	};

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
						src="images/PackagingLogistics/Logistics.jpg"
					/>
					{/* <motion.div variants={variants.item} initial="initial" animate="animate" className="Z-50 mt-[-350px] w-4/5 mb-20 ml-14 flex-col flex justify-between min-h-[250px] ">
						<motion.p variants={variants.items} initial="initial" animate="animate" className=" text-white font-customfont text-3xl font-bold">
							MECHANICAL
						</motion.p>
						<motion.p variants={variants.items} initial="initial" animate="animate" className=" text-white font-customfont text-3xl font-bold">
							ENGINEERING
						</motion.p>
						<motion.p variants={variants.items} initial="initial" animate="animate" className=" text-white font-customfont desktop:text-[20px] tablet:text-sm  font-bold">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
						</motion.p>
						<button
							type="button"
							className="animate-pulse hover:animate-none inline-flex items-center justify-center font-customfont w-[120px] h-16 text-center rounded border border-transparent bg-logoBlue px-3.5 py-1.5 text-lg font-medium text-white shadow-sm mt-3"
						>
							Read More
						</button>
					</motion.div> */}
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="object-cover w-full h-[500px]"
						src="images/About/about4.jpg"
					/>
					{/* <div className="Z-50 mt-[-350px] w-4/5 mb-20 ml-14 flex-col flex justify-between min-h-[250px] ">
						<p className=" text-white font-customfont text-3xl font-bold">
							BIM
						</p>
						<p className=" text-white font-customfont text-3xl font-bold">
							SERVICES
						</p>
						<p className=" text-white font-customfont desktop:text-[20px] tablet:text-sm  font-bold">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
						</p>
						<button
							type="button"
							className="animate-pulse hover:animate-none inline-flex items-center justify-center font-customfont  w-[120px] h-16 text-center rounded border border-transparent bg-logoBlue px-3.5 py-1.5 text-lg font-medium text-white shadow-sm mt-3"
						>
							Read More
						</button>
					</div> */}
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="object-cover w-full h-[500px]"
						src="images/Engineering/engineering1.jpg"
					/>
					{/* <div className="Z-50 mt-[-350px] w-4/5 mb-20 ml-14 flex-col flex justify-between min-h-[250px] ">
						<p className=" text-white font-customfont text-3xl font-bold">
							OUTSOURCED
						</p>
						<p className=" text-white font-customfont text-3xl font-bold">
							ENGINEERING
						</p>
						<p className=" text-white font-customfont desktop:text-[20px] tablet:text-sm  font-bold">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
						</p>
						<button
							type="button"
							className="animate-pulse hover:animate-none inline-flex items-center justify-center w-[120px] h-16  font-customfont text-center rounded border border-transparent bg-logoBlue px-3.5 py-1.5 text-lg font-medium text-white shadow-sm mt-3"
						>
							Read More
						</button>
					</div> */}
				</SwiperSlide>
			</Swiper>
		</AnimatePresence>
	);
}
