/* eslint-disable no-undef */
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export const ViewImageModal = ({ image, setShowFullImage }) => {
	const handleCloseModal = () => {
		setShowFullImage((prevValue) => !prevValue);
	};

	// Check if the screen size is mobile
	const isMobile = window.innerWidth <= 768;

	return (
		<>
			<AnimatePresence>
				<motion.div
					layout
					animate={{
						x: 0,
						y: -20,
						scale: 1.0,
						rotate: 0,
					}}
					className="fixed top-6 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
				>
					<div
						className={`bg-white rounded p-4 relative ml-4 mr-4 ${
							isMobile ? "w-50 h-50" : ""
						}`}
					>
						<button
							className="absolute top-4 right-0 text-xl font-bold text-gray-500 px-2 py-1 hover:text-gray-600"
							onClick={handleCloseModal}
							style={{ transform: "translate(-50%, -50%)" }}
						>
							X
						</button>
						<img
							src={image}
							alt="test"
							className="relative laptop:w-[700px] laptop:h-[550px] mt-4 tablet:w-[380px] tablet:h-[350px]"
						/>
					</div>
				</motion.div>
			</AnimatePresence>
		</>
	);
};
