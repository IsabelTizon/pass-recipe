import { create } from "zustand";

export const appStore = create((set) => ({
	counterProducts: 0,
	addProduct: () =>
		set((state) => ({ counterProducts: state.counterProducts + 1 })),
}));
