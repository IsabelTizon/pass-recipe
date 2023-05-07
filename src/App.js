import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import { BrowserRouter } from "react-router-dom"; // to navigate pages import

// Mui: React UI framework
import MuiNavbar from "./components/MuiNavbar";

function App() {
	return (
		<div className="App">
			<h1>Navbar</h1>

			<BrowserRouter>
				<MuiNavbar />
				<Search />
				<Category />
				<Pages />
			</BrowserRouter>
		</div>
	);
}

export default App;
