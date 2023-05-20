import React from "react";
import { useState } from "react";
import styled from "styled-components";
import CommonButton from "../components/common/button";

import MealList from "../components/MealList";

export default function MealPlanning() {
	const [mealData, setMealData] = useState(null);
	const [calories, setCalories] = useState(2000);

	const getMealData = async () => {
		const api = await fetch(
			`https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}&timeFrame=day&targetCalories=${calories}`
		);

		const data = await api.json();
		setMealData(data);
		console.log(data);
	};

	return (
		<>
			{/* React Fragment */}
			<FormStyle>
				<input
					onChange={(e) => setCalories(e.target.value)}
					type="number"
					placeholder="Calories e.g. 2000"
				/>
				<CommonButton sx={buttonStyles} size="small" onClick={getMealData}>
					Get Daily Meal Plan
				</CommonButton>
			</FormStyle>

			{mealData && <MealList mealData={mealData} />}
		</>
	);
}

//Styles
const FormStyle = styled.form`
	margin: 0 8rem;
	div {
		width: 30%;
		height: 2rem;
		border-radius: 1rem;
		position: relative;
		background: linear-gradient(#494949, #313131);
	}

	input {
		border: 1px solid #505c26;
		background-color: #ffffff;
		font-size: 1rem;
		color: #000000;
		padding: 0.5rem 3rem;
		border-radius: 1rem;
		outline: none;
		width: 40%;
	}
`;
const buttonStyles = {
	color: "#ffffff",
	background: "#505c26",
	"&:hover": {
		color: "#ffffff",
		background: "#576a04",
	},
};
