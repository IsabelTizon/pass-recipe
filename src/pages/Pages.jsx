import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// PAGES
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import MealPlanning from "./mealPlanning";
import Login from "./login";
import SignUp from "./signup";
import Courses from "./courses";
import Basket from "./Basket";
import Success from "./Success";

export default function Pages() {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<Routes Location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				<Route path="/cuisine/:type" element={<Cuisine />} />
				<Route path="/searched/:search" element={<Searched />} />
				<Route path="/recipe/:name" element={<Recipe />} />
				<Route path="/mealPlanning" element={<MealPlanning />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/courses" element={<Courses />} />
				<Route path="/Basket" element={<Basket />} />
				<Route path="/Success" element={<Success />} />
			</Routes>
		</AnimatePresence>
	);
}
