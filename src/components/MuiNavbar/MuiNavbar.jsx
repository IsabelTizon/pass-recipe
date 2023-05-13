import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";

// import Typography from "@mui/material/Typography";
import { ChevronLeft, ChevronRight, Menu } from "@mui/icons-material";

import {
	AppBar as MuiAppBar,
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

import { useNavigate, Link } from "react-router-dom";
import { MuiNavbarItems } from "./MuiNavbarItems";

//Logo
// import styled from "styled-components";
import Logo from "../../img/Logo.png";

//top bar
import CommonButton from "../common/button";

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
				<Toolbar sx={MuiToolbarStyles}>
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
						<img src={Logo} width="90" height="55" alt="logo"></img>
					</Link>

					{/*Login Button */}
					<Link to={"/"}>
						<CommonButton
							sx={buttonStyles}
							variant="authentification"
							size="medium"
						>
							Log in
						</CommonButton>
					</Link>

					{/* Cart */}
					<Link to={"/"}>
						<CommonButton sx={buttonStyles} variant="close" size="medium">
							carrito
						</CommonButton>
					</Link>
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
						<ListItem button key={item.id} onClick={() => navigate(item.route)}>
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
		color: "#000000",
		marginLeft: "20px",
	},
	// text: {
	// 	"& span": {
	// 		marginLeft: "-10px",
	// 		fontWeight: "600",
	// 		fontSize: "16px",
	// 	},
	// },
};

const buttonStyles = {
	color: "#000000",
	fontSize: "0.7rem",
	border: "1px solid #540202",
	"&:hover": {
		color: "#ffffff",
		background: "#540202",
	},
};

const MuiToolbarStyles = {
	background: "#ffffff",
};

// const MuiAppBar = {

// };
