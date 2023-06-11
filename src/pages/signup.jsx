// import { useState } from "react";
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
	//Hook to navigate
	const navigate = useNavigate();

	//The submitHandler event occurs when a form is submitted.
	//The submit() method triggers the submit event
	//when you submit the credentials (first name, last name, email, password)
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			//Form
			//Asigning variables
			const credentials = new FormData(e.currentTarget);

			const firstName = credentials.get("firstName");
			const lastName = credentials.get("lastName");
			const email = credentials.get("email");
			const password = credentials.get("password");

			const { data: singupData, error } = await supabase.auth.signUp({
				email,
				password,
				options: {
					// it is important to writte the word options because if not the data is not store in supabase
					data: {
						first_name: firstName,
						last_name: lastName,
					},
				},
			});

			//Conditional
			if (error) {
				console.error("Error signing up:", error);
				throw error;
			}

			console.log("User signed up successfully:", singupData);

			// Verification email to the user email
			navigate("/pass-recipes/success");
			await supabase.auth.api.sendVerificationEmail(email, {
				redirectTo: `${window.location.origin}/pass-recipes/login`, //this doesn't works, I wanted to redirect to the login page after the user confirms the email
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
					{/* Form with first name, last name, email and passwork as required inputs */}
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
							aria-label="Sign up button"
							fullWidth
							variant="contained"
							sx={buttonStyles}
						>
							Sign Up
						</CommonButton>
						<Grid container justifyContent="flex-end">
							<Grid item>
								<Link
									//when click the link (event handler function onclick) navigate to the login page
									onClick={() => navigate("/pass-recipes/login")}
									aria-label="Link to sign in"
									variant="body2"
									sx={links}
								>
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
	cursor: "pointer",
	color: "#505c26",
	textDecoration: "none",

	"&:hover": {
		color: "#CDA082",
	},
};
