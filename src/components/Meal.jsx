import React from "react";
import { useState, useEffect } from "react";

export default function MealRecipes({ meal }) {
	const [imageUrl, setImageUrl] = useState("");
	console.log(meal);

	const getMeal = async () => {
		const api = await fetch(
			`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=false`
		);
		const data = await api.json();
		setImageUrl(data.image);
	};

	useEffect(() => {
		getMeal(meal.id);
		console.log(meal.id);
	});

	return (
		<article>
			<h1>{meal.title}</h1>
			<img src={imageUrl} alt="recipe" />
			<ul>
				<li>Preparation time: {meal.readyInMinutes} minutes</li>
				<li>Number of servings: {meal.servings}</li>
			</ul>
			<a href={meal.sourceUrl}>Go to recipe</a>
		</article>
	);
}
