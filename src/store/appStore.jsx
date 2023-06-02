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
		set((state) => {
			return {
				// spread operator to clone an array = [...state.myItems]
				myItems: [...state.myItems, item],
			};
		});
	},

	increaseBtn: (item) => {
		set((state) => {
			console.log("state", state);
			return {
				// counterProducts: state.counterProducts + 1,
				increase: () => set((state) => ({ quantity: state.quantity + 1 })),
			};
		});
	},

	decreaseBtn: (item) => {
		set((state) => {
			console.log("state", state);
			return {
				// counterProducts: state.counterProducts + 1,
				decrease: () => set((state) => ({ quantity: state.quantity - 1 })),
			};
		});
	},
	deleteBtn: (item) => {
		set((state) => {
			const index = state.myItems.findIndex((x) => x.id === item.id);
			const copyMyItems = [...state.myItems];
			copyMyItems.splice(index, 1);

			// console.log(
			// 	"index =",
			// 	state.myItems.findIndex((x) => {
			// 		console.log("=============================");
			// 		console.log("esto es la x =>", x);
			// 		console.log("esto es el id del elemento a eliminar =>", item.id);
			// 		console.log("esto es el resultado del === =>", x.id === item.id);
			// 		return x.id === item.id;
			// 	})
			// );

			return { myItems: copyMyItems };
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
