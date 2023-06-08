import { create } from "zustand";

export const authStore = create((set) => ({
	user: {},
	// access_token: null,

	loginUser: (session) =>
		set((state) => ({
			user: session.user,
			// access_token: session.access_token,
		})),
}));
