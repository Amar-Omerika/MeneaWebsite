import React from "react";

export default function About() {
	return (
		<div className="bg-white">
			<main className="isolate">
				{/* Hero section */}
				<div className="relative isolate -z-10">
					<svg
						className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
						aria-hidden="true"
					>
						<defs>
							<pattern
								id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
								width={200}
								height={200}
								x="50%"
								y={-1}
								patternUnits="userSpaceOnUse"
							>
								<path d="M.5 200V.5H200" fill="none" />
							</pattern>
						</defs>
						<svg x="50%" y={-1} className="overflow-visible fill-gray-50">
							<path
								d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
								strokeWidth={0}
							/>
						</svg>
						<rect
							width="100%"
							height="100%"
							strokeWidth={0}
							fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
						/>
					</svg>
					<div
						className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
						aria-hidden="true"
					>
						<div
							className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
							style={{
								clipPath:
									"polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
							}}
						/>
					</div>
					<div className="overflow-hidden">
						<div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
							<div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
								<div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
									<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-customfont">
										Precision is not just an attitude, it's a requirement in
										machine engineering.
									</h1>
									<p className="relative mt-6 text-lg font-bold leading-8 text-gray-600 sm:max-w-md lg:max-w-none font-customfont">
										Menea AB is a Swedish based trading and consulting company.
										Together with our hand picked partners in
										Bosnia-Herzegovina, Slovenia and Croatia we supply high
										class manufacturing and engineering services. Skilled
										workforce + low cost country = high quality at a favourable
										price. A lean organization also gives us a big competitive
										advantage. And with a dedicated contact person you will not
										be bounced between different departments. We have customers
										in various industries: High voltage products, Hydraulic
										cylinders, Water cutting equipment, Water technology
										solutions, Equipment for gas cylinder maintenance, Ergonomic
										assistive devices and many more. Our main market is Sweden
										but we also have customers in USA, Brazil, China and India.
									</p>
								</div>
								<div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
									<div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
										<div className="relative">
											<img
												src="/images/QA/Qa1.png"
												alt=""
												className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
											/>
											<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
										</div>
									</div>
									<div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
										<div className="relative">
											<img
												src="/images/About/about2.jpg"
												alt=""
												className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
											/>
											<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
										</div>
										<div className="relative">
											<img
												src="/images/Engineering/engineering2.jpg"
												alt=""
												className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
											/>
											<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
										</div>
									</div>
									<div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
										<div className="relative">
											<img
												src="/images/CNCMachiningGrinding/machining2.jpg"
												alt=""
												className="aspect-[3/4] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
											/>
											<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
										</div>
										<div className="relative">
											<img
												src="/images/CNCMachiningGrinding/machining4.jpg"
												alt=""
												className="aspect-[5/6] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
											/>
											<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Logo cloud */}
				<div className="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8 mb-12">
					<div className="relative isolate overflow-hidden bg-[#0c0c34] px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
						<h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl font-customfont">
							Our customers
						</h2>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white font-customfont">
							Our customers comes from different areas as Energy, Automation,
							Hydraulics, Water Jet Cutting, disability aids and other
							industries. Most of our clients are leading companies in their
							areas and are located on 4 different continents.
						</p>
						<div
							className="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:max-w-4xl lg:grid-cols-5"
							// className="mx-auto mt-20 max-w-lg items-center flex sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:max-w-4xl lg:grid-cols-5"
						>
							<img
								className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
								src="/images/About/SPA.png"
								alt="SPA"
								width={158}
								height={48}
							/>
							<img
								className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
								src="/images/About/UDD.png"
								alt="UDD"
								width={158}
								height={48}
							/>
							<img
								className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 "
								src="/images/About/HIT.jpg"
								alt="HIT"
								width={158}
								height={48}
							/>
							<img
								className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
								src="/images/About/ABB.png"
								alt="ABB"
								width={158}
								height={48}
							/>
						</div>
						<div
							className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl"
							aria-hidden="true"
						>
							<div
								className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
								style={{
									clipPath:
										"polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
								}}
							/>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
