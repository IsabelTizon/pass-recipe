import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
	const [input, setInput] = useState("");
	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		navigate("/searched/" + input);
	};
	return (
		<div>
			<FormStyle onSubmit={submitHandler}>
				<div>
					<FaSearch></FaSearch>
					<input
						onChange={(e) => setInput(e.target.value)}
						type="text"
						value={input}
					/>
				</div>
			</FormStyle>
		</div>
	);
}

const FormStyle = styled.form`
	margin: 0 8rem;
	div {
		width: 100%;
		height: 2rem;
		border-radius: 1rem;
		position: relative;
		/* border-color: 1px solid #a62323; */
		background: linear-gradient(#494949, #313131);
	}

	input {
		border: 1px solid #505c26;
		/* background: linear-gradient(#494949, #313131); */
		background-color: #ffffff;
		font-size: 1rem;
		color: #ffffff;
		padding: 0.5rem 3rem;
		border-radius: 1rem;
		outline: none;
		width: 100%;
	}
	svg {
		position: absolute;
		top: 50%;
		left: 0;
		transform: translate(100%, -50%);
		color: #505c26;
	}
`;
export default Search;
