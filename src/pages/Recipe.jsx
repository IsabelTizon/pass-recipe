import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from "react";

function Recipe() {
	let params = useParams();
	const [details, setDetails] = useState({});
	const [activeTab, setActiveTab] = useState("recipe");

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
			<BoxTitle>
				<h2>{details.title}</h2>
			</BoxTitle>
			<Box>
				<img src={details.image} alt={""} />
				<Info>
					<Button
						className={activeTab === "Recipe" ? "active" : ""}
						onClick={() => setActiveTab("Recipe")}
					>
						Recipe
					</Button>
					<Button
						className={activeTab === "Ingredients" ? "active" : ""}
						onClick={() => setActiveTab("Ingredients")}
					>
						Ingredients
					</Button>

					{/*Condition */}
					{activeTab === "Recipe" && (
						<div>
							<h4 dangerouslySetInnerHTML={{ __html: details.summary }}></h4>
							<h4 dangerouslySetInnerHTML={{ __html: details.recipe }}></h4>
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
			</Box>
		</DetailWrapper>
	);
}

//STYLES

const BoxTitle = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	text-align: center;
`;

const Box = styled.div`
	display: flex;
	flex-direction: row;
`;
const DetailWrapper = styled.div`
	margin-top: 6rem;
	margin-bottom: 5rem;
	.active {
		background: linear-gradient(to right, #515d26, #505c26);

		color: #ffffff;
	}

	h2 {
		margin-bottom: 3rem;
	}
	li {
		font-size: 0.9rem;
		line-height: 2rem;
	}
	ul {
		margin-top: 2rem;
	}
	h4 {
		margin-top: 2rem;
	}
	img {
		border-radius: 10px;
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
	border: 0.1rem solid #505c26;
	margin-right: 2rem;
	font-weight: 600;
`;

const Info = styled.div`
	margin-left: 3rem;
`;

export default Recipe;
