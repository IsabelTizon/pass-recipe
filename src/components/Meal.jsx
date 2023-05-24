import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Meal({ meal }) {
	const [imageUrl, setImageUrl] = useState("");

	useEffect(() => {
		fetch(
			`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=false`
		)
			.then((response) => response.json())
			.then((data) => {
				setImageUrl(data.image);
			});
	}, [meal.id]);

	return (
		<>
			<Card>
				<Link to={"/recipe/" + meal.id}>
					{/*return imag*/}
					<img className="imageMealCard" src={imageUrl} alt="recipe" />
					{/*return Recipe Title*/}
					<div>
						<h4>{meal.title}</h4>
						<Flex>
							{/*return title img */}
							<p>Preparation time: {meal.readyInMinutes} minutes</p>
							<p>Number of servings: {meal.servings}</p>
						</Flex>
					</div>
				</Link>
			</Card>
		</>
	);
}

//card style
const Card = styled.div`
	border-radius: 2rem;
	overflow: hidden;
	border: 1px solid #718135;
	width: 30%;

	img.imageMealCard {
		border-radius: 2rem 2rem 0 0;
		width: 100%;
		object-fit: cover;
	}
	div {
		padding: 5px;
	}
	h4 {
		font-size: 1rem;
		font-weight: 600;
		text-decoration: none;
	}
	p {
		color: #000000;
		padding-top: 0.5rem;
		font-size: 0.8rem;
		text-decoration: none;
	}
`;
const Flex = styled.div`
	display: flex;
	flex-direction: column;
`;
