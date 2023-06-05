import { createTheme } from "@mui/material/styles";

//Global Styles
export const theme = createTheme({
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
			// xs: 0,
			// sm: 600,
			// md: 900,
			// lg: 1200,
			// xl: 1536,
			mobile: 0,
			tablet: 768,
			desktop: 1220,
		},
	},
});

const breakpoints = {
	mobile: "0px",
	tablet: "768px",
	desktop: "1220px",
};

export const devices = {
	mobile: `(min-width: ${breakpoints.mobile})`,
	tablet: `(min-width: ${breakpoints.tablet})`,
	desktop: `(min-width: ${breakpoints.desktop})`,
};
