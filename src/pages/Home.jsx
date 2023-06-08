import React from "react";
import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Category from "../components/Category";
import Search from "../components/Search";

import { motion } from "framer-motion";
import styled from "styled-components";
import { devices } from "../Theme";

import supabase from "../config/supabaseClient";

export default function Home() {
	console.log(supabase);
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
	//Mobile
	width: 90%;
	margin: 5% auto 10%;
	@media ${devices.tablet} {
		width: 80%;
	}
	@media ${devices.desktop} {
		width: 80%;
		margin: 3% auto 5%;
	}
`;
