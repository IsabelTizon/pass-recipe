import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Button, Box } from "@mui/material";
// import useMediaQuery from "@mui/material/useMediaQuery";
import { devices } from "../Theme";

export default function Recipe() {
	let params = useParams();
	// const matches = useMediaQuery("(min-width:360px)");

	const [details, setDetails] = useState([]);
	const [activeTab, setActiveTab] = useState("Recipe"); //Active Buttons

	const fetchDetails = async () => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
		);
		const detailData = await data.json();
		setDetails(detailData);
	};

	useEffect(() => {
		fetchDetails();
	}, [params.name]); // function with useCallback to fix it

	return (
		<DetailWrapper>
			<Box sx={boxTitle}>
				<h2>{details.title}</h2>
			</Box>
			<Box sx={boxStyles}>
				<img
					style={{
						minWidth: 300,
					}}
					src={details.image}
					alt="imageRecipe"
				/>
				<section>
					<Button
						sx={buttonStyles}
						// variant="authentification"
						size="small"
						className={activeTab === "Recipe" ? "active" : ""}
						onClick={() => setActiveTab("Recipe")}
					>
						Recipe
					</Button>
					<Button
						sx={buttonStyles}
						// variant="authentification"
						size="small"
						className={activeTab === "Ingredients" ? "active" : ""}
						onClick={() => setActiveTab("Ingredients")}
					>
						Ingredients
					</Button>

					{activeTab === "Recipe" ? (
						<div>
							<h4 dangerouslySetInnerHTML={{ __html: details.summary }}></h4>
							<h4 dangerouslySetInnerHTML={{ __html: details.recipe }}></h4>
						</div>
					) : null}

					{activeTab === "Ingredients" ? (
						<ul>
							{details.extendedIngredients.map((ingredient) => (
								<li key={ingredient.id}>{ingredient.original}</li>
							))}
						</ul>
					) : null}
				</section>
			</Box>
		</DetailWrapper>
	);
}

//STYLES
const boxStyles = {
	display: "flex",
	flexWrap: "wrap",
};

const DetailWrapper = styled.div`
	width: 80%;
	margin: 10% auto;
	margin-top: 6rem;
	margin-bottom: 5rem;

	.active {
		background: linear-gradient(to right, #515d26, #505c26);

		color: #ffffff;
	}
	div {
		//Mobile
		margin: 0;
		display: flex;
		//Tablet
		@media ${devices.tablet} {
			margin: 0;
		}
	}
	section {
		margin-left: 0;
		width: 90%;
		//desktop
		@media ${devices.desktop} {
			margin-left: 30px;
			width: 40%;
		}
	}

	h2 {
		margin-bottom: 3rem;
	}
	li {
		font-size: 0.9rem;
		line-height: 2rem;
	}
	ul {
		//Mobile
		margin-top: 2rem;
		//Tablet
		@media ${devices.tablet} {
			padding-left: 25px;
		}
	}

	h4 {
		margin-top: 2rem;
	}
	img {
		//Mobile
		width: 90%;
		margin: 0;
		height: 450px;
		border-radius: 10px;
		@media ${devices.desktop} {
			width: 50%;
			margin: 0;
		}
	}
`;

const boxTitle = {
	width: "100%",
	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
	textAlign: "center",
};

const buttonStyles = {
	margin: "0.3rem",
	color: "#505c26",
	border: "1px solid #505c26",
	"&:hover": {
		color: "#ffffff",
		background: "#505c26",
	},
};
