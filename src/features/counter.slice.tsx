import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialState {
  value: number;
}

export const initialState: InitialState = {
  value: 0,
};

export const increment: CaseReducer<InitialState, PayloadAction<number>> = (state, action) => {
  state.value = state.value + 1;
};
export const decrement: CaseReducer<InitialState, PayloadAction<number>> = (state) => {
  state.value = state.value - 1;
};

const countNumber = createSlice({
  name: "count",
  initialState: initialState as InitialState,
  reducers: {
    increment,
    decrement,
  },
});

export default countNumber.reducer;
