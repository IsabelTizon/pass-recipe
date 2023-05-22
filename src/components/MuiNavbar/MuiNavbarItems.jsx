// Icons
import HomeIcon from "@mui/icons-material/Home";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import PersonIcon from "@mui/icons-material/Person";
import { SiCodechef } from "react-icons/si";

import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
// import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
// import DnsIcon from "@mui/icons-material/Dns";

export const MuiNavbarItems = [
	{
		id: 0,
		icon: <HomeIcon />,
		label: "Home",
		route: "",
	},
	{
		id: 1,
		icon: <RestaurantMenuIcon />,
		label: "Recipes",
		route: "recipes",
	},
	{
		id: 2,
		icon: <FoodBankIcon />,
		label: "Meal Plans",
		route: "mealPlanning",
	},
	{
		id: 3,
		icon: <MonitorWeightIcon />,
		label: "Diets",
		route: "diets",
	},
	{
		id: 4,
		icon: <SettingsEthernetIcon />,
		label: "Blog",
		route: "blog",
	},
	{
		id: 5,
		icon: <FavoriteIcon />,
		label: "Favorites",
		route: "favorites",
	},
	// {
	// 	id: 6,
	// 	icon: <PersonIcon />,
	// 	label: "Account",
	// 	route: "Account",
	// },
	{
		id: 6,
		icon: <SiCodechef />,
		label: "Register",
		route: "login",
	},
];
