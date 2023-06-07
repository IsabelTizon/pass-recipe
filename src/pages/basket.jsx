//React
import { Link } from "react-router-dom";
//Mui Materials
import { Box, Typography, Button as CommomButton } from "@mui/material";

//Links
import { formatCurrency } from "../utilities/formatCurrency";
import { appStore } from "../store/appStore";

//Mui icons
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

//Mui Theme
// import { Theme } from "../Theme";

// Mui Styles
import { styled } from "@mui/material/styles";

export default function Basket() {
	const myItems = appStore((state) => state.myItems);
	const deleteBtn = appStore((state) => state.deleteBtn);
	const imageStyle = {
		width: "100%",
		height: "100%",
		"@media (max-width: 360px)": {
			borderRadius: "20px 20px 0 0",
		},
		"@media (max-width: 768px)": {
			borderRadius: "20px 20px 0 0",
		},
		"@media (max-width: 1920px)": {
			borderRadius: "20px 0 0 20px",
		},
	};

	if (myItems.length !== 0) {
		return (
			<ContainerBasket>
				{myItems.map((item) => {
					return (
						<CardCourse key={item.id}>
							<BoxLeft>
								<img
									src={process.env.PUBLIC_URL + item.imgUrl}
									alt={item.name}
									style={imageStyle}
								/>
							</BoxLeft>
							<BoxRight>
								<Box>
									<TitleCard>
										{item.name}: {formatCurrency(item.price)}
									</TitleCard>
								</Box>

								<BoxBottom>
									<ContainerBtns>
										{/* DECREASE */}
										<CommomButton
											sx={btnQuantity}
											// onClick={() => decreaseBtn(item)}
										>
											-
										</CommomButton>

										{/* Quantity */}
										<QuantityCounter>
											<Quantity>2</Quantity>
										</QuantityCounter>
										{/* INCREASE */}
										<CommomButton sx={btnQuantity}>+</CommomButton>
									</ContainerBtns>

									{/* DELEATE */}
									<ContainerDelete>
										<Typography>{formatCurrency(item.price)}</Typography>
										<Box sx={deleteStyles} onClick={() => deleteBtn(item)}>
											<DeleteOutlinedIcon fontSize="large" color="#505c26" />
										</Box>
									</ContainerDelete>
								</BoxBottom>
							</BoxRight>
						</CardCourse>
					);
				})}
			</ContainerBasket>
		);
	} else {
		return (
			<Box sx={containerCartEmpty}>
				<Typography sx={headerEmptyBasket}>Your basket is empty</Typography>
				<Link to="/courses">
					<CommomButton sx={buttonStyles}>Go to Courses</CommomButton>
				</Link>
			</Box>
		);
	}
}

//STYLES
//Empty Basket styles
const containerCartEmpty = {
	width: "35%",
	margin: "10% auto",
};
const headerEmptyBasket = {
	color: "#505c26",
	marginTop: 3,
	marginBottom: 2,
	fontSize: "2.5rem",
	textAlign: "center",
};
//Basket with items styles
const ContainerBasket = styled("div")(({ theme }) => ({
	[theme.breakpoints.up("mobile")]: {
		width: "90%",
		margin: "10% auto",
	},
	[theme.breakpoints.up("desktop")]: {
		width: "50%",
	},
}));

const CardCourse = styled("div")(({ theme }) => ({
	[theme.breakpoints.up("mobile")]: {
		backgroundColor: "#EED3C0",
		marginBottom: "5%",
		borderRadius: "20px",
		display: "flex",
		flexDirection: "column",
		width: "90%",
		margin: "5% auto",
	},
	[theme.breakpoints.up("desktop")]: {
		display: "flex",
		flexDirection: "row",
	},
}));

const BoxLeft = styled("div")(({ theme }) => ({
	[theme.breakpoints.up("mobile")]: {},
	[theme.breakpoints.up("desktop")]: {
		width: "50%",
	},
}));

const TitleCard = styled("div")(({ theme }) => ({
	[theme.breakpoints.up("mobile")]: {
		fontWeight: 700,
		fontSize: "1.2rem",
	},
	[theme.breakpoints.up("desktop")]: {
		fontSize: "1.5rem",
	},
}));

const BoxRight = styled("div")(({ theme }) => ({
	[theme.breakpoints.up("mobile")]: {
		display: "flex",
		flexDirection: "column",
		padding: "30px",
	},
	[theme.breakpoints.up("desktop")]: {
		padding: "40px",
	},
}));

const BoxBottom = styled("div")(({ theme }) => ({
	[theme.breakpoints.up("mobile")]: {
		display: "flex",
		flexDirection: "column",
		marginTop: "15px",
	},
	[theme.breakpoints.up("desktop")]: {
		marginTop: "55px",
	},
}));

const ContainerBtns = styled("div")(({ theme }) => ({
	[theme.breakpoints.up("mobile")]: {
		display: "flex",
		flexDirection: "row",
	},
}));
const btnQuantity = {
	color: "#ffffff",
	background: "#505c26",
	fontSize: "1rem",
	border: "1px solid #505c26",
	"&:hover": {
		color: "#ffffff",
		background: "#505c26",
	},
};
const QuantityCounter = styled("div")(({ theme }) => ({
	[theme.breakpoints.up("mobile")]: {
		width: "60px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
}));

const Quantity = styled("p")`
	height: 100%;
`;

const ContainerDelete = styled("div")(({ theme }) => ({
	[theme.breakpoints.up("mobile")]: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: "25px",
	},
	[theme.breakpoints.up("desktop")]: {
		marginTop: "35px",
	},
}));

const deleteStyles = {
	color: "#505c26",
};
const buttonStyles = {
	color: "#ffffff",
	background: "#505c26",
	marginTop: 3,
	marginBottom: 2,
	minWidth: "100%",

	fontSize: "0.7rem",
	border: "1px solid #505c26",
	"&:hover": {
		color: "#505c26",
		background: "#EED3C0",
	},
};
