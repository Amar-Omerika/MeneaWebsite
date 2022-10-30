import ServiceCard from "./ServiceCard";
export default function ServiceSection() {
	return (
		<div className="m-auto px-12">
			<h1 className="font-customfont font-bold desktop:text-[100px] text-[50px] text-center text-gray mt-8 animate-in fade-in-25">
				Services
			</h1>
			<ServiceCard />
		</div>
	);
}
