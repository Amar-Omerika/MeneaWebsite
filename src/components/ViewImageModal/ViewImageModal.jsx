/* eslint-disable no-undef */
import React, { useState } from "react";

export const ViewImageModal = ({ image, showFullImage, setShowFullImage }) => {
	console.log("image", image);
	const handleCloseModal = () => {
		setShowFullImage((prevValue) => !prevValue);
	};
	return (
		<>
			<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
				<div className="bg-white rounded p-4 relative">
					<button
						className="absolute top-4 right-0 text-xl font-bold text-gray-500 px-2 py-1 hover:text-gray-600"
						onClick={handleCloseModal}
						style={{ transform: "translate(-50%, -50%)" }}
					>
						X
					</button>
					<img src={image} alt="test" className="w-[500px] h-[500px] mt-4" />
				</div>
			</div>
		</>
	);
};
