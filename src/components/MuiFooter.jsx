import React from "react";
import { Paper, Box, Typography, Container } from "@mui/material";

export default function MuiFooter() {
	return (
		<Paper
			sx={{
				marginTop: "calc(10% + 60px)",
				width: "100%",
				position: "fixed",
				bottom: 0,
				backgroundColor: "#505c26",
			}}
			component="footer"
			square
			variant="outlined"
		>
			<Container maxWidth="lg">
				<Box
					sx={{
						flexGrow: 1,
						justifyContent: "center",
						display: "flex",
						my: 1,
					}}
				></Box>

				<Box
					sx={{
						flexGrow: 1,
						justifyContent: "center",
						display: "flex",
						mb: 2,
					}}
				>
					<Typography variant="caption" color="white" sx={{ fontSize: "1rem" }}>
						Pass Recipe ©2023
					</Typography>
				</Box>
			</Container>
		</Paper>
	);
}
