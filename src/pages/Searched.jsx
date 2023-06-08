import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Category from "../components/Category";
import Search from "../components/Search";

//Styles & @query
import styled from "styled-components";
import { devices } from "../Theme";

function Searched() {
	const [searchedRecipes, setSearchedRecipes] = useState([]);
	let params = useParams();

	const getSearched = async (name) => {
		const check = localStorage.getItem("searchedRecipes") || false;

		if (check) {
			setSearchedRecipes(JSON.parse(check));
		} else {
			const data = await fetch(
				`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
			);

			const recipes = await data.json();
			console.log(
				"🚀 ~ file: Searched.jsx:24 ~ getSearched ~ recipes:",
				recipes
			);

			localStorage.setItem("searched", JSON.stringify(recipes.results));

			setSearchedRecipes(recipes.results);
		}
	};

	useEffect(() => {
		getSearched(params.search);
	}, [params.search]);

	return (
		<>
			<Search />
			<Category />
			<Grid>
				{searchedRecipes.map((item) => {
					return (
						<Card key={item.id}>
							<Link to={"/recipe/" + item.id}>
								<img src={item.image} alt="" />
								<Box>
									<h4>{item.title}</h4>
								</Box>
							</Link>
						</Card>
					);
				})}
			</Grid>
		</>
	);
}

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
	grid-gap: 2rem;
	width: 90%;
	margin: 5% auto;

	@media ${devices.tablet} {
		width: 85%;
	}
	@media ${devices.desktop} {
		width: 80%;
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

export default Searched;
