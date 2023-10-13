import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import TicTacToe from "../components/TicTacToe";
import store from "../store/";

describe("TicTacToe Component", () => {
  it("renders the component without errors", () => {
    const { getByText } = render(
      <Provider store={store}>
        <TicTacToe />
      </Provider>
    );

    expect(getByText("Next player: X")).toBeInTheDocument();
  });

  it("handles a click event on a square", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <TicTacToe />
      </Provider>
    );

    const square = getByTestId("box00");
    fireEvent.click(square);

    expect(square.textContent).toBe("X");
  });

  it("handles a draw scenario", () => {
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <TicTacToe />
      </Provider>
    );

    const testIdsToClick = [
      "box00",
      "box01",
      "box02",
      "box11",
      "box10",
      "box12",
      "box21",
      "box20",
      "box22",
    ];

    testIdsToClick.forEach((squareIndex) => {
      const square = getByTestId(squareIndex);
      fireEvent.click(square);
    });

    expect(getByText("Draw")).toBeInTheDocument();
  });

  it("handles a reset event", () => {
    const { getByText } = render(
      <Provider store={store}>
        <TicTacToe />
      </Provider>
    );

    const resetButton = getByText("Reset");
    fireEvent.click(resetButton);

    expect(getByText("Next player: X")).toBeInTheDocument();
  });

  it("handles a winning scenario", () => {
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <TicTacToe />
      </Provider>
    );

    const squaresToWin = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];

    squaresToWin.forEach((rows, rowIndex) => {
      rows.forEach((cols, colIndex) => {
        const square = getByTestId("box" + rowIndex + colIndex);
        fireEvent.click(square);
      });
    });

    expect(getByText("Winner: X")).toBeInTheDocument();
  });
});
