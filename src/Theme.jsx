import { createTheme } from "@mui/material/styles";

// Global Styles
export const theme = createTheme({
	components: {
		// Name of the component
		MuiButton: {
			styleOverrides: {
				root: {
					fontSize: "1rem",
				},
			},
		},
	},
	// Colours
	palette: {
		success: { main: "#505c26" },
	},
	//@query
	breakpoints: {
		values: {
			mobile: 0,
			tablet: 768,
			desktop: 1220,
		},
	},
});

// Mui @query
const breakpoints = {
	mobile: "0px",
	tablet: "768px",
	desktop: "1220px",
};

// Styled Components @query
export const devices = {
	mobile: `(min-width: ${breakpoints.mobile})`,
	tablet: `(min-width: ${breakpoints.tablet})`,
	desktop: `(min-width: ${breakpoints.desktop})`,
};
