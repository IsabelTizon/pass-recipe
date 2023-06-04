import React from "react";
import { Link } from "react-router-dom";
//Mui materials
import { Button as CommonButton, Typography, Container } from "@mui/material";

export default function Success() {
	return (
		<Container sx={containerSuccess}>
			<Typography sx={header}>Success!</Typography>
			<Typography sx={subheader}>Welcome to Pass Recipe</Typography>
			<Typography sx={intro}>
				Your recipe app where you can find recipes and share your recipes with
				the rest of the pass recipe community
			</Typography>
			<Link to={"/"}>
				<CommonButton sx={buttonStyles}>Let's go!</CommonButton>
			</Link>
		</Container>
	);
}

// STYLES
const containerSuccess = {
	width: "35%",
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

const intro = {
	color: "#000000",
	marginTop: 3,
	marginBottom: 2,
	fontSize: "1rem",
	textAlign: "center",
};

const buttonStyles = {
	color: "#ffffff",
	background: "#505c26",
	marginTop: 3,
	marginBottom: 2,
	minWidth: "100%",

	fontSize: "0.7rem",
	border: "1px solid #505c26",
	"&:hover": {
		color: "#505c26",
		background: "#EED3C0",
	},
};
