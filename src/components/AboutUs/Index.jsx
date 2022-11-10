/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

export default function AboutUs() {

	return (
		<div className="font-customfont max-w-[1440px] mx-auto space-y-6 py-16 bg-white">
			<h1 className="font-bold desktop:text-[100px] text-[50px] text-center text-gray animate-in fade-in-25">
				About Us
			</h1>
			<div className="m-auto px-12 text-gray-600 xl:px-12">
				<div className="space-y-6 flex justify-between flex-col-reverse md:flex-row md:space-y-0 gap-6 lg:items-center lg:gap-14">
						<img className="hidden tablet:inline-block shadow-md shadow-[#333] md:w-1/2 object-cover"
							src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
							alt="image"
							loading="lazy"
						/>
					<div className="md:w-1/2 self-start">
						<h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
							Lorem ipsum dolor sit amet.
						</h2>
						<p className="mt-6 text-gray-600">
            Menea AB is a Swedish sourcing company providing contract manufacturing and engineering services. 
            We have offices in Karlskrona (Sweden) and Mostar (Bosnia-Hercegovina).
            We buy the products directly from our partner manufacturers and engineering houses to make sure our customers get the best prices possible.
						</p>
						<p className="mt-4 text-gray-600">
            Menea is monitoring the process from design, manufacturing and quality control to packaging and shipping.
            We always do our utmost to ensure that we live up to our customers' demands for price, quality and delivery precision.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
