import gameReducer from "../store/reducers/game";
import { CLICK_SQUARE, RESET_SQUARE } from "../store/actions/game";

describe("gameReducer", () => {
  it("should return the initial state", () => {
    expect(gameReducer(undefined, {})).toEqual({
      squares: Array(9).fill(null),
      xIsNext: true,
      winner: null,
      connectingLine: null,
    });
  });

  it("should handle CLICK_SQUARE action", () => {
    const initialState = {
      squares: Array(9).fill(null),
      xIsNext: true,
      winner: null,
      connectingLine: null,
    };

    // Create an action to simulate clicking a square
    const action = {
      type: CLICK_SQUARE,
      payload: 0, // Change this value to simulate clicking a different square
    };

    // Simulate the first click on the square
    const newState = gameReducer(initialState, action);

    expect(newState.squares[0]).toBe("X"); // Make sure the square is 'X' after the click
    expect(newState.xIsNext).toBe(false); // Ensure the turn has switched to 'O'
  });

  it("should handle RESET_SQUARE action", () => {
    const initialState = {
      squares: ["X", "O", "X", "O", "X", "O", "X", null, null],
      xIsNext: false,
      winner: "X",
      connectingLine: "rightToLeftDiagonalWinner",
    };

    // Create an action to simulate resetting the game
    const action = {
      type: RESET_SQUARE,
    };

    // Simulate the game reset
    const newState = gameReducer(initialState, action);

    // Check that the state is reset to the initial state
    expect(newState).toEqual({
      squares: Array(9).fill(null),
      xIsNext: true,
      winner: null,
      connectingLine: null,
    });
  });
});
