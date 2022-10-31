import Navbar from "../../components/navbar/Navbar";
import SliderComponent from "../../components/Slideshow/Index";
import ServiceSection from "../../components/ServiceSection/Index";
import Footer from "../../components/Footer/Index";
export default function Home() {
	return (
		<div className="w-screen">
			<Navbar />
			<SliderComponent />
			<ServiceSection />
			<Footer />
		</div>
	);
}
