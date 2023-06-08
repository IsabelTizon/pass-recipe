import { useEffect, useState } from "react";

//Splide: the carousel
//SplideSlide: It's gonna be each individual image or card
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
//
import "@splidejs/splide/dist/css/splide.min.css";

//@query
import styled from "styled-components";
import { devices } from "../Theme";

export default function Popular() {
	const [popular, setPopular] = useState([]);
	// when the page load
	useEffect(() => {
		//array function to invoke the function with empty array
		getPopular();
	}, []);

	const getPopular = async () => {
		// Storing our fetch in our localStorage for don't fetch over and over again and don't loose my maximun of request per day in spoonaculary API

		const check = localStorage.getItem("popular") || false; // get in the item

		if (check) {
			// If there is an item in localStorage, set it and don't do the fetching again

			setPopular(JSON.parse(check)); // JSON.parse: takes the argument of the JSON source and converts it to the JSON format, because the data was in string
		} else {
			const api = await fetch(
				// 'await' expressions are only allowed within async functions to wait to process the code before pop in in the next line
				`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
			);
			const data = await api.json();
			console.log("🚀 ~ file: Popular.jsx:33 ~ getPopular ~ data:", data);

			localStorage.setItem("popular", JSON.stringify(data.recipes)); // Saving the array like a string
			// console.log(data);
			setPopular(data.recipes);
			console.log(data.recipes);
		}
	};

	// return Popular
	return (
		<>
			<Wrapper>
				<h3> Popular Picks</h3>
				{/*Splide: carousel*/}
				{/*Splide options: to add the number of pictures per screem */}
				<Splide
					options={{
						perPage: 4,
						arrows: false,
						pagination: false,
						drag: "free",
						gap: "2rem",
						breakpoints: {
							1200: {
								perPage: 4,
							},
							900: {
								perPage: 2,
							},
							600: {
								perPage: 1,
							},
						},
					}}
				>
					{popular.map((recipe) => {
						return (
							//key={recipe.id}:
							<SplideSlide key={recipe.id}>
								{/*each card would be a slide*/}
								<Card>
									<Link to={"/recipe/" + recipe.id}>
										{/*return imag*/}
										<img src={recipe.image} alt="recipe.title" />
										{/*return Recipe Title*/}
										<Box>
											{/*return title img */}
											<p>{recipe.title}</p>
										</Box>
										{/* <Gradient /> */}
									</Link>
								</Card>
							</SplideSlide>
						);
					})}
				</Splide>
			</Wrapper>
		</>
	);
}

//CSS
//Wrapper cards
const Wrapper = styled.div`
	margin: 0;
`;
//card style
const Card = styled.div`
	display: flex;
	flex-direction: column;
	height: 300px;
	border-radius: 2rem;
	border: 1px solid #718135;
	margin-bottom: 15%;

	@media ${devices.desktop} {
		height: 250px;
		width: 85%;
	}

	img {
		border-radius: 2rem 2rem 0 0;
		width: 100%;
		height: 100%;
	}

	p {
		position: absolute;
		z-index: 10;
		color: #000000;
		width: 85%;
		margin: 3% auto;
		font-weight: 600;
		font-size: 0.8rem;

		@media ${devices.tablet} {
			font-size: 1rem;
		}
		@media ${devices.desktop} {
			width: 80%;
			font-size: 0.8rem;
		}
	}
`;

const Box = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	text-align: center;
`;
