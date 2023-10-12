import { CLICK_SQUARE, RESET_SQUARE } from "../actions/game";
import { calculateWinner } from "../actions/calculateWinner";

const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true,
  winner: null,
  connectingLine: null,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_SQUARE:
      const squares = state.squares.slice();

      if (squares[action.payload] || state.winner) {
        return state;
      }

      squares[action.payload] = state.xIsNext ? "X" : "O";

      const calculatedWinner = calculateWinner(squares);
      if (calculatedWinner) {
        return {
          ...state,
          squares: squares,
          winner: calculatedWinner.token,
          connectingLine: calculatedWinner.lineClass,
        };
      }

      return {
        ...state,
        squares: squares,
        xIsNext: !state.xIsNext,
      };
    case RESET_SQUARE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default gameReducer;
