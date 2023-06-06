import React from "react";

//Mui materials
import { Typography, Container } from "@mui/material";

export default function MyRecipes() {
	return (
		<Container sx={containerMyRecipes}>
			<Typography sx={header}>My Recipes</Typography>
			<Typography sx={subheader}>Sorry, Page in progress</Typography>
		</Container>
	);
}

// STYLES
const containerMyRecipes = {
	width: "80%",
	margin: "10% auto",
};
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
