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
import { appStore } from "../Hooks/appStore";

// Images
import Logo from "../img/Logo.png";

// const ExpandMore = styled((props) => {
// 	const { expand, ...other } = props;
// 	return <IconButton {...other} />;
// })(({ theme, expand }) => ({
// 	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
// 	marginLeft: "auto",
// 	transition: theme.transitions.create("transform", {
// 		duration: theme.transitions.duration.shortest,
// 	}),
// }));

export default function Courses() {
	// const [expanded, setExpanded] = React.useState(false);

	// const handleExpandClick = () => {
	// 	setExpanded(!expanded);
	// };
	const addProduct = appStore((state) => state.addProduct);
	return (
		<Box sx={mainCourses}>
			<Box sx={wrapCourses}>
				{storeItems.map((item, index) => (
					<Card key={item.id} sx={{ maxWidth: 345 }}>
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
							title={item.name}
							subheader="beginners"
						/>
						<CardMedia
							component="img"
							height="194"
							image={item.imgUrl}
							alt="courseImage"
						/>

						<CardContent>
							<Typography variant="body2" color="text.secondary">
								{item.cardContent}
							</Typography>
						</CardContent>
						{/* <CardActions disableSpacing>
								<IconButton aria-label="add to favorites">
									<FavoriteIcon />
								</IconButton>
								<IconButton aria-label="share">
									<ShareIcon />
								</IconButton> */}
						{/* <ExpandMore
									expand={expanded}
									onClick={handleExpandClick}
									aria-expanded={expanded}
									aria-label="show more"
								>
									<ExpandMoreIcon />
								</ExpandMore> */}
						{/* </CardActions> */}
						{/* <Collapse in={expanded} timeout="auto" unmountOnExit>
								<CardContent>
									<Typography paragraph>Method:</Typography>
									<Typography paragraph>
										Heat 1/2 cup of the broth in a pot until simmering, add
										saffron and set aside for 10 minutes.
									</Typography>
									<Typography paragraph>
										Heat oil in a (14- to 16-inch) paella pan or a large, deep
										skillet over medium-high heat. Add chicken, shrimp and
										chorizo, and cook, stirring occasionally until lightly
										browned, 6 to 8 minutes. Transfer shrimp to a large plate
										and set aside, leaving chicken and chorizo in the pan. Add
										pimentón, bay leaves, garlic, tomatoes, onion, salt and
										pepper, and cook, stirring often until thickened and
										fragrant, about 10 minutes. Add saffron broth and remaining
										4 1/2 cups chicken broth; bring to a boil.
									</Typography>
									<Typography paragraph>
										Add rice and stir very gently to distribute. Top with
										artichokes and peppers, and cook without stirring, until
										most of the liquid is absorbed, 15 to 18 minutes. Reduce
										heat to medium-low, add reserved shrimp and mussels, tucking
										them down into the rice, and cook again without stirring,
										until mussels have opened and rice is just tender, 5 to 7
										minutes more. (Discard any mussels that don&apos;t open.)
									</Typography>
									<Typography>
										Set aside off of the heat to let rest for 10 minutes, and
										then serve.
									</Typography>
								</CardContent>
							</Collapse> */}
						<Typography>{formatCurrency(item.price)}</Typography>
						<Box sx={shopping}>
							<CommonButton onClick={addProduct} sx={addingCartButton}>
								ADD TO CART
							</CommonButton>
							{/* <AddProduct /> */}
						</Box>
					</Card>
				))}
			</Box>
		</Box>
	);
}

//Styles
const mainCourses = {
	width: "80%",
	margin: "5% auto",
};
const wrapCourses = {
	display: "flex",
	flexWrap: "wrap",
	gap: "5%",
};

const shopping = {
	display: "flex",
	flexDirection: "row",
};

const addingCartButton = {
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
