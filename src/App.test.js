import React from "react";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import App from "./App";

const mockStore = configureStore([]);
const initialState = {
  game: {
    board: Array(3)
      .fill(null)
      .map(() => Array(3).fill(null)),
    xIsNext: true,
    winner: null,
    size: 3,
    winningCells: [],
  },
};
const store = mockStore(initialState);

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});
