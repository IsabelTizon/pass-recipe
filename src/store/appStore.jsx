import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const appStore = create()(
	devtools((set) => ({
		//Array to store the courses in the basket
		myItems: [],
		//add product f() to add the course to the basket
		addProduct: (item) =>
			set((state) => ({
				//adding one item into myItems array
				myItems: [...state.myItems, item],
			})),

		// deleting course card
		deleteBtn: (item) => {
			set((state) => {
				//I created a constant to assigned the index value of the element that is gonna be remove. To remove the element we need to see first if it meets the condition, if the id of x is equals to the id of item, then it returns true, stops searching and returns the index of the element.s
				const index = state.myItems.findIndex((x) => x.id === item.id);
				// Non-primitive values the value is overwritten, so I created a copy of the myItems array so that it does not mutate
				const copyMyItems = [...state.myItems];
				//splice() method delete one element in the index, because the second parameter is 1, if the second parameter were two, it would delete two elements from the index
				copyMyItems.splice(index, 1);
				return { myItems: copyMyItems };
			});
		},
	}))
);
