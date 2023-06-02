import { create } from "zustand";

export const appStore = create((set) => ({
	counterProducts: 0,
	myItems: [],
	// addProduct: (item) =>
	// 	set((state) => ({
	// 		counterProducts: state.counterProducts + 1,
	// 		myItems: [...state.myItems, item],
	// 	})),
	addProduct: (item) => {
		console.log("item", item);
		set((state) => {
			console.log("state", state);
			return {
				// counterProducts: state.counterProducts + 1,
				myItems: [...state.myItems, item],
			};
		});
	},
}));

// import { persist, createJSONStorage } from "zustand/middleware";

// export const useAppStore = create(
// 	persist(appStore, {
// 		name: "productStorage",
// 		storage: createJSONStorage(() => sessionStorage),
// 	})
// );
