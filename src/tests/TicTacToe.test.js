import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import TicTacToe from "../components/TicTacToe";
import { resetSquare } from "../redux/reducers";

// Mock Redux store
const mockStore = configureStore([]);
const initialState = {
  game: {
    squares: Array(9).fill(null),
    xIsNext: true,
  },
};
const store = mockStore(initialState);

describe("TicTacToe Component", () => {
  it("renders without errors", () => {
    const { getByText } = render(
      <Provider store={store}>
        <TicTacToe />
      </Provider>
    );

    // Verify that the component is rendered
    expect(getByText("Next player: X")).toBeInTheDocument();
  });

  it("displays the winner when a player wins", () => {
    // Mock the Redux store state to simulate a winning condition
    const storeWithWinner = mockStore({
      game: {
        squares: ["X", "O", "X", "O", "X", "O", "X", null, null],
        xIsNext: true,
      },
    });

    const { getByText } = render(
      <Provider store={storeWithWinner}>
        <TicTacToe />
      </Provider>
    );

    // Verify that the component displays the winner
    expect(getByText("Winner: X")).toBeInTheDocument();
  });

  it("resets the game when Reset button is clicked", () => {
    const { getByText } = render(
      <Provider store={store}>
        <TicTacToe />
      </Provider>
    );

    // Click on the Reset button
    fireEvent.click(getByText("Reset"));

    // Verify that the resetSquare action is dispatched
    expect(store.getActions()).toEqual([resetSquare()]);
  });
});
