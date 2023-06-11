import React, { useState } from "react";
import Carousel from "../Carousel";
import { ViewImageModal } from "../ViewImageModal/ViewImageModal";
let fullData = require("../../assets/data/sublinksData.json");

function SublinkPage({ id, element }) {
	const [showFullImage, setShowFullImage] = useState(false);
	const [imageRoute, setImageRoute] = useState();
	const data = fullData.data;

	return (
		<>
			{data.map(
				(item) =>
					item[element] &&
					item[element].map(
						(x, index) =>
							x.id === id && (
								<div
									key={id}
									className="font-customFont mt-[65px] w-full h-full"
								>
									<div className=" relative h-[300px]">
										<img
											className="object-cover h-full w-full blur-[2px] brightness-50 shadow-2xl"
											src={window.location.origin + x.bgImage}
											alt="engineering"
										/>
										<div className=" font-customfont absolute top-0 left-0 right-0 flex flex-col gap-9 justify-center items-center  h-full desktop:text-6xl text-xl font-semibold text-white px-6 uppercase">
											<p>{x.title}</p>
										</div>
									</div>

									<div className="h-full flex flex-col-reverse items-center w-full mt-6 p-6 space-y-6 laptop:flex-row ">
										{/* we need to provide here an array of images that are nested in sublinks json data for specific image */}
										<Carousel
											imgData={x.images}
											showFullImage={showFullImage}
											setShowFullImage={setShowFullImage}
											imageRoute={imageRoute}
											setImageRoute={setImageRoute}
										/>
										<p
											className="laptop:w-1/2 font-customfont font-[600] ml-2"
											style={{ whiteSpace: "pre-line" }}
										>
											{x.content}
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
							)
					)
			)}
		</>
	);
}

export default SublinkPage;
