import React from "react";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import App from "./App";

// Mock Redux store
const mockStore = configureStore([]);
const initialState = {
  game: {
    squares: Array(9).fill(null),
    xIsNext: true,
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
