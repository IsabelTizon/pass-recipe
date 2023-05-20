import Pages from "./pages/Pages";

import { BrowserRouter } from "react-router-dom"; // to navigate pages import
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";

import { dashboardTheme } from "./dashboardTheme";

// Mui: React UI framework
import MuiNavbar from "./components/MuiNavbar/MuiNavbar";

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={dashboardTheme}></ThemeProvider>
			<BrowserRouter>
				<Box as="main" sx={{ width: "80%", margin: "0 auto" }}>
					<MuiNavbar />
					<Pages />
				</Box>
			</BrowserRouter>
		</div>
	);
}

export default App;
