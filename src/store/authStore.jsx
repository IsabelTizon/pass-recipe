import { create } from "zustand";

export const authStore = create((set) => ({
	user: {},
	sessionToken: null,

	loginUser: (session) =>
		set((state) => ({
			user: session.user,
		})),
}));
