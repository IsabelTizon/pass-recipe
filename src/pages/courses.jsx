// import React, { useState } from "react";
//Mui Materials
import {
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	Avatar,
	Typography,
	Box,
	Button as CommonButton,
} from "@mui/material";
// import { styled } from "@mui/material/styles";
// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import IconButton from "@mui/material/IconButton";

// Mui Colors
import { green } from "@mui/material/colors";
// Mui Icons
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

//Links
import { storeItems } from "../components/courses/storeItems";
import { formatCurrency } from "../utilities/formatCurrency";
import { appStore } from "../store/appStore";

// Images
import Logo from "../img/Logo.png";

// Mui Styles
import { styled } from "@mui/material/styles";

export default function Courses() {
	const addProduct = appStore((state) => state.addProduct);

	return (
		<>
			<MainCourses>
				<Box sx={containerTitle}>
					<Typography sx={title}>Pass Recipe Courses</Typography>
				</Box>
				<Box sx={wrapCourses}>
					{storeItems.map((item) => (
						<Card key={item.id} sx={{ maxWidth: 345, mb: 5 }}>
							<CardHeader
								avatar={
									<Avatar sx={{ bgcolor: green[800] }} aria-label="course">
										<img src={Logo} width="40" height="30" alt="logo"></img>
									</Avatar>
								}
								// action={
								// 	<IconButton aria-label="settings">
								// 		<MoreVertIcon />
								// 	</IconButton>
								// }

								title={<Typography sx={titleCart}>{item.name}</Typography>}
								subheader={
									<Box sx={subheaderCart}>
										<Typography>Beginners</Typography>
										<Typography>{formatCurrency(item.price)}</Typography>
									</Box>
								}
							/>
							<CardMedia
								component="img"
								height="194"
								image={process.env.PUBLIC_URL + item.imgUrl}
								alt="courseImage"
							/>

							<CardContent>
								<Typography variant="body2" color="text.secondary">
									{item.cardContent}
								</Typography>
							</CardContent>

							<Box sx={shoppingBtnContainer}>
								<CommonButton
									onClick={() => addProduct(item)}
									sx={addingCartBtn}
								>
									ADD TO CART
								</CommonButton>
							</Box>
						</Card>
					))}
				</Box>
			</MainCourses>
		</>
	);
}

//Styles
// Main
const MainCourses = styled("div")(({ theme }) => ({
	[theme.breakpoints.up("mobile")]: {
		width: "90%",
		margin: "5% auto",
	},
	[theme.breakpoints.up("desktop")]: {
		width: "80%",
	},
}));

//Title Page
const containerTitle = {
	display: "flex",
	justifyContent: "center",
	marginBottom: "2rem",
};
const title = {
	color: "#505c26",
	fontSize: "2rem",
};
//Courses wrap
const wrapCourses = {
	display: "flex",
	flexWrap: "wrap",
	gap: "4%",
};
const titleCart = {
	fontSize: "1.3rem",
};
const subheaderCart = {
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
};
const shoppingBtnContainer = {
	display: "flex",
	flexDirection: "row",
};

const addingCartBtn = {
	width: "100%",
	color: "#ffffff",
	background: "#505c26",
	fontSize: "0.7rem",
	border: "1px solid #505c26",
	"&:hover": {
		color: "#000000",
		background: "#EED3C0",
	},
};
