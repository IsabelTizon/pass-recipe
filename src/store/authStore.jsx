//Zustand is a state management library for React
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const authStore = create()(
	devtools((set) => ({
		//when the user is not logged the values of the keys are an empty string
		user: {
			id: "",
			firstName: "",
			lastName: "",
			email: "",
		},
		//when the user is logged store and object user with the id, the first name, last name and email
		loginUser: (session) =>
			set((state) => ({
				user: {
					id: session.user.id,
					firstName: session.user.user_metadata.first_name,
					lastName: session.user.user_metadata.last_name,
					email: session.user.email,
				},
			})),
	}))
);
