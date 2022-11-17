import { createSlice } from "@reduxjs/toolkit";

// InitialState
const initialState = {
	isAddTodoModalOpen: false,
	isDetailTodoModalOpen: false,
	todoItem: { todoContent: "" },
	selectedDate: {},
};

// 슬라이스
export const modalSlice = createSlice({
	name: "modalSlice",
	initialState,
	reducers: {
		updateIsAddTodoModalOpen: (state, action) => {
			state.isAddTodoModalOpen = !state.isAddTodoModalOpen;
			state.selectedDate = {
				year: parseInt(action.payload?.year),
				month: parseInt(action.payload?.month),
				day: parseInt(action.payload?.date),
			};
		},
		updateIsDetailTodoModalOpen: (state, action) => {
			state.isDetailTodoModalOpen = !state.isDetailTodoModalOpen;
			state.todoItem = action.payload;
		},
	},
	extraReducers: {},
});

export const { updateIsAddTodoModalOpen, updateIsDetailTodoModalOpen } =
	modalSlice.actions;
export default modalSlice.reducer;
