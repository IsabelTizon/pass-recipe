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
});
