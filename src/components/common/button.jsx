import React from "react";
import Button from "@mui/material/Button";

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
			variants={variants ? "true" : "false"}
		>
			{children}
		</Button>
	);
};

export default CommonButton;
