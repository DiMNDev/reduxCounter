import { createReducer } from "@reduxjs/toolkit";
import { getRandom } from "../actions";

const getRandomReducer = createReducer(0, (builder) => {
  builder.addCase(getRandom, (state, action) => {
    return (state += Math.floor(Math.random() * 30));
  });
});

export default getRandomReducer;
