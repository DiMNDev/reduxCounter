import { createReducer } from "@reduxjs/toolkit";
import { increment, decrement } from "../actions";

const counterReducer = createReducer(0, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      return (state += action.payload);
    })
    .addCase(decrement, (state, action) => {
      return (state -= action.payload);
    });
});

export default counterReducer;
