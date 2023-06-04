// import * as React from "react";
// import { useNavigate } from "react-router-dom";
// // import { useEffect, useHistory } from "react";
// import { useState } from "react";

// // Supabase
// import supabase from "../config/supabaseClient";

// //Mui materials
// import {
// 	Avatar,
// 	Button as CommonButton,
// 	CssBaseline,
// 	TextField,
// 	FormControlLabel,
// 	Checkbox,
// 	Link,
// 	Grid,
// 	Box,
// 	Typography,
// 	Container,
// } from "@mui/material";

// // Mui icons
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

// //Mui styles
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// // ----------------------------------------------------------------------

// export default function SignUp() {
// 	const defaultTheme = createTheme({
// 		palette: {
// 			success: { main: "#505c26" },
// 		},
// 	});

// 	console.log("my supabase", supabase);
// 	const navigate = useNavigate();
// 	// const history = useHistory();

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		const credentials = new FormData(e.currentTarget);

// 		const firstName = credentials.get("firstName");
// 		const lastName = credentials.get("lastName");
// 		const email = credentials.get("email");
// 		const password = credentials.get("password");

// 		try {
// 			//Asigning variables
// 			const data = new FormData(e.currentTarget);

// 			const { user, error } = await supabase.auth.signUp({
// 				firstName,
// 				lastName,
// 				email,
// 				password,
// 			});
// 			const [msg, setMsg] = useState("");

// 			//Console
// 			console.log({
// 				firstName: data.get("firstName"),
// 				lastName: data.get("lastName"),
// 				email: data.get("email"),
// 				password: data.get("password"),
// 			});

// 			//Conditional
// 			if (error) {
// 				throw error;
// 			}
// 			console.log("User signed up successfully:", user);

// 			setLMsg("Check your email for the confirmation");
// 			// Verification email to the user email
// 			supabase.auth.api.sendVerificationEmail(email);

// 			// redirect the user to a different page
// 			navigate("/Success");
// 		} catch (error) {
// 			console.error("Error signing up:", error.message);
// 		}
// 	};

// 	// const supabaseURL = "https://bcfaiwvdnquvjdekpuwk.supabase.co";

// 	// const confirmationLink = `${supabase}/auth/confirm?token=`;
// 	// const confirmationLink = `${supabaseURL}/auth/verify?provider=supabase&token=`;
// 	// const confirmationLink = `https://project-ref.supabase.co/auth/v1/verify?token/${supabaseURL}&type=signup&redirect_to=./success`;

// 	//
// 	// useEffect(() => {
// 	// 	const handleVerification = async () => {
// 	// 		const { error } = await supabase.auth.verifyEmailChange(
// 	// 			//the history package, is a dependencie of React Router and which provides several different implementations for managing session history in JavaScript in various environments.
// 	// 			history.location.search
// 	// 		);

// 	// 		if (error) {
// 	// 			console.error("Error verifying email:", error.message);
// 	// 			// Optionally, handle the error or show a message to the user
// 	// 		} else {
// 	// 			console.log("Email verified successfully");
// 	// 			history.push("/success"); // Redirect to the verified page
// 	// 		}
// 	// 	};

// 	// 	if (history.location.search) {
// 	// 		handleVerification();
// 	// 	}
// 	// }, [history]);

// 	return (
// 		<ThemeProvider theme={defaultTheme}>
// 			<Container component="main" maxWidth="xs">
// 				<CssBaseline />
// 				<Box
// 					sx={{
// 						marginTop: 8,
// 						display: "flex",
// 						flexDirection: "column",
// 						alignItems: "center",
// 					}}
// 				>
// 					<Avatar sx={icon}>
// 						<LockOutlinedIcon />
// 					</Avatar>
// 					<Typography component="h1" variant="h5">
// 						Sign up
// 					</Typography>
// 					<Box
// 						component="form"
// 						noValidate
// 						onSubmit={handleSubmit}
// 						sx={{ mt: 3 }}
// 					>
// 						<Grid container spacing={2}>
// 							<Grid item xs={12} sm={6}>
// 								<TextField
// 									autoComplete="given-name"
// 									name="firstName"
// 									required
// 									fullWidth
// 									id="firstName"
// 									label="First Name"
// 									autoFocus
// 								/>
// 							</Grid>
// 							<Grid item xs={12} sm={6}>
// 								<TextField
// 									required
// 									fullWidth
// 									id="lastName"
// 									label="Last Name"
// 									name="lastName"
// 									autoComplete="family-name"
// 								/>
// 							</Grid>
// 							<Grid item xs={12}>
// 								<TextField
// 									required
// 									fullWidth
// 									id="email"
// 									label="Email Address"
// 									name="email"
// 									autoComplete="email"
// 								/>
// 							</Grid>
// 							<Grid item xs={12}>
// 								<TextField
// 									required
// 									fullWidth
// 									name="password"
// 									label="Password"
// 									type="password"
// 									id="password"
// 									autoComplete="new-password"
// 								/>
// 							</Grid>
// 							<Grid item xs={12}>
// 								<FormControlLabel
// 									control={
// 										<Checkbox value="allowExtraEmails" color="success" />
// 									}
// 									label="I want to receive inspiration, marketing promotions and updates via email."
// 								/>
// 							</Grid>
// 						</Grid>
// 						<CommonButton
// 							type="submit"
// 							fullWidth
// 							variant="contained"
// 							sx={buttonStyles}
// 						>
// 							Sign Up
// 						</CommonButton>
// 						<Grid container justifyContent="flex-end">
// 							<Grid item>
// 								{/* <Link sx={links} href={confirmationLink}>
// 									check your email for the confirmation
// 								</Link> */}
// 								<Typography>{setLMsg}</Typography>
// 								<Link href="/login" variant="body2" sx={links}>
// 									Already have an account? Sign in
// 								</Link>
// 							</Grid>
// 						</Grid>
// 					</Box>
// 				</Box>
// 			</Container>
// 		</ThemeProvider>
// 	);
// }

// //Styles
// const icon = {
// 	color: "#505c26",
// 	background: "#EED3C0",
// 	margin: 1,
// };

// const buttonStyles = {
// 	color: "#ffffff",
// 	background: "#505c26",
// 	marginTop: 3,
// 	marginBottom: 2,
// 	minWidth: "100%",

// 	fontSize: "0.7rem",
// 	border: "1px solid #505c26",
// 	"&:hover": {
// 		color: "#505c26",
// 		background: "#EED3C0",
// 	},
// };

// const links = {
// 	color: "#505c26",
// 	textDecoration: "none",

// 	"&:hover": {
// 		color: "#CDA082",
// 	},
// };
// =========================================================================
// =========================================================================
// =========================================================================
// =========================================================================
// =========================================================================
// =========================================================================
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
			const { data: session } = await supabase.auth.signInWithPassword({
				email,
				password,
			});

			console.log("session", session);

			// redirect the user to a different page
			navigate("/Success");
			await supabase.auth.api.sendVerificationEmail(email);
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
								{/* <Link href={confirmationLink} variant="body2" sx={links}>
									check your email for the confirmation
								</Link> */}
								{user ? (
									<Typography>Check your email for the confirmation</Typography>
								) : null}
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
