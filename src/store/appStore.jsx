import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const appStore = create()(
	devtools((set) => ({
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
				return { myItems: [...state.myItems] };
			});
		},
	}))
);
