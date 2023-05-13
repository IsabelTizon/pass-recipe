import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import { BrowserRouter } from "react-router-dom"; // to navigate pages import
import { ThemeProvider } from "@mui/material/styles";

import { dashboardTheme } from "./dashboardTheme";

// Mui: React UI framework
import MuiNavbar from "./components/MuiNavbar/MuiNavbar";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<ThemeProvider theme={dashboardTheme}></ThemeProvider>
				<MuiNavbar />
				<Search />
				<Category />
				<Pages />
			</BrowserRouter>
		</div>
	);
}

export default App;
