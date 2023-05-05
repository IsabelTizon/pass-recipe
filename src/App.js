import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom"; // to navigate pages
function App() {
	return (
		<div className="App">
			<h1>Navbar</h1>
			<BrowserRouter>
				<Category />
				<Pages />
			</BrowserRouter>
		</div>
	);
}

export default App;
