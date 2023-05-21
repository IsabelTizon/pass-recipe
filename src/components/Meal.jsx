import React from "react";
import { useState, useEffect } from "react";

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
