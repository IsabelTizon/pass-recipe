import { FaPizzaSlice, FaHamburger, FaPepperHot } from "react-icons/fa";
import { GiNoodles, GiSushis, GiCheeseWedge } from "react-icons/gi";

import styled from "styled-components";
import { NavLink } from "react-router-dom"; // a= NavLink: react links

function Category() {
	return (
		<List>
			<SLink to={"/cuisine/Italian"}>
				<FaPizzaSlice />
				<h5>Italian</h5>
			</SLink>
			<SLink to={"/cuisine/American"}>
				<FaHamburger />
				<h5>American</h5>
			</SLink>
			<SLink to={"/cuisine/Thai"}>
				<GiNoodles />
				<h5>Thai</h5>
			</SLink>
			<SLink to={"/cuisine/Japanese"}>
				<GiSushis />
				<h5>Japanese</h5>
			</SLink>
			<SLink to={"/cuisine/French"}>
				<GiCheeseWedge />
				<h5>Frenc</h5>
			</SLink>
			<SLink to={"/cuisine/Mexican"}>
				<FaPepperHot />
				<h5>Mexican</h5>
			</SLink>
		</List>
	);
}

//Styles

const List = styled.div`
	display: flex;
	justify-content: center;
	margin: 2rem 0;
`;

const SLink = styled(NavLink)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	margin-right: 2rem;
	text-decoration: none;
	background: linear-gradient(to right, #515d26, #505c26);
	width: 4.5rem;
	height: 4.5rem;
	transform: scale(0.8);

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

//Export
export default Category;
