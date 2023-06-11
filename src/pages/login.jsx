import * as React from "react";
//Router to navigate
import { useNavigate } from "react-router-dom";

// Supabase
import supabase from "../config/supabaseClient";
// import { Auth, ThemeSupa } from "@supabase/auth-ui-react";

//Mui materials
import {
	Avatar,
	Button as CommonButton,
	CssBaseline,
	TextField,
	// FormControlLabel,
	// Checkbox,
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

//Links
import { authStore } from "../store/authStore";
// ----------------------------------------------------------------------
// Theme
const defaultTheme = createTheme({
	palette: {
		success: { main: "#505c26" },
	},
});

export default function SignIn() {
	const navigate = useNavigate(); // Hook to navigate when you clinck
	const loginUser = authStore((state) => state.loginUser); //Zustand Global managment statements

	// Btn signin
	//The submitHandler event occurs when a form is submitted.
	//The submit() method triggers the submit event
	//when you submit your credentials (email and password) navigate to home
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			//Form
			const credentials = new FormData(e.currentTarget);
			//Input email
			const email = credentials.get("email");
			//input password
			const password = credentials.get("password");

			const { data, error } = await // Supabase database
			supabase.auth.signInWithPassword({
				email,
				password,
			});

			//Conditional
			if (error) {
				throw error;
			}

			console.log("data", data);

			//Calling authStore f() to see if the credential data is store in supabase
			loginUser(data);
			console.log("User sigin successfully:", data.user);

			// redirect to Home
			navigate("/pass-recipes/");
		} catch (error) {
			console.error("Error signing in:", error.message);
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
						Sign in
					</Typography>
					{/* Form with email and passwork as required inputs */}
					<Box
						component="form"
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						<CommonButton
							type="submit"
							fullWidth
							variant="contained"
							sx={buttonStyles}
						>
							Sign In
						</CommonButton>
						<Grid container>
							<Grid item>
								<Link
									//when click the link (event handler function onclick) navigate to the sign up page
									onClick={() => navigate("/pass-recipes/signup")}
									variant="body2"
									sx={links}
								>
									{"Don't have an account? Sign Up"}{" "}
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
