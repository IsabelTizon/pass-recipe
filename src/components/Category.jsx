//Icons
import { FaPizzaSlice, FaHamburger, FaPepperHot } from "react-icons/fa";
import { GiNoodles, GiSushis, GiCheeseWedge } from "react-icons/gi";
//Styled Component
import styled from "styled-components";
//Router (links)
import { NavLink } from "react-router-dom";
//@query
import { devices } from "../Theme";

export default function Category() {
	return (
		// List of links with categories world food
		<List>
			{/* link to italian categorie food */}
			<SLink to={"/pass-recipes/cuisine/Italian"}>
				{/* icon */}
				<FaPizzaSlice />
				<h5>Italian</h5>
			</SLink>
			{/* link to amerian category food */}
			<SLink to={"/pass-recipes/cuisine/American"}>
				{/* icon */}
				<FaHamburger />
				<h5>American</h5>
			</SLink>
			{/* link to Thai category food */}
			<SLink to={"/pass-recipes/cuisine/Thai"}>
				{/* icon */}
				<GiNoodles />
				<h5>Thai</h5>
			</SLink>
			{/* link to Japanese category food */}
			<SLink to={"/pass-recipes/cuisine/Japanese"}>
				{/* icon */}
				<GiSushis />
				<h5>Japanese</h5>
			</SLink>
			{/* link to french category food */}
			<SLink to={"/pass-recipes/cuisine/French"}>
				{/* icon */}
				<GiCheeseWedge />
				<h5>Frenc</h5>
			</SLink>
			{/* link to mexican category food */}
			<SLink to={"/pass-recipes/cuisine/Mexican"}>
				{/* icon */}
				<FaPepperHot />
				<h5>Mexican</h5>
			</SLink>
		</List>
	);
}

//Styles

const List = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 2rem 0;
`;

const SLink = styled(NavLink)`
	//Mobile
	margin-right: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	text-decoration: none;
	background: linear-gradient(to right, #515d26, #505c26);
	width: 4.5rem;
	height: 4.5rem;
	transform: scale(0.8);

	//Tablet
	@media ${devices.tablet} {
		margin-right: 2rem;
	}

	h5 {
		color: #ffffff;
		font-size: 0.6rem;
		margin-top: 5px;
	}
	svg {
		color: #ffffff;
		font-size: 1.5rem;
	}
	&.active {
		background: linear-gradient(to right, #eed3c0, #cda082);

		svg {
			color: #ffffff;
		}
		h5 {
			color: #ffffff;
		}
	}
`;
