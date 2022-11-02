import {
	CheckBadgeIcon,
	UsersIcon,
	WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const actions = [
	{
		title: "Mechanical Engineering",
		href: "#",
		icon: WrenchScrewdriverIcon,
		iconForeground: "text-teal-700",
		iconBackground: "bg-teal-50",
	},
	{
		title: "Bim Services",
		href: "#",
		icon: CheckBadgeIcon,
		iconForeground: "text-purple-700",
		iconBackground: "bg-purple-50",
	},
	{
		title: "Project Managamnet",
		href: "#",
		icon: UsersIcon,
		iconForeground: "text-sky-700",
		iconBackground: "bg-sky-50",
	},
	{
		title: "Outsourcing",
		href: "#",
		icon: UsersIcon,
		iconForeground: "text-sky-700",
		iconBackground: "bg-sky-50",
	},
];

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: .8,
      duration: .6,
    }
  },
}

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function ServiceCard() {
	return (
		<motion.div variants={variants} initial="initial" animate="animate" className="max-w-[1024px] mx-auto divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
			{actions.map((action, actionIdx) => (
				<div
					key={action.title}
					className={classNames(
						actionIdx === 0
							? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
							: "",
						actionIdx === 1 ? "sm:rounded-tr-lg" : "",
						actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
						actionIdx === actions.length - 1
							? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
							: "",
						"relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset hover:bg-lightBlue md:duration-500"
					)}
				>
					<div>
						<span
							className={classNames(
								action.iconBackground,
								action.iconForeground,
								"rounded-lg inline-flex p-3 ring-4 ring-white"
							)}
						>
							<action.icon className="h-6 w-6" aria-hidden="true" />
						</span>
					</div>
					<div className="mt-8 hover:text-white ">
						<h3 className="text-xl font-bold font-customfont">
							<a href={action.href} className="focus:outline-none">
								{/* Extend touch target to entire panel */}
								<span className="absolute inset-0" aria-hidden="true" />
								{action.title}
							</a>
						</h3>
						<p className="mt-2 text-sm text-gray-500 font-customfont">
							Doloribus dolores nostrum quia qui natus officia quod et dolorem.
							Sit repellendus qui ut at blanditiis et quo et molestiae.
						</p>
					</div>
					<span
						className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
						aria-hidden="true"
					>
						<svg
							className="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
						</svg>
					</span>
				</div>
			))}
		</motion.div>
	);
}