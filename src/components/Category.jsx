import { FaPizzaSlice, FaHamburger, FaCocktail, FaFish } from "react-icons/fa";
import { GiNoodles, GiChopsticks, GiCakeSlice } from "react-icons/gi";

import styled from "styled-components";
import { NavLink } from "react-router-dom"; // a= NavLink: react links

function Category() {
	return (
		<List>
			<NavLink to={"/cuisine/Italian"}>
				<FaPizzaSlice />
				<h5>Italian</h5>
			</NavLink>
			<NavLink to={"/cuisine/American"}>
				<FaHamburger />
				<h5>American</h5>
			</NavLink>
			<NavLink to={"/cuisine/Thai"}>
				<GiNoodles />
				<h5>Thai</h5>
			</NavLink>
			<NavLink to={"/cuisine/Japanese"}>
				<GiChopsticks />
				<h5>Japanese</h5>
			</NavLink>
			<NavLink to={"/cuisine/Seafood"}>
				<FaFish />
				<h5>Seafood</h5>
			</NavLink>
			<NavLink to={"/cuisine/Desserts"}>
				<GiCakeSlice />
				<h5>Desserts</h5>
			</NavLink>
			<NavLink to={"/cuisine/Cocktails"}>
				<FaCocktail />
				<h5>Cocktails</h5>
			</NavLink>
		</List>
	);
}

const List = styled.div`
	display: flex;
	justify-content: center;
    margin; 2rem 0;
`;

export default Category;
