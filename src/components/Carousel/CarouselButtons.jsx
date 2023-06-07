import React from "react";
import {
	ArrowSmallLeftIcon,
	ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";
export default function CarouselButtons({ previousSlide, nextSlide }) {
	return (
		<div className="ml-1'">
			<div className="flex flex-row mx-auto justify-between">
				<button onClick={previousSlide} type="button">
					<a
						href="#_"
						className="relative inline-flex items-center justify-start py-3 pl-4 pr-4 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-4 hover:pr-6 bg-gray-50 group"
					>
						<span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
						<span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
							<ArrowSmallLeftIcon height={30} width={30} />
						</span>
					</a>
				</button>
				<button onClick={nextSlide} type="button">
					<a
						href="#_"
						className="relative inline-flex items-center justify-start py-3 pl-4 pr-4 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-4 hover:pr-6 bg-gray-50 group"
					>
						<span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
						<span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
							<ArrowSmallRightIcon height={30} width={30} />
						</span>
					</a>
				</button>
			</div>
		</div>
	);
}
