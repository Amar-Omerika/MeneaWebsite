import React from "react";
import Image1 from "../../assets/Homeimg1.png";
import Image2 from "../../assets/Homeimg2.jpg";
import Image3 from "../../assets/Homeimg3.png";

const cards = [
	{
		name: "Sales",
		img: Image1,
	},
	{
		name: "Technical Support",
		img: Image2,
	},
	{
		name: "Media Inquiries",
		img: Image3,
	},
];

export default function AboutUsHome() {
	return (
		<div className="animate-pulse relative isolate overflow-hidden bg-[#063970] py-24 sm:py-32 my-10 mx-10 rounded-md">
			<img
				src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
				alt=""
				className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
			/>
			<div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
				<div
					className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
				/>
			</div>
			<div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
				<div
					className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
				/>
			</div>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-customfont">
						Quick Introduction
					</h2>
					<p className="mt-6 text-lg leading-8 text-white font-customfont">
						Menea AB is a Swedish trading and consulting company with a solid
						and reliable supplier network in south-eastern Europe. Together with
						our partners we offer high class manufacturing and engineering
						services. Most of our suppliers are located in Bosnia-Herzegovina
						and Slovenia. Our local staff monitor QA, packing and logistics to
						ensure customer satisfaction.
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
					{cards.map((card) => (
						<div
							key={card.name}
							className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"
						>
							<img
								src={card.img}
								alt=""
								// className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
