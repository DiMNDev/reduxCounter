import { createReducer } from "@reduxjs/toolkit";
import { login } from "../actions";

const loginReducer = createReducer(false, (builder) => {
  builder.addCase(login, (state, action) => {
    return (state = !state);
  });
});

export default loginReducer;
