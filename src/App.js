import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import logo from "./img/logo192.png";
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
				<Pages />{" "}
			</BrowserRouter>
			{/* <Nav>
				<Logo to={"/"}>
					<img src={logo} alt="logo"></img>
				</Logo>
			</Nav>

			<BrowserRouter>
				<Main>
					<Search />
					<Category />
					<Pages />
				</Main>
			</BrowserRouter> */}
		</div>
	);
}

// Styles
// const Logo = styled(Link)`
// 	width: 0.2rem;
// `;

// const Nav = styled(Link)`
// 	padding: 4rem 0;
// 	display: flex;
// 	justify-content: flex-start;
// 	align-items: center;

// 	svg {
// 		font-size: 0.5rem;
// 	}
// `;

export default App;
