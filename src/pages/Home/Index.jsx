import Navbar from "../../components/navbar/Navbar";
import SliderComponent from "../../components/Slideshow/Index";
import ServiceSection from "../../components/ServiceSection/Index";
export default function Home() {
	return (
		<div className="h-screen w-screen overflow-x-hidden">
			<Navbar />
			<SliderComponent />
			<ServiceSection />
		</div>
	);
}
