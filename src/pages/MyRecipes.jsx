import React from "react";

//Mui materials
import { Typography } from "@mui/material";

// Mui Styles
import { styled } from "@mui/material/styles";

export default function MyRecipes() {
	return (
		<ContainerSuccess>
			<Typography sx={header}>My Recipes</Typography>
			<Typography sx={subheader}>Under Construction</Typography>
		</ContainerSuccess>
	);
}

// STYLES
const ContainerSuccess = styled("div")(({ theme }) => ({
	[theme.breakpoints.up("mobile")]: {
		width: "80%",
		margin: "10% auto",
	},
	[theme.breakpoints.up("desktop")]: {
		width: "35%",
	},
}));
const header = {
	color: "#505c26",
	marginTop: 3,
	marginBottom: 2,
	fontSize: "2.5rem",
	textAlign: "center",
};
const subheader = {
	color: "#000000",
	marginTop: 3,
	marginBottom: 2,
	fontSize: "1.5rem",
	textAlign: "center",
};
