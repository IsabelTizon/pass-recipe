//Styles and @query
import styled from "styled-components";
import { devices } from "../Theme";

// Hook
import { useState } from "react";
//Search icon
import { FaSearch } from "react-icons/fa";

// Navigation
import { useNavigate } from "react-router-dom";

export default function Search() {
	//useState() is React Hook that allows you to add state to a functional component.
	//It returns an array with two values: the current state and a function to update it.The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.
	//useState() components to store dynamic values depending of the search
	//useState() the component changes depending on the state2
	const [input, setInput] = useState("");
	const navigate = useNavigate();

	//The submitHandler event occurs when a form is submitted.
	//The submit() method triggers the submit event
	//when you submit the search navigate to the searched input
	const submitHandler = (e) => {
		e.preventDefault();
		navigate("/pass-recipes/searched/" + input);
	};
	return (
		<>
			<FormStyle onSubmit={submitHandler}>
				<div>
					{/* seacrh icon */}
					<FaSearch></FaSearch>
					<input
						//The onchange event occurs when the value of an HTML element is changed. In this case the user change the value of the input search
						onChange={(e) => setInput(e.target.value)}
						type="text"
						value={input}
						aria-label="Search"
					/>
				</div>
			</FormStyle>
		</>
	);
}

const FormStyle = styled.form`
	@media ${devices.mobile} {
		width: 90%;
		margin: 7% auto;
	}
	@media ${devices.tablet} {
		width: 80%;
	}
	@media ${devices.desktop} {
		width: 60%;
		margin: 2% auto;
	}

	div {
		width: 100%;
		height: 2rem;
		border-radius: 1rem;
		position: relative;
		background: linear-gradient(#494949, #313131);
	}

	input {
		border: 1px solid #505c26;
		background-color: #ffffff;
		font-size: 1rem;
		color: #000000;
		padding: 0.5rem 3rem;
		border-radius: 1rem;
		outline: none;
		width: 100%;
		display: flex;
		justify-content: center;
	}
	svg {
		position: absolute;
		top: 50%;
		left: 0;
		transform: translate(100%, -50%);
		color: #505c26;
	}
`;
