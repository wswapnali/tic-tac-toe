import { calculateWinner } from "../store/actions/calculateWinner";

describe("calculateWinner", () => {
  it("should return the winning result when there is a horizontal win", () => {
    const matrixSize = 3;
    const currentPlayer = "X";
    const row = 0;
    const col = 0;
    const board = [
      ["X", "X", "X"],
      ["O", "O", null],
      [null, null, null],
    ];

    const result = calculateWinner(board, matrixSize, currentPlayer, row, col);

    expect(result).toEqual({
      token: "X",
      winningCells: [
        { row: 0, col: 0 },
        { row: 0, col: 1 },
        { row: 0, col: 2 },
      ],
    });
  });

  it("should return the winning result when there is a vertical win", () => {
    const matrixSize = 3;
    const currentPlayer = "O";
    const row = 1;
    const col = 0;
    const board = [
      ["O", "X", "X"],
      ["O", null, "X"],
      ["O", null, null],
    ];

    const result = calculateWinner(board, matrixSize, currentPlayer, row, col);

    expect(result).toEqual({
      token: "O",
      winningCells: [
        { col: 0, row: 0 },
        { col: 0, row: 1 },
        { col: 0, row: 2 },
      ],
    });
  });

  it("should return the winning result when there is a diagonal win (top-left to bottom-right)", () => {
    const matrixSize = 3;
    const currentPlayer = "X";
    const row = 0;
    const col = 0;
    const board = [
      ["X", "O", "X"],
      [null, "X", "O"],
      ["O", null, "X"],
    ];

    const result = calculateWinner(board, matrixSize, currentPlayer, row, col);

    expect(result).toEqual({
      token: "X",
      winningCells: [
        { row: 0, col: 0 },
        { row: 1, col: 1 },
        { row: 2, col: 2 },
      ],
    });
  });

  it("should return the winning result when there is a diagonal win (top-right to bottom-left)", () => {
    const matrixSize = 3;
    const currentPlayer = "O";
    const row = 2;
    const col = 0;
    const board = [
      ["X", "O", "O"],
      ["O", "O", "X"],
      ["O", "X", "O"],
    ];

    const result = calculateWinner(board, matrixSize, currentPlayer, row, col);

    expect(result).toEqual({
      token: "O",
      winningCells: [
        { row: 0, col: 2 },
        { row: 1, col: 1 },
        { row: 2, col: 0 },
      ],
    });
  });

  it("should return null when there is no winner", () => {
    const matrixSize = 3;
    const currentPlayer = "X";
    const row = 1;
    const col = 1;
    const board = [
      ["X", "O", "X"],
      ["O", "X", "O"],
      ["O", "X", "O"],
    ];

    const result = calculateWinner(board, matrixSize, currentPlayer, row, col);

    expect(result).toBeNull();
  });
});
