import React from "react";
//MUI materials
import { Paper, Box, Typography, Container } from "@mui/material";

export default function MuiFooter() {
	return (
		<Paper
			// Footer styles
			sx={{
				width: "100%",
				height: "45px",
				position: "fixed",
				bottom: 0,
				backgroundColor: "#505c26",
			}}
			component="footer"
			square
			variant="outlined"
		>
			{/*  Container text styles */}
			<Container maxWidth="lg">
				<Box
					sx={{
						flexGrow: 1,
						justifyContent: "center",
						display: "flex",
						mt: "9px",
					}}
				>
					{/*  Text */}
					<Typography variant="caption" color="white" sx={{ fontSize: "1rem" }}>
						Pass Recipe © 2023
					</Typography>
				</Box>
			</Container>
		</Paper>
	);
}
