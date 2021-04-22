import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialState {
  count: number;
}

export const initialState: InitialState = {
  count: 0,
};

type State = number;
export const increment: CaseReducer<InitialState, PayloadAction<number>> = (state, action) =>  state.count
export const decrement : CaseReducer<InitialState, PayloadAction<number>> = (state) => {state.count = state.count - 1;
const countSlice = createSlice({
  name: "count",
  initialState: initialState as InitialState,
  reducers: {
    increment,
    decrement
  },
});

// export const { increment, decrement } = countSlice.actions;
export default countSlice.reducer;
