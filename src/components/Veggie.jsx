import { useEffect, useState } from "react";
import styled from "styled-components"; // atatached the style to my function componets
//Splide: the carousel
//SplideSlide: It's gonna be each individual image or card
import { Splide, SplideSlide } from "@splidejs/react-splide";
//
import "@splidejs/splide/dist/css/splide.min.css";

function Veggie() {
	const [veggie, setVeggie] = useState([]);
	// when the page load
	useEffect(() => {
		//array function to invoke the function with empty array
		getVeggie();
	}, []);

	const getVeggie = async () => {
		// Storing our fetch in our localStorage for don't fetch over and over again and don't loose my maximun of request per day in spoonaculary API

		const check = localStorage.getItem("veggie"); // get in the item

		if (check) {
			// If there is an item in localStorage, set it and don't do the fetching again

			setVeggie(JSON.parse(check)); // JSON.parse: takes the argument of the JSON source and converts it to the JSON format, because the data was in string
		} else {
			const api = await fetch(
				// 'await' expressions are only allowed within async functions to wait to process the code before pop in in the next line
				`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SECOND_API_KEY}&number=9`
			);
			const data = await api.json();

			localStorage.setItem("veggie", JSON.stringify(data.recipes)); // Saving the array like a string
			// console.log(data);
			setVeggie(data.recipes);
			console.log(data.recipes);
		}
	};

	// return Veggie
	return (
		<div>
			<Wrapper>
				<h3> Veggie Picks</h3>
				{/*Splide: carousel*/}
				{/*Splide options: to add the number of pictures per screem */}
				<Splide
					options={{
						perPage: 4,
						arrows: false,
						pagination: false,
						drag: "free",
						gap: "5rem",
					}}
				>
					{veggie.map((recipe) => {
						return (
							//key={recipe.id}:
							<SplideSlide key={recipe.id}>
								{/*each card would be a slide*/}
								<Card>
									{/*return Recipe Title*/}
									<p>{recipe.title}</p>
									{/*return imag*/}
									<img src={recipe.image} alt="recipe.title" />
									<Gradient />
								</Card>
							</SplideSlide>
						);
					})}
				</Splide>
			</Wrapper>
		</div>
	);
}

//CSS
//Wrapper cards
const Wrapper = styled.div`
	margin: 4rem 0rem;
`;
//card style
const Card = styled.div`
	min-height: 25rem;
	border-radius: 2rem;
	overflow: hidden;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		border-radius: 2rem;
		position: absolute;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	p {
		position: absolute;
		z-index: 10;
		color: white;
		width: 100%;
		text-align: center;
		font-weight: 600;
		font-size: 1rem;
	}
`;
const Gradient = styled.div`
	z-index: 3;
	position: absolute;
	width: 100%;
	height: 100%;
	background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veggie;
