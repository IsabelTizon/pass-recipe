// Icons
import HomeIcon from "@mui/icons-material/Home";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { SiCodechef } from "react-icons/si";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";

//Divider
import { Divider } from "@mui/material";

// Array of objects with navbar navigation
export const MuiNavbarItems = [
	{
		id: 0,
		icon: <HomeIcon />,
		label: "Home",
		route: "/pass-recipes",
	},
	{
		id: 1,
		icon: <FoodBankIcon />,
		label: "Meal Plans",
		route: "/pass-recipes/meal-planning",
	},
	<Divider />,
	{
		id: 2,
		icon: <SettingsEthernetIcon />,
		label: "Blog",
		route: "/pass-recipes/blog",
	},
	{
		id: 3,
		icon: <RestaurantMenuIcon />,
		label: "My Recipes",
		route: "/pass-recipes/my-recipes",
	},
	{
		id: 4,
		icon: <FavoriteIcon />,
		label: "Favourites",
		route: "/pass-recipes/favourites",
	},
	<Divider />,
	{
		id: 5,
		icon: <SiCodechef />,
		label: "Courses",
		route: "/pass-recipes/courses",
	},
	{
		id: 6,
		icon: <AddShoppingCartIcon />,
		label: "Shopping Card",
		route: "/pass-recipes/basket",
	},
	<Divider />,
	{
		id: 7,
		icon: <PersonIcon />,
		label: "Register",
		route: "/pass-recipes/login",
	},
];
