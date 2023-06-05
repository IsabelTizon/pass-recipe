import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Supabase
import supabase from "../config/supabaseClient";

//Mui materials
import {
	Avatar,
	Button as CommonButton,
	CssBaseline,
	TextField,
	Link,
	Grid,
	Box,
	Typography,
	Container,
} from "@mui/material";

// Mui icons
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

//Mui styles
import { createTheme, ThemeProvider } from "@mui/material/styles";

// ----------------------------------------------------------------------
const defaultTheme = createTheme({
	palette: {
		success: { main: "#505c26" },
	},
});

export default function SignUp() {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			//Asigning variables
			const credentials = new FormData(e.currentTarget);

			const firstName = credentials.get("firstName");
			const lastName = credentials.get("lastName");
			const email = credentials.get("email");
			const password = credentials.get("password");

			const { data, error } = await supabase.auth.signUp({
				firstName,
				lastName,
				email,
				password,
			});

			//Conditional
			if (error) {
				throw error;
			}
			console.log("User signed up successfully:", data.user);
			setUser(data.user);
			// Verification email to the user email
			navigate("/Success");
			await supabase.auth.api.sendVerificationEmail(email, {
				redirectTo: `${window.location.origin}/login`,
			});
		} catch (error) {
			console.error("Error signing up:", error.message);
		}
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar sx={icon}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign up
					</Typography>
					<Box
						component="form"
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}
					>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete="given-name"
									name="firstName"
									required
									fullWidth
									id="firstName"
									label="First Name"
									autoFocus
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id="lastName"
									label="Last Name"
									name="lastName"
									autoComplete="family-name"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="new-password"
								/>
							</Grid>
						</Grid>
						<CommonButton
							type="submit"
							fullWidth
							variant="contained"
							sx={buttonStyles}
						>
							Sign Up
						</CommonButton>
						<Grid container justifyContent="flex-end">
							<Grid item>
								{/* {user ? (
									<Typography>Check your email for the confirmation</Typography>
								) : null} */}
								<Link href="/login" variant="body2" sx={links}>
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}

//Styles
const icon = {
	color: "#505c26",
	background: "#EED3C0",
	margin: 1,
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

const links = {
	color: "#505c26",
	textDecoration: "none",

	"&:hover": {
		color: "#CDA082",
	},
};
