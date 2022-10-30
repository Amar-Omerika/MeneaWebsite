import Navbar from "../../components/navbar/Navbar";
import SliderComponent from "../../components/navbar/Slideshow/Slideshow";

export default function Home() {
	return (
		<div className="h-screen w-screen overflow-x-hidden">
			<Navbar />
			<div className="ml-auto mr-auto">
				<SliderComponent />
			</div>
		</div>
	);
}
