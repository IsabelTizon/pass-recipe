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
										<CommomButton sx={btnQuantity}>-</CommomButton>
										<Typography>Total</Typography>
										<CommomButton sx={btnQuantity}>+</CommomButton>
									</Box>
									<Box sx={deleate}>
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
			<Box>
				<Typography>Your basket is empty</Typography>
				<Link to="/courses">
					<CommomButton sx={buttonStyles}>Go to Courses</CommomButton>
				</Link>
			</Box>
		);
	}
}

//STYLES
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
const deleate = {};
const buttonStyles = {
	color: "#505c26",
	fontSize: "0.7rem",
	border: "1px solid #505c26",
	"&:hover": {
		color: "#000000",
		background: "#EED3C0",
	},
};
const titleCart = {
	fontSize: "1.3rem",
};
