import gameReducer from "../store/reducers/game";
import { CLICK_SQUARE, RESET_SQUARE, SET_SQUARE } from "../store/actions/game";

describe("Reducer gameReducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      board: Array(3)
        .fill(null)
        .map(() => Array(3).fill(null)),
      xIsNext: true,
      winner: null,
      size: 3,
      winningCells: [],
    };
    expect(gameReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle CLICK_SQUARE action", () => {
    const initialState = {
      board: Array(3)
        .fill(null)
        .map(() => Array(3).fill(null)),
      xIsNext: true,
      winner: null,
      size: 3,
      winningCells: [],
    };

    const action = {
      type: CLICK_SQUARE,
      payload: {
        rowIndex: 0,
        colIndex: 0,
      },
    };

    const newState = gameReducer(initialState, action);
    const expectdState = {
      board: [
        ["X", null, null],
        [null, null, null],
        [null, null, null],
      ],
      size: 3,
      winner: null,
      winningCells: [],
      xIsNext: false,
    };
    expect(newState).toEqual(expectdState);
  });

  it("should handle RESET_SQUARE action", () => {
    const initialState = {
      board: Array(3)
        .fill(null)
        .map(() => Array(3).fill(null)),
      xIsNext: true,
      winner: null,
      size: 3,
      winningCells: [],
    };

    const action = {
      type: RESET_SQUARE,
    };

    const newState = gameReducer(initialState, action);
    const expectdState = {
      board: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
      size: 3,
      winner: null,
      winningCells: [],
      xIsNext: true,
    };
    expect(newState).toEqual(expectdState);
  });

  it("should handle SET_SQUARE action", () => {
    const initialState = {
      board: Array(3)
        .fill(null)
        .map(() => Array(3).fill(null)),
      xIsNext: true,
      winner: null,
      size: 3,
      winningCells: [],
    };

    const action = {
      type: SET_SQUARE,
      payload: "4",
    };

    const newState = gameReducer(initialState, action);
    const expectdState = {
      board: [
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
      ],
      size: 4,
      winner: null,
      winningCells: [],
      xIsNext: true,
    };
    expect(newState).toEqual(expectdState);
  });

  it("should handle second click on same button", () => {
    const initialState = {
      board: [
        ["X", "O", null],
        [null, null, null],
        [null, null, null],
      ],
      xIsNext: true,
      winner: null,
      size: 3,
      winningCells: [],
    };

    const action = {
      type: CLICK_SQUARE,
      payload: {
        rowIndex: 0,
        colIndex: 0,
      },
    };

    const newState = gameReducer(initialState, action);

    expect(newState).toEqual(newState);
  });

  it("should send winner cells", () => {
    const initialState = {
      board: [
        ["X", "O", "X"],
        ["O", "X", "O"],
        [null, null, null],
      ],
      xIsNext: true,
      winner: null,
      size: 3,
      winningCells: [],
    };

    const action = {
      type: CLICK_SQUARE,
      payload: {
        rowIndex: 2,
        colIndex: 0,
      },
    };

    const newState = gameReducer(initialState, action);

    const expectdState = {
      board: [
        ["X", "O", "X"],
        ["O", "X", "O"],
        ["X", null, null],
      ],
      xIsNext: true,
      winner: "X",
      size: 3,
      winningCells: [
        { col: 2, row: 0 },
        { col: 1, row: 1 },
        { col: 0, row: 2 },
      ],
    };

    expect(newState).toEqual(expectdState);
  });
});
