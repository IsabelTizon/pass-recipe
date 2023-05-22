import React from "react";
import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Category from "../components/Category";
import Search from "../components/Search";

import { motion } from "framer-motion";
import styled from "styled-components";

export default function Home() {
	return (
		<>
			<motion.div
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				<MainHome>
					<Search />
					<Category />
					<Veggie />
					<Popular />
				</MainHome>
			</motion.div>
		</>
	);
}

//Styles
const MainHome = styled.div`
	width: 80%;
	margin: 0 auto;
	padding-top: 5%;
`;
