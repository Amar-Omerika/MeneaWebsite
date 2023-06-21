import React, { useEffect, useState } from "react";
import {
	ArrowSmallLeftIcon,
	ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";

export default function CarouselButtons({ previousSlide, nextSlide }) {
	//check the size of an screen
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		handleResize(); // Check on initial render
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="ml-1">
			<div className="flex flex-row mx-auto justify-between">
				<button onClick={previousSlide} type="button">
					<a
						href="#_"
						className="relative inline-flex items-center justify-start py-3 pl-4 pr-4 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-4 hover:pr-6 bg-gray-50 group"
					>
						<span
							className={`absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out ${
								isMobile ? "" : "bg-indigo-600 group-hover:h-full"
							}`}
						></span>
						<span
							className={`relative w-full transition-colors duration-200 ease-in-out ${
								isMobile
									? "group-hover:text-indigo-600"
									: "group-hover:text-white"
							}`}
						>
							<ArrowSmallLeftIcon height={30} width={30} />
						</span>
					</a>
				</button>

				<button onClick={nextSlide} type="button">
					<a
						href="#_"
						className="relative inline-flex items-center justify-start py-3 pl-4 pr-4 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-6 bg-gray-50 group"
					>
						<span
							className={`absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out ${
								isMobile ? "" : "bg-indigo-600 group-hover:h-full"
							}`}
						></span>
						<span
							className={`relative w-full transition-colors duration-200 ease-in-out ${
								isMobile
									? "group-hover:text-indigo-600"
									: "group-hover:text-white text-left"
							}`}
						>
							<ArrowSmallRightIcon height={30} width={30} />
						</span>
					</a>
				</button>
			</div>
		</div>
	);
}
