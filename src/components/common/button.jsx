import React from "react";
import Button from "@mui/material/Button";

// function button() {
//   return (
//     <div>button</div>
//   )
// }

// export default button
const CommonButton = ({
	children,
	color,
	disable,
	size,
	sx,
	className,
	onClick,
	variants,
}) => {
	return (
		<Button
			color={color}
			disable={disable}
			size={size}
			sx={sx}
			className={className}
			onClick={onClick}
			variants
		>
			{children}
		</Button>
	);
};

export default CommonButton;
