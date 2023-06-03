// import { create } from "zustand";
// import _ from "lodash";

// export const appStore = create((set) => ({
// 	counterProducts: 0,
// 	myItems: [],
// 	// addProduct: (item) =>
// 	// 	set((state) => ({
// 	// 		counterProducts: state.counterProducts + 1,
// 	// 		myItems: [...state.myItems, item],
// 	// 	})),
// 	addProduct: (item) => {
// 		set((state) => {
// 			const myItems = [...state.myItems, item];
// 			console.log("my items", myItems);
// 			// --------------------------------------------------

// 			const myItemsGroup = _.groupBy(myItems, (item) => item.id);
// 			console.log("my Items Group", myItemsGroup);
// 			//-----------------------------------------------------
// 			//3 methods to convert objects into arrays
// 			//..object.key() -  converts property names into arrays
// 			//..object.values() -  converts property values into arrays
// 			//..object.entries() -  converts both
// 			Object.entries(myItemsGroup).forEach(([key, value]) =>
// 				console.log("course", key, value)
// 			);
// 			console.log("========================");
// 			return {
// 				// spread operator to clone an array = [...state.myItems]
// 				// myItems: [...state.myItems, item],
// 				// const copyLoadash = [...copyMyItems];
// 				// const grouped = _.groupBy(copyLoadash, (item) => item.id);
// 				// console.log("loadash test", grouped);
// 				// Object.entries(grouped).forEach(([key, value]) =>
// 				// 	console.log("element", key, value)
// 				// );
// 			};
// 		});
// 	},

// 	increaseBtn: (item) => {
// 		set((state) => {
// 			console.log("state", state);
// 			return {
// 				// counterProducts: state.counterProducts + 1,
// 				increase: () => set((state) => ({ quantity: state.quantity + 1 })),
// 			};
// 		});
// 	},

// 	decreaseBtn: (item) => {
// 		set((state) => {
// 			console.log("state", state);
// 			return {
// 				// counterProducts: state.counterProducts + 1,
// 				decrease: () => set((state) => ({ quantity: state.quantity - 1 })),
// 			};
// 		});
// 	},
// 	deleteBtn: (item) => {
// 		set((state) => {
// 			// const index = state.myItems.findIndex((x) => x.id === item.id);
// 			// const copyMyItems = [...state.myItems];
// 			// copyMyItems.splice(index, 1);
// 			// return { myItems: copyMyItems };
// 		});
// 	},
// }));

// import { persist, createJSONStorage } from "zustand/middleware";

// export const useAppStore = create(
// 	persist(appStore, {
// 		name: "productStorage",
// 		storage: createJSONStorage(() => sessionStorage),
// 	})
// );
// ===========================================================================
import { create } from "zustand";
import _ from "lodash";

export const appStore = create((set) => ({
	counterProducts: 0,
	myItems: [],
	addProduct: (item) =>
		set((state) => ({
			counterProducts: state.counterProducts + 1,
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
