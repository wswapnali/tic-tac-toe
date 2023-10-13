import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./reducers/game";

const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

export default store;
