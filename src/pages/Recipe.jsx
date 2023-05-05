import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from "react";

function Recipe() {
	let params = useParams();
	const [details, setDetails] = useState({});
	const [activeTab, setActiveTab] = useState("instructions");

	const fetchDetails = async () => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_SECOND_API_KEY}`
		);
		const detailData = await data.json();
		setDetails(detailData);
	};

	useEffect(() => {
		fetchDetails();
	}, [params.id]);

	return (
		<DetailWrapper>
			<div>
				<h2>{details.title}</h2>
				<img src={details.image} alt={""} />
			</div>
			<Info>
				<Button
					className={activeTab === "Instructions" ? "active" : ""}
					onClick={() => setActiveTab("Instructions")}
				>
					Instructions
				</Button>
				<Button
					className={activeTab === "Ingredients" ? "active" : ""}
					onClick={() => setActiveTab("Ingredients")}
				>
					Ingredients
				</Button>

				{/*Condition */}
				{activeTab === "Instructions" && (
					<div>
						<h4 dangerouslySetInnerHTML={{ __html: details.summary }}></h4>
						<h4 dangerouslySetInnerHTML={{ __html: details.instructions }}></h4>
					</div>
				)}
				{activeTab === "Ingredients" && (
					<ul>
						{details.extendedIngredients.map((ingredient) => (
							<li key={ingredient.id}>{ingredient.original}</li>
						))}
					</ul>
				)}
			</Info>
		</DetailWrapper>
	);
}

const DetailWrapper = styled.div`
	margin-top: 10rem;
	margin-bottom: 5rem;
	display: flex;
	.active {
		background: linear-gradient(#494949, #313131);
		color: #ffffff;
	}
	h2 {
		margin-bottom: 2rem;
	}
	li {
		font-size: 1.2rem;
		line-height: 2.5rem;
	}
	ul {
		margin-top: 2rem;
	}
`;

// const ImageId = styled.div`
// 	img {
// 		width: 90%;
// 	}
// `;
const Button = styled.button`
	padding: 1rem 2rem;
	color: #313131;
	background: #ffffff;
	border: 2px solid #000000;
	margin-right: 2rem;
	font-weight: 600;
`;

const Info = styled.div`
	margin-left: 3rem;
`;

export default Recipe;
