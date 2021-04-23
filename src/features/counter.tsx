import React from "react";
import { decrement, increment, InitialState } from "./counter.slice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "./store";

const Counter = () => {
  const dispatch: AppDispatch = useDispatch();
  const { value } = useSelector((state: RootState) => state.countStore);

  const onUpClick = () => {
    dispatch(increment());
  };
  const onDownClick = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h1>Counter Component</h1>

      <h2>Current Count: {value}</h2>
      <button onClick={onUpClick}>Up</button>
      <button onClick={onDownClick}>Down</button>
    </div>
  );
};

export default Counter;
