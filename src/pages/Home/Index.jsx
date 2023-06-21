import Navbar from "../../components/Navbar/Navbar";
import SliderComponent from "../../components/Slideshow/Index";
import ServiceSection from "../../components/ServiceSection/Index";
import Footer from "../../components/Footer/Index";
import LatestNews from "../../components/NewsSection/LatestNews";
import AboutUs from "../../components/AboutUs/Index";
import AboutUsHome from "../../components/AboutUsHome/Index";

export default function Home() {
	return (
		<div className="w-screen max-w-full">
			<Navbar />
			<SliderComponent />
			<AboutUsHome />
			{/* <ServiceSection /> */}
			{/* <LatestNews /> */}
			{/* <AboutUs /> */}
			<Footer />
		</div>
	);
}
