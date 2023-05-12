/* eslint-disable no-undef */
import React, { useState } from "react";
import LinkCard from "./LinkCard";
import Carousel from "../Carousel";
import { ViewImageModal } from "../ViewImageModal/ViewImageModal";

let fullData = require("../../assets/data/sublinksData.json");

function LinkPage({ link }) {
	const links = fullData.data.find((item) => item[link]);
	const filteredData = links[link].filter((item) => item);
	const [showFullImage, setShowFullImage] = useState(false);
	const [imageRoute, setImageRoute] = useState();
	console.log("links", links);
	console.log("link", link);

	return (
		// <div className="mt-[65px] min-h-screen py-8 px-4">
		// 	<h1 className="mb-2 font-customfont font-bold desktop:text-[100px] text-[50px] text-center text-gray animate-in fade-in-25">
		// 		{link.split("-").join(" ").toUpperCase()}
		// 	</h1>
		// 	<div className="max-w-[1440px] mx-auto grid tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-6">
		// 		{links[link].map((service, id) => {
		// 			return <LinkCard key={service + id} service={service} link={link} />;
		// 		})}
		// 	</div>
		// </div>
		<>
			{link === "about" ? (
				<p>Test</p>
			) : (
				<>
					{filteredData.map((item) => {
						return (
							<div
								key={item.id}
								className="font-customFont mt-[65px] w-full h-full"
							>
								<div className=" relative h-[300px]">
									<img
										className="object-cover h-full w-full blur-[2px] brightness-50 shadow-2xl"
										src={window.location.origin + item.bgImage}
										alt="engineering"
									/>
									<div className=" font-customFont absolute top-0 left-0 right-0 flex flex-col gap-9 justify-center items-center  h-full desktop:text-6xl text-xl font-semibold text-white px-6 uppercase">
										<p>{item.title}</p>
									</div>
								</div>

								<div className="h-full flex flex-col-reverse items-center w-full mt-6 p-6 space-y-6 laptop:flex-row ">
									{/* we need to provide here an array of images that are nested in sublinks json data for specific image */}
									<Carousel
										imgData={item.images}
										showFullImage={showFullImage}
										setShowFullImage={setShowFullImage}
										imageRoute={imageRoute}
										setImageRoute={setImageRoute}
									/>
									<p className="laptop:w-1/2 font-customfont font-[600]">
										{item.content}
									</p>
								</div>
								{showFullImage && (
									<ViewImageModal
										showFullImage={showFullImage}
										setShowFullImage={setShowFullImage}
										image={imageRoute}
									/>
								)}
							</div>
						);
					})}
				</>
			)}
		</>
	);
}

export default LinkPage;
