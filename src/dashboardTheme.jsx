import { createTheme } from "@mui/material/styles";

//Global Styles
export const dashboardTheme = createTheme({
	components: {
		// Name of the component
		MuiButton: {
			styleOverrides: {
				// Name of the slot
				root: {
					// Some CSS
					fontSize: "1rem",
				},
			},
		},
	},
	palette: {
		success: { main: "#505c26" },
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},
});
