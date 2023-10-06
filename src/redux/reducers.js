import { combineReducers } from "redux";

const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLICK_SQUARE":
      const squares = state.squares.slice();
      if (calculateWinner(squares) || squares[action.payload]) {
        return state;
      }
      squares[action.payload] = state.xIsNext ? "X" : "O";
      return {
        ...state,
        squares: squares,
        xIsNext: !state.xIsNext,
      };
    case "RESET_SQUARE":
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  game: gameReducer,
});

export default rootReducer;

export function calculateWinner(squares) {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let i = 0;
  for (const line of winningLines) {
    i++;
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      let hrClass = "";
      switch (i) {
        case 1:
          hrClass = "firstRowWinner";
          break;
        case 2:
          hrClass = "secondRowWinner";
          break;
        case 3:
          hrClass = "thirdRowWinner";
          break;
        case 4:
          hrClass = "firstColumnWinner";
          break;
        case 5:
          hrClass = "secondColumnWinner";
          break;
        case 6:
          hrClass = "thirdColumnWinner";
          break;
        case 7:
          hrClass = "leftToRightDiagonalWinner";
          break;
        case 8:
          hrClass = "rightToLeftDiagonalWinner";
          break;
        default:
          hrClass = "";
      }

      return {
        token: squares[a],
        lineClass: hrClass,
      };
    }
  }

  return null;
}

export const clickSquare = (index) => ({
  type: "CLICK_SQUARE",
  payload: index,
});

export const resetSquare = () => ({
  type: "RESET_SQUARE",
});
