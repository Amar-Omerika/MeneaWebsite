/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../assets/menea_logo1.gif";
import { Link } from "react-router-dom";

function Navbar() {
	const [open, setOpen] = useState(false);
	const links = [
		{
			name: "Home",
			link: "/",
			sublinks: [],
		},
		{
			name: "About",
			link: "/about",
			sublinks: [],
		},
		{
			name: "Manufacturing",
			link: "/",
			sublinks: [
				{
					name: "CNC Machining & Grinding",
					link: "/manufacturing/cnc-machining-grinding",
				},
				{
					name: "Sheet Metal & Laser Cutting",
					link: "/manufacturing/sheetmetal-lasercutting",
				},
				{
					name: "Die Casting",
					link: "/manufacturing/die-casting",
				},
				{
					name: "Surface Treatment",
					link: "/manufacturing/surface-treatment",
				},
				{
					name: "Hardening",
					link: "/manufacturing/hardening",
				},
				{
					name: "Plastic Injection",
					link: "/manufacturing/plastic-injection",
				},
				{
					name: "Assembly",
					link: "/manufacturing/assembly",
				},
				{
					name: "QA - PPAP",
					link: "/manufacturing/qa",
				},
				{
					name: "Packaging & Logistics",
					link: "/manufacturing/packaging-logistics",
				},
			],
		},
		{
			name: "Engineering",
			link: "/engineering",
			sublinks: [],
		},
		{
			name: "BIM",
			link: "/bim",
			sublinks: [],
		},
		{
			name: "Contact",
			link: "/contact",
			sublinks: [],
		},
	];

	const handleNav = () => {
		setOpen(!open);
	};

	const handleScroll = (e) => {
		e.stopPropagation();
	};

	return (
		<AnimatePresence>
			<motion.nav
				layout="position"
				className="w-screen max-w-full font-semibold mx-auto fixed top-0 left-0 right-0 z-[999] bg-white shadow-md"
			>
				<motion.div
					layout
					transition={{ duration: 0.5, delayChildren: 0.6 }}
					onScroll={handleScroll}
					className="bg-white max-h-[500px] overflow-y-auto desktop:overflow-y-visible no-scrollbar no-scrollbar::-webkit-scrollbar px-6 flex flex-wrap items-center justify-between desktop:mx-32"
				>
					<div className="w-full desktop:w-1/4 flex justify-between">
						<motion.div
							layout
							className="flex items-center justify-center cursor-pointer"
						>
							<Link
								to="/"
								className="flex items-center justify-center cursor-pointer"
							>
								<span>
									<img
										className="h-[30px] w-[80px] laptop:h-[60px] laptop:w-[220px]"
										src={logo}
									/>
								</span>
								{/* <img className="ml-2" src={menea_text_logo} /> */}
								<span className="sr-only">Company Logo</span>
							</Link>
						</motion.div>

						<motion.div
							layout
							className="py-6 flex items-center desktop:hidden"
						>
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
						<AnimatePresence>
							<motion.ul
								layout="position"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className={`py-6 text-black font-customfont desktop:hidden flex flex-col basis-full uppercase items-start`}
							>
								{links.map((link, i) => {
									return (
										<NavLinks
											link={link}
											key={`link${i}`}
											handleNav={handleNav}
										/>
									);
								})}
							</motion.ul>
						</AnimatePresence>
					)}
				</motion.div>
			</motion.nav>
		</AnimatePresence>
	);
}

export default Navbar;
