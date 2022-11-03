import Navbar from "../../components/navbar/Navbar";
import SliderComponent from "../../components/Slideshow/Index";
import ServiceSection from "../../components/ServiceSection/Index";
import Footer from "../../components/Footer/Index";
import LatestNews from "../../components/NewsSection/LatestNews";
import AboutUs from "../../components/AboutUs/Index";
export default function Home() {
	return (
		<div className="w-screen max-w-full">
			<Navbar />
			<SliderComponent />
			<ServiceSection />
			<LatestNews />
			<AboutUs />
			<Footer />
		</div>
	);
}
