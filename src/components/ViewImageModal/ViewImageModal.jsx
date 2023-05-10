/* eslint-disable no-undef */
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const ViewImageModal = ({ image, showFullImage, setShowFullImage }) => {
	const handleCloseModal = () => {
		setShowFullImage((prevValue) => !prevValue);
	};
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
					<div>
						<div className="bg-white rounded p-4 relative ">
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
								className="object-cover laptop:w-[500px] laptop:h-[500px] mt-4 tablet:w-[50px] tablet:h-[50px]"
							/>
						</div>
					</div>
				</motion.div>
			</AnimatePresence>
		</>
	);
};
