import {
	BellDot,
	Bolt,
	BookOpenText,
	BriefcaseBusiness,
	CircleHelp,
	Database,
	Dessert,
	Figma,
	ImagesIcon,
	Lock,
	MapPin,
	MessageCircle,
	PanelsTopLeft,
	PanelTop,
	Play,
	ShieldPlus,
	ShoppingBag,
	TriangleAlert,
	Users,
} from "lucide-react";

export const Menus = [
	{
		name: "Features",
		gridCols: 2,
		subMenuHeading: ["Design", "Scale"],
		subMenu: [
			{
				name: "Design",
				desc: "Responsive design",
				icon: PanelsTopLeft,
			},
			{
				name: "Management",
				desc: "Site Control",
				icon: Bolt,
			},
			{
				name: "Navigation",
				desc: "Link pages",
				icon: PanelTop,
			},
			{
				name: "CMS",
				desc: "Management content",
				icon: Database,
			},
		],
	},

	{
		name: "Resources",
		gridCols: 3,
		subMenuHeading: ["Get started", "Programs", "Recent"],
		subMenu: [
			{
				name: "Markplace",
				desc: "Browse templates",
				icon: ShoppingBag,
			},
			{
				name: "Meetups",
				desc: "Upcoming Events",
				icon: MapPin,
			},
			{
				name: "Updates",
				desc: "Changelogs",
				icon: BellDot,
			},
			{
				name: "Academy",
				desc: "Watch lessions",
				icon: Play,
			},
			{
				name: "Blog",
				desc: "Posts",
				icon: BookOpenText,
			},
			{
				name: "Figma",
				desc: "Plugin",
				icon: Figma,
			},
			{
				name: "Experts",
				desc: "Jobs",
				icon: BriefcaseBusiness,
			},
			{
				name: "Gallery",
				desc: "Images",
				icon: ImagesIcon,
			},
		],
	},
	{
		name: "Support",
		gridCols: 1,
		subMenu: [
			{
				name: "Help",
				desc: "Center",
				icon: CircleHelp,
			},
			{
				name: "Community",
				desc: "Project help",
				icon: MessageCircle,
			},
			{
				name: "Emergency",
				desc: "Urgent issues",
				icon: TriangleAlert,
			},
		],
	},
	{
		name: "Enterprise",
		gridCols: 2,
		subMenuHeading: ["Overview", "Features"],
		subMenu: [
			{
				name: "Enterprise",
				desc: "Overview",
				icon: ShieldPlus,
			},
			{
				name: "Collaboration",
				desc: "Design together",
				icon: Users,
			},
			{
				name: "Customers",
				desc: "Stories",
				icon: Dessert,
			},
			{
				name: "Security",
				desc: "Your site secured",
				icon: Lock,
			},
		],
	},
	{
		name: "Pricing",
	},
	{
		name: "Contact",
	},
];
