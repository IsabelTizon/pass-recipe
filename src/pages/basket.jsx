//React
import { Link } from "react-router-dom";
//Mui Materials
import {
	Box,
	Typography,
	Button as CommomButton,
	Container,
} from "@mui/material";
//Links
import { formatCurrency } from "../utilities/formatCurrency";
import { appStore } from "../store/appStore";

//Mui icons
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

export default function Basket() {
	const myItems = appStore((state) => state.myItems);
	const deleteBtn = appStore((state) => state.deleteBtn);

	if (myItems.length !== 0) {
		return (
			<Container sx={containerBasket}>
				{myItems.map((item) => {
					return (
						<Box key={item.id} sx={cardCourse}>
							<Box>
								<img
									width="100%"
									height="200px"
									src={item.imgUrl}
									alt={item.name}
								/>
							</Box>
							<Box sx={boxRight}>
								<Box>
									<Typography sx={titleCart}>
										{item.name}: {formatCurrency(item.price)}
									</Typography>
								</Box>

								<Box sx={boxBottom}>
									<Box sx={containerQuantity}>
										{/* DECREASE */}
										<CommomButton
											sx={btnQuantity}
											// onClick={() => decreaseBtn(item)}
										>
											-
										</CommomButton>

										{/* Quantity */}
										<Typography>2</Typography>

										{/* INCREASE */}
										<CommomButton sx={btnQuantity}>+</CommomButton>
									</Box>

									{/* DELEATE */}
									<Box sx={deleteStyles} onClick={() => deleteBtn(item)}>
										<DeleteOutlinedIcon fontSize="large" color="#505c26" />
									</Box>
								</Box>
							</Box>
						</Box>
					);
				})}
			</Container>
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
const containerBasket = {
	width: "50%",
	margin: "10% auto",
};
const cardCourse = {
	display: "flex",
	flexDirection: "row",
	backgroundColor: "#EED3C0",
	marginBottom: "5%",
	borderRadius: "20px",
};
const titleCart = {
	fontWeight: 700,
};
const boxRight = {
	display: "flex",
	flexDirection: "column",
	padding: "30px",
};
const boxBottom = {
	display: "flex",
	flexDirection: "row",
	marginTop: "25%",
};
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
const containerQuantity = {};
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
