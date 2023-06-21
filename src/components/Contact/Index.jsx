/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import Elvis from "../../assets/contact1.jpg";
import { AnimatePresence, motion } from "framer-motion";
const people = [
	{
		name: "Elvis Nazdrajic",
		role: "Sales&Quality",
		company: "Menea AB",
		adress: "Ronnebygatan 49",
		postalCode: "371 34 Karlskrona",
		location: "Sweden",
		email: "elvis@menea.se",
		number1: "SWE +46 (0) 733 96 03 15",
		number2: "B&H +387 (0) 62 77 95 83",
		webpage: "www.menea.se",
	},
	// More people...
];
export default function Index() {
	return (
		<div className="py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
				<div className="mx-auto max-w-2xl">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Contact Us
					</h2>
					{/* <p className="mt-4 text-lg leading-8 text-gray-400">
						We’re a dynamic group of individuals who are passionate about what
						we do.
					</p> */}
				</div>
				{people && people.length === 1 && (
					<ul
						role="list"
						// className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
					>
						{people.map((person) => (
							<AnimatePresence>
								<motion.div
									animate={{ y: -20 }}
									whileHover={{ scale: 1.2 }}
									transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
								>
									<li
										key={person.name}
										className="rounded-2xl bg-[#000099] opacity-90 px-8 py-10 font-customfont"
									>
										<img
											className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56 object-cover"
											src={Elvis}
											alt=""
										/>
										<h3 className="mt-6 font-semibold leading-7 text-xl tracking-tight text-white font-customfont">
											{person.name}
										</h3>
										<p className="text-md leading-6 font-bold font-customfont text-white ">
											{person.role}
										</p>
										<div className="mt-6 flex justify-center flex-col laptop:flex-row tablet:flex-row gap-x-6">
											<ul
												role="list"
												className="flex text-start flex-col gap-x-6 font-semibold text-white "
											>
												<li>{person.company}</li>
												<li>{person.adress}</li>
												<li>{person.postalCode}</li>
												<li>{person.location}</li>
											</ul>
											<ul
												role="list"
												className="flex text-start flex-col gap-x-6 font-semibold text-white "
											>
												<li>{person.email}</li>
												<li>{person.number1}</li>
											</ul>
										</div>
									</li>
								</motion.div>
							</AnimatePresence>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}
