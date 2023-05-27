// Icons
import HomeIcon from "@mui/icons-material/Home";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { SiCodechef } from "react-icons/si";
// import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";
// import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import { Divider } from "@mui/material";

export const MuiNavbarItems = [
	{
		id: 0,
		icon: <HomeIcon />,
		label: "Home",
		route: "",
	},
	{
		id: 1,
		icon: <FoodBankIcon />,
		label: "Meal Plans",
		route: "mealPlanning",
	},
	{
		id: 2,
		icon: <SettingsEthernetIcon />,
		label: "Blog",
		route: "blog",
	},
	<Divider />,
	{
		id: 3,
		icon: <RestaurantMenuIcon />,
		label: "My Recipes",
		route: "recipes",
	},
	{
		id: 4,
		icon: <FavoriteIcon />,
		label: "Favorites",
		route: "favorites",
	},
	{
		id: 5,
		icon: <SiCodechef />,
		label: "Courses",
		route: "courses",
	},
	<Divider />,
	{
		id: 6,
		icon: <AddShoppingCartIcon />,
		label: "Shopping Card",
		route: "basket",
	},
	{
		id: 7,
		icon: <PersonIcon />,
		label: "Register",
		route: "login",
	},
];
