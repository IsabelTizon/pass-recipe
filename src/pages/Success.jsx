import React from "react";

//Mui materials
import { Typography } from "@mui/material";

// Mui Styles
import { styled } from "@mui/material/styles";

export default function Success() {
	return (
		<ContainerSuccess>
			<Typography sx={header}>Success!</Typography>
			<Typography sx={subheader}>Welcome to Pass Recipe</Typography>
			<Typography sx={intro}>
				Your recipe app where you can find recipes and share your recipes with
				the rest of the pass recipe community
			</Typography>
			<Typography sx={confirmation}>
				Check your email for the confirmation!
			</Typography>
			<Typography sx={login}>then login</Typography>
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

const intro = {
	color: "#000000",
	marginTop: 3,
	marginBottom: 2,
	fontSize: "1rem",
	textAlign: "center",
};
const confirmation = {
	color: "#dc0b0b",
	textAlign: "center",
};
const login = {
	color: "#000000",
	textAlign: "center",
};
