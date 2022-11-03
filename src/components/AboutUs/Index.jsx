/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

export default function AboutUs() {
	return (
		<div class="py-16 bg-white">
			<h1 className="font-customfont font-bold desktop:text-[100px] text-[50px] text-center text-gray animate-in fade-in-25">
				About Us
			</h1>
			<div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-12">
				<div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-14">
					<div class="md:5/12 lg:w-5/12">
						<img
							src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
							alt="image"
							loading="lazy"
							width=""
							height=""
						/>
					</div>
					<div class="md:7/12 lg:w-6/12">
						<h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
							Nuxt development is carried out by passionate developers
						</h2>
						<p class="mt-6 text-gray-600">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
							omnis voluptatem accusantium nemo perspiciatis delectus atque
							autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
							consequatur! Officiis id consequatur atque doloremque!
						</p>
						<p class="mt-4 text-gray-600">
							{" "}
							Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
							expedita at? Asperiores nemo possimus nesciunt dicta veniam
							aspernatur quam mollitia.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
