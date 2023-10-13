import { CLICK_SQUARE, RESET_SQUARE, SET_SQUARE } from "../actions/game";
import { calculateWinner } from "../actions/calculateWinner";

const initialState = {
  board: Array(3)
    .fill(null)
    .map(() => Array(3).fill(null)),
  xIsNext: true,
  winner: null,
  size: 3,
  winningCells: [],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_SQUARE:
      const squares = state.board.slice();
      const size = state.size;
      const { rowIndex, colIndex } = action.payload;
      const currentPlayer = state.xIsNext ? "X" : "O";
      if (squares[rowIndex][colIndex] || state.winner) {
        return state;
      }

      const newBoard = squares.map((rowArray, index) => {
        if (rowIndex === index) {
          return rowArray.map((cell, columnIndex) =>
            colIndex === columnIndex ? currentPlayer : cell
          );
        } else {
          return rowArray.slice();
        }
      });

      const calculatedWinner = calculateWinner(
        newBoard,
        size,
        currentPlayer,
        rowIndex,
        colIndex
      );
      if (calculatedWinner) {
        return {
          ...state,
          board: newBoard,
          winner: calculatedWinner.token,
          winningCells: calculatedWinner.winningCells,
        };
      }
      return {
        ...state,
        board: newBoard,
        xIsNext: !state.xIsNext,
      };
    case RESET_SQUARE:
      return {
        ...initialState,
      };
    case SET_SQUARE: {
      const size = parseFloat(action.payload);
      return {
        ...initialState,
        board: Array(size)
          .fill(null)
          .map(() => Array(size).fill(null)),

        size: size,
      };
    }
    default:
      return state;
  }
};

export default gameReducer;
