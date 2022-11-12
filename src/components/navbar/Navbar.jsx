/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../assets/menea_logo.png";
import menea_text_logo from "../../assets/menea.png";

function Navbar() {
	const [open, setOpen] = useState(false);
	const links = [
		{
			name: "Home",
      link: "",
			sublinks: [],
		},
		{
			name: "Outsourcing",
      link: "outsourcing",
			sublinks: [
				{
					name: "Turning",
					link: "/outsourcing/turning",
				},
				{
					name: "Milling",
					link: "/outsourcing/milling",
				},
				{
					name: "Plastic Injection",
					link: "/outsourcing/plastic-injection",
				},
				{
					name: "Grinding",
					link: "/outsourcing/grinding",
				},
				{
					name: "Hardening",
					link: "/outsourcing/hardening",
				},
				{
					name: "Quality insurance",
					link: "/outsourcing/quality-insurance",
				},
			],
		},
		{
			name: "Mechanical Engineering",
      link: "mechanical-engineering",
			sublinks: [
				{
					name: "Conceptual",
					link: "/mechanical-engineering/conceptual",
				},
				{
					name: "3D Modelling",
					link: "/mechanical-engineering/3d-modelling",
				},
				{
					name: "Detail Drafting",
					link: "/mechanical-engineering/detail-drafting",
				},
				{
					name: "FEA Calculations",
					link: "/mechanical-engineering/fea-calculations",
				},
				{
					name: "3D Visualization",
					link: "/mechanical-engineering/3d-visualization",
				},
			],
		},
		{
			name: "BIM Services",
      link: "bim-services",
			sublinks: [
				{
					name: "CAD to BIM  Model",
					link: "/bim-services/cad-to-bim-model",
				},
				{
					name: "Scan to BIM  Model",
					link: "/bim-services/scan-to-bim-model",
				},
				{
					name: "PDF to BIM  Model",
					link: "/bim-services/pdf-to-bim-model",
				},
				{
					name: "BIM Families Creation",
					link: "/bim-services/bim-families-creation",
				},
				{
					name: "Scanning",
					link: "/bim-services/scanning",
				},
			],
		},
		{
			name: "Consultion",
      link: "consultion",
			sublinks: [
				{
					name: "Quality management",
					link: "/consultion/quality-management",
				},
				{
					name: "Project management",
					link: "/consultion/project-management",
				},
				{
					name: "Purchasing",
					link: "/consultion/purchasing",
				},
			],
		},
	];

	const handleNav = () => {
		setOpen(!open);
	};

  const handleScroll = (e) => {
    e.stopPropagation();
  }

	return (
		<AnimatePresence>
			<motion.nav
				layout="position"
				className="w-screen max-w-full font-semibold mx-auto fixed top-0 left-0 right-0 z-[999] bg-white shadow-md"
			>
				<motion.div
					layout
          transition= {{duration: .5, delayChildren:.5, staggerChildren: 1}}
          onScroll={handleScroll}
					className="bg-white max-h-[500px] overflow-y-auto desktop:overflow-y-visible no-scrollbar no-scrollbar::-webkit-scrollbar px-6 flex flex-wrap items-center justify-between desktop:mx-32"
				>
					<div className="w-full desktop:w-1/4 flex justify-between">
						<motion.div
							layout
							className="flex items-center justify-center cursor-pointer"
						>
							<span>
								<img className="h-[30px] w-[30px] laptop:h-[50px] laptop:w-[50px]" src={logo} />
							</span>
							<img className="ml-2" src={menea_text_logo} />
							<span className="sr-only">Company Logo</span>
						</motion.div>

						<motion.div
            layout
            className="py-6 flex items-center desktop:hidden">
							{open ? (
								<FontAwesomeIcon
									icon={faXmark}
									className="cursor-pointer"
									onClick={handleNav}
								/>
							) : (
								<FontAwesomeIcon
									icon={faBars}
									className="cursor-pointer"
									onClick={handleNav}
								/>
							)}
						</motion.div>
					</div>

					<motion.ul className="hidden bg-white text-black font-customfont desktop:flex justify-around uppercase items-center gap-4">
						{links.map((link, i) => {
							return <NavLinks link={link} key={`link${i}`} />;
						})}
					</motion.ul>

					{/* Mobile view */}

					{open && (
						<motion.ul
            layout="position"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
							transition={{ duration: 0.5, delay:.2 }}
							className={`py-6 text-black font-customfont desktop:hidden flex flex-col basis-full uppercase items-start`}
						>
							{links.map((link, i) => {
								return <NavLinks link={link} key={`link${i}`} handleNav={handleNav} />;
							})}
						</motion.ul>
					)}
				</motion.div>
			</motion.nav>
		</AnimatePresence>
	);
}

export default Navbar;
