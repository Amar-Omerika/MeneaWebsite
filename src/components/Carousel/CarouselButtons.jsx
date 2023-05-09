import React from "react";

export default function CarouselButtons({ previousSlide, nextSlide }) {
	return (
		<div className="ml-1'">
			<div className="flex flex-row mx-auto justify-between">
				{/* <button
					onClick={previousSlide}
					type="button"
					className="bg-blue text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-lightBlue hover:text-white px-3"
				>
					<div className="flex flex-row align-middle">
						<svg
							className="w-5 mr-2"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
								clip-rule="evenodd"
							></path>
						</svg>
						<p className="ml-2">Prev</p>
					</div>
				</button> */}
				{/* <button
					onClick={nextSlide}
					type="button"
					className="bg-blue text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-lightBlue hover:text-white px-3"
				>
					<div className="flex flex-row align-middle">
						<span className="mr-2">Next</span>
						<svg
							className="w-5 ml-2"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
								clip-rule="evenodd"
							></path>
						</svg>
					</div>
				</button> */}
				<button onClick={previousSlide} type="button">
					<a
						href="#_"
						class="relative inline-flex items-center justify-start py-3 pl-4 pr-4 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-4 hover:pr-6 bg-gray-50 group"
					>
						<span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
						<span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
							Prev
						</span>
					</a>
				</button>
				<button onClick={nextSlide} type="button">
					<a
						href="#_"
						class="relative inline-flex items-center justify-start py-3 pl-4 pr-4 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-4 hover:pr-6 bg-gray-50 group"
					>
						<span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
						<span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
							Next
						</span>
					</a>
				</button>
			</div>
		</div>
	);
}
