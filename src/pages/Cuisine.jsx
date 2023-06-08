import React from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom"; //useParams: to put the keyword in the URL
import { useEffect, useState } from "react";
import Category from "../components/Category";
import Search from "../components/Search";

//Styles & @query
import styled from "styled-components";
import { devices } from "../Theme";

function Cuisine() {
	const [cuisine, setCuisine] = useState([]);
	let params = useParams();

	useEffect(() => {
		getCuisine(params.type);
		console.log(params.type);
	}, [params.type]);

	const getCuisine = async (name) => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
		);

		const cuisine = await data.json();

		setCuisine(cuisine.results);
	};

	return (
		<Flex>
			<Search />
			<Category />
			<Grid
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				{cuisine.map((item) => {
					return (
						<Card key={item.id}>
							<Link to={"/recipe/" + item.id}>
								<img src={item.image} alt="" />
								<h4>{item.title}</h4>
							</Link>
						</Card>
					);
				})}
			</Grid>
		</Flex>
	);
}

const Flex = styled.div`
	display: flex;
	flex-direction: column;

	width: 90%;
	margin: 5% auto;

	@media ${devices.desktop} {
		width: 60%;
		margin: 3% auto;
	}
`;
const Grid = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
	grid-gap: 3rem;
	margin-top: 5%;
	margin-bottom: 15%;
	@media ${devices.tablet} {
		margin-bottom: 10%;
	}
	@media ${devices.desktop} {
		margin-top: 2%;
		margin-bottom: 0;
	}
`;
const Card = styled.div`
	img {
		width: 100%;
		border-radius: 2rem;
	}
	a {
		text-decoration: none;
	}
	h4 {
		text-align: center;
		padding: 1rem;
	}
`;
export default Cuisine;
