import React from "react";

//Mui materials
import { Typography, Container } from "@mui/material";

export default function Blog() {
	return (
		<Container sx={containerBlog}>
			<Typography sx={header}>Blog</Typography>
			<Typography sx={subheader}>
				We are a big communnity that share our recipes
			</Typography>
			<Typography sx={subheader}>Sorry, Page in progress</Typography>
		</Container>
	);
}

// STYLES
const containerBlog = {
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
