import { create } from "zustand";

export const appStore = create((set) => ({
	myItems: [],
	addProduct: (item) =>
		set((state) => ({
			myItems: [...state.myItems, item],
		})),

	deleteBtn: (item) => {
		set((state) => {
			const index = state.myItems.findIndex((x) => x.id === item.id);
			const copyMyItems = [...state.myItems];
			copyMyItems.splice(index, 1);
			return { myItems: copyMyItems };
		});
	},
}));
