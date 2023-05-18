import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
// import Typography from "@mui/material/Typography";
import {
	ChevronLeft,
	ChevronRight,
	Menu,
	ShoppingCartOutlined,
} from "@mui/icons-material";

import {
	AppBar as MuiAppBar,
	Badge,
	Box,
	CssBaseline,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
} from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import { MuiNavbarItems } from "./MuiNavbarItems";

//Logo
// import styled from "styled-components";
import Logo from "../../img/Logo.png";

//top bar
import CommonButton from "../common/button";
//Badget
// import createTheme from "../../dashboardTheme";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create("margin", {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	})
);

//
const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

// Left Navbar
const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	// Drawer
	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};
	const navigate = useNavigate();

	return (
		<Box sx={{ isplay: "flex" }}>
			<CssBaseline />
			<AppBar position="fixed" open={open}>
				<Toolbar sx={muiToolbarStyles}>
					{/*Burger icon*/}
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{ color: "#000", mr: 2, ...(open && { display: "none" }) }}
					>
						<Menu />
					</IconButton>
					{/* <Typography variant="h6" noWrap component="div">
						Persistent drawer
					</Typography> */}

					{/*Logo */}
					<Link to={"/"}>
						<img src={Logo} width="80" height="45" alt="logo"></img>
					</Link>

					{/*Login Button */}
					<Box>
						<Link to={"/"}>
							<CommonButton
								sx={buttonStyles}
								variant="authentification"
								size="small"
							>
								Log in
							</CommonButton>
						</Link>

						{/* Cart */}
						<Link to={"/"}>
							{/* <CommonButton sx={buttonStyles} variant="close" size="medium">
							carrito
						</CommonButton> */}
							{/* <ShoppingCartIcon>size="medium"</ShoppingCartIcon> */}

							<IconButton size="medium">
								<Badge badgeContent={4} max={999} color="error">
									<ShoppingCartOutlined fontSize="medium" />
								</Badge>
							</IconButton>
						</Link>
					</Box>
				</Toolbar>
			</AppBar>

			{/* Drawer */}
			<Drawer
				// Style List
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{MuiNavbarItems.map((item, index) => (
						<ListItem key={item.id} onClick={() => navigate(item.route)}>
							<ListItemIcon sx={navbarStyles.icons}>{item.icon}</ListItemIcon>
							<ListItemText sx={navbarStyles.text} primary={item.label} />
						</ListItem>
					))}
				</List>
			</Drawer>
			<Main open={open}>
				<DrawerHeader />
			</Main>
		</Box>
	);
}

//Styles
const navbarStyles = {
	// drawer: {
	// 	width: 320,
	// 	flexShrink: 0,
	// 	"& .MuiDrawer-paper": {
	// 		width: 320,
	// 		boxSizing: "border-box",
	// 		backgroundColor: "#101F33",
	// 		color: "rgba(255, 255, 255, 0.7)",
	// 	},
	// 	"& .Mui-selected": {
	// 		color: "red",
	// 	},
	// },
	icons: {
		color: "#5e5d5d",
		marginLeft: "20px",
		minWidth: 35,

		"&:hover": {
			color: "#024e19",
		},
	},
	text: {
		color: "#5e5d5d",

		"&:hover": {
			color: "#024e19",
		},
		// "& span": {
		// 	marginLeft: "-10px",
		// 	fontWeight: "600",
		// 	fontSize: "16px",
		// },
	},
};

const buttonStyles = {
	color: "#505c26",
	fontSize: "0.7rem",
	border: "1px solid #505c26",
	"&:hover": {
		color: "#ffffff",
		background: "#505c26",
	},
};

const muiToolbarStyles = {
	background: "#ffffff",
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
};