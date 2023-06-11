import React from "react";
// Meal file to return the fetch daily meal plan data
import Meal from "../components/Meal";
// Styled Component css and @query
import styled from "styled-components";
import { devices } from "../Theme";

export default function MealList({ mealData }) {
	const nutrients = mealData.nutrients;
	console.log(mealData);

	return (
		<>
			<Flex>
				{/*  Title */}
				<h1>Your Daily Plan</h1>
			</Flex>
			{/* Information */}
			<Macros>
				<List>
					{/* toFixed: rounded number, no decimal */}
					<ListItem>Calories: {nutrients.calories.toFixed(0)}</ListItem>
					<ListItem>
						Carbohydrates: {nutrients.carbohydrates.toFixed(0)}
					</ListItem>
					<ListItem>Fat: {nutrients.fat.toFixed(0)}</ListItem>
					<ListItem>Protein: {nutrients.protein.toFixed(0)}</ListItem>
				</List>
			</Macros>
			{/* Cards daily meal */}
			<Meals>
				{/* for each meal return */}
				{mealData.meals.map((meal) => {
					// return meal component
					return <Meal key={meal.id} meal={meal} />;
				})}
			</Meals>
		</>
	);
}

//Styles
const Flex = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;

	h1 {
		margin-top: 20px;
		margin-bottom: 20px;
		color: #515c26;
	}
`;
const Macros = styled.div`
	display: flex;
	flex-wrap: wrap;

	margin-top: 20px;
	margin-bottom: 40px;
`;
const Meals = styled.div`
	margin: 0 auto 10%;
	width: 90%;
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;

	//Desktop
	@media ${devices.desktop} {
		width: 60%;
	}
`;

const List = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 50%;
	margin: 0 auto;
	list-style-type: none;
`;
const ListItem = styled.div``;
