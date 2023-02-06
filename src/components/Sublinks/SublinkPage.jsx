import React from "react";
import Carousel from "../Carousel";
let fullData = require("../../assets/data/sublinksData.json");


function SublinkPage({ id, element }) {
	const data = fullData.data;
	return data.map(
		(item) =>
			item[element] &&
			item[element].map(
				(x) =>
					x.id === id && (
						<div key={id} className="font-customFont mt-[65px] w-full h-full">
							<div className=" relative h-[300px] z-1">
								<img
									className="object-cover h-full w-full blur-[2px] brightness-50 shadow-2xl"
									src={window.location.origin + x.bgImage}
									alt="engineering"
								/>
								<div className=" font-customFont absolute top-0 left-0 right-0 flex flex-col gap-9 justify-center items-center z-50 h-full desktop:text-6xl text-xl font-semibold text-white px-6 uppercase">
									<p>{x.title}</p>
								</div>
							</div>
							<div className="h-full flex flex-col-reverse items-center w-full mt-6 p-6 space-y-6 laptop:flex-row ">
								{/* <img
									className="object-cover w-3/4 mt-16 laptop:w-1/2 laptop:px-6"
									src={x.image}
									alt="engineering"
								/> */}
								{/*we need to provide here an array of images that are nested in sublinks json data for specific image*/}
								<Carousel imgData={x.images} />
								<p className="laptop:w-1/2 font-customfont font-[600]">
									{x.content}
								</p>
							</div>
						</div>
					)
			)
	);
}

export default SublinkPage;
