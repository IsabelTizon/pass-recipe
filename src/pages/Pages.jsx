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
import Basket from "./basket";
import Success from "./Success";
import Blog from "./Blog";
import Favourites from "./Favourites";
import MyRecipes from "./MyRecipes";

export default function Pages() {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<Routes Location={location} key={location.pathname}>
				<Route path="/pass-recipes/" element={<Home />} />
				<Route path="/pass-recipes/cuisine/:type" element={<Cuisine />} />
				<Route path="/pass-recipes/searched/:search" element={<Searched />} />
				<Route path="/pass-recipes/recipe/:name" element={<Recipe />} />
				<Route path="/pass-recipes/meal-planning" element={<MealPlanning />} />
				<Route path="/pass-recipes/login" element={<Login />} />
				<Route path="/pass-recipes/signup" element={<SignUp />} />
				<Route path="/pass-recipes/courses" element={<Courses />} />
				<Route path="/pass-recipes/basket" element={<Basket />} />
				<Route path="/pass-recipes/success" element={<Success />} />
				<Route path="/pass-recipes/blog" element={<Blog />} />
				<Route path="/pass-recipes/favourites" element={<Favourites />} />
				<Route path="/pass-recipes/my-recipes" element={<MyRecipes />} />
			</Routes>
		</AnimatePresence>
	);
}
