/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SliderComponent() {
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 3500,
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
						className="object-fill w-full h-[500px]"
						src="https://zerohourparts.com/wp-content/uploads/person_welding.jpg"
					/>
					<div className="Z-50 mt-[-350px] w-4/5 mb-20 ml-14 flex-col flex h-full">
						<p className=" text-white font-customfont desktop:text-[50px] tablet:text-[25px] desktop:py-2 tablet:py-2 font-bold">
							MECHANICAL
						</p>
						<p className=" text-white font-customfont desktop:text-[50px] tablet:text-[25px] font-bold">
							ENGINEERING
						</p>
						<p className=" text-white font-customfont desktop:text-[20px] tablet:text-sm  font-bold">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
						</p>
						<button
							type="button"
							className="animate-pulse inline-flex items-center  font-customfont w-[120px] h-16 text-center rounded border border-transparent bg-lightBlue px-3.5 py-1.5 text-lg font-medium text-white shadow-sm mt-3"
						>
							Read More
						</button>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="object-fill w-full h-[500px]"
						src="https://www.outsourcinginsight.com/wp-content/uploads/2017/11/Outsource-Engineering.jpg"
					/>
					<div className="Z-50 mt-[-350px] w-4/5 mb-20 ml-14 flex-col flex">
						<p className=" text-white font-customfont desktop:text-[50px] tablet:text-[30px] desktop:py-2  tablet:py-2 font-bold">
							BIM
						</p>
						<p className=" text-white font-customfont desktop:text-[50px] tablet:text-[30px] font-bold">
							SERVICES
						</p>
						<p className=" text-white font-customfont desktop:text-[20px] tablet:text-sm  font-bold">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
						</p>
						<button
							type="button"
							className="animate-pulse inline-flex items-center  font-customfont  w-[120px] h-16 text-center rounded border border-transparent bg-lightBlue px-3.5 py-1.5 text-lg font-medium text-white shadow-sm mt-3"
						>
							Read More
						</button>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="object-fill w-full h-[500px]"
						src="http://www.mckvie.edu.in/wp-content/uploads/2021/06/mechanical-engineering.jpg"
					/>
					<div className="Z-50 mt-[-350px] w-4/5 mb-20 ml-14 flex-col flex">
						<p className=" text-white font-customfont desktop:text-[50px] tablet:text-[30px] desktop:py-2  tablet:py-2 font-bold">
							OUTSOURCED
						</p>
						<p className=" text-white font-customfont desktop:text-[50px] tablet:text-[30px] font-bold">
							ENGINEERING
						</p>
						<p className=" text-white font-customfont desktop:text-[20px] tablet:text-sm  font-bold">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
						</p>
						<button
							type="button"
							className="animate-pulse inline-flex items-center w-[120px] h-16  font-customfont text-center rounded border border-transparent bg-lightBlue px-3.5 py-1.5 text-lg font-medium text-white shadow-sm mt-3"
						>
							Read More
						</button>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
