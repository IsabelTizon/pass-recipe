import { useEffect, useState } from "react";
import styled from "styled-components"; // atatached the style to my function componets

function Popular() {
	const [popular, setPopular] = useState([]);
	// when the page load
	useEffect(() => {
		//array function to invoke the function with empty array
		getPopular();
	}, []);

	const getPopular = async () => {
		// 'await' expressions are only allowed within async functions to wait to process the code before pop in in the next line
		const api = await fetch(
			`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
		);

		const data = await api.json();
		// console.log(data);
		setPopular(data.recipes);
	};

	// return Popular
	return (
		<div>
			{popular.map((recipe) => {
				return (
					// return Recipe Title
					// <div key={recipe.id}>
					// 	<p>{recipe.title}</p>
					// </div>
					<Wrapper>
						<h3> Popular Picks</h3>
						{popular.map((recipe) => {
							return (
								<Card>
									<p>{recipe.title}</p>
								</Card>
							);
						})}
					</Wrapper>
				);
			})}
		</div>
	);
}

const Wrapper = styled.div`
	margin: 4rem 0rem;
`;

const Card = styled.div`
	min-height: 25rem;
	boder-radius: 2rem;
`;
export default Popular;
