import React from "react";
import { useState } from "react";
import styled from "styled-components";
import CommonButton from "../components/common/button";

import MealList from "../components/MealList";
import hero from "../img/meal-plan.jpg";

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
			<Hero>
				<img className="hero" src={hero} alt="hero meal plan" />
				{/* React Fragment */}
				<Plan>
					<h1>Get Daily Meal Plan</h1>
					<h4>
						Choose your daily plan based in the calories you want to ingest
					</h4>
					<div>
						<input
							onChange={(e) => setCalories(e.target.value)}
							type="number"
							placeholder="Calories e.g. 2000"
						/>
						<CommonButton sx={buttonStyles} size="small" onClick={getMealData}>
							Get
						</CommonButton>
					</div>
				</Plan>
				{mealData && <MealList mealData={mealData} />}
			</Hero>
		</>
	);
}

//Styles
const Hero = styled.div`
	img.hero {
		width: 100vw;
		height: calc(100vh - 100px);
		position: relative;
	}
`;
const Plan = styled.form`
	padding: 3%;
	text-align: center;
	background-color: rgba(224, 224, 224, 0.5);
	border-radius: 5px;

	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	display: flex;
	flex-direction: column;

	/* div {
		width: 30%;
		height: 2rem;
		border-radius: 1rem;
		position: relative;
		background: linear-gradient(#494949, #313131);
	} */
	h1 {
		color: #515c26;
		margin-bottom: 3%;
	}
	h4 {
		color: #000000;
		margin-bottom: 10%;
	}
	div {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	input {
		border: 1px solid #505c26;
		background-color: #ffffff;
		font-size: 1rem;
		color: #000000;
		padding: 0.5rem 3rem;
		border-radius: 5px;
		outline: none;
		width: 70%;
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
