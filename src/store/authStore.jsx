import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const authStore = create()(
	devtools((set) => ({
		user: {
			id: "",
			firstName: "",
			lastName: "",
			email: "",
		},

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
