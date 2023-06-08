import React from "react";
import { useState } from "react";
import CommonButton from "../components/common/button";

import MealList from "../components/MealList";
import hero from "../img/meal-plan.jpg";

//Styles & @query
import styled from "styled-components";
import { devices } from "../Theme";

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
					<form>
						<input
							onChange={(e) => setCalories(e.target.value)}
							type="number"
							placeholder="Calories e.g. 2000"
						/>
						<CommonButton
							aria-label="Get meal"
							sx={buttonStyles}
							size="small"
							onClick={getMealData}
						>
							Get
						</CommonButton>
					</form>
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
	//Mobile
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

	width: 80%;

	@media ${devices.tablet} {
		width: 70%;
	}
	@media ${devices.desktop} {
		width: 45%;
	}

	h1 {
		color: #515c26;
		margin-bottom: 3%;
	}
	h4 {
		color: #000000;
		margin-bottom: 10%;
	}
	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		@media ${devices.tablet} {
			flex-direction: row;
		}
	}

	input {
		border: 1px solid #505c26;
		background-color: #ffffff;
		font-size: 1rem;
		color: #000000;
		padding: 0.5rem 3rem;
		border-radius: 5px;
		outline: none;
		width: 100%;
		margin-bottom: 5%;
		@media ${devices.tablet} {
			width: 70%;
			margin-bottom: 0;
		}
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
