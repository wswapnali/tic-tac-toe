import rootReducer, {
  calculateWinner,
  clickSquare,
  resetSquare,
} from "../redux/reducers";

describe("Redux Reducers and Utility Functions", () => {
  describe("gameReducer", () => {
    it("should return the initial state", () => {
      const initialState = {
        squares: Array(9).fill(null),
        xIsNext: true,
      };
      expect(rootReducer(undefined, {})).toEqual({ game: initialState });
    });

    it("should handle CLICK_SQUARE action", () => {
      const state = {
        game: {
          squares: Array(9).fill(null),
          xIsNext: true,
        },
      };

      const expectedState = {
        game: {
          squares: ["X", null, null, null, null, null, null, null, null],
          xIsNext: false,
        },
      };

      const action = clickSquare(0);
      expect(rootReducer(state, action)).toEqual(expectedState);
    });

    it("should handle RESET_SQUARE action", () => {
      const state = {
        game: {
          squares: ["X", "O", null, "O", "X", null, null, "O", null],
          xIsNext: false,
        },
      };

      const expectedState = {
        game: {
          squares: Array(9).fill(null),
          xIsNext: true,
        },
      };

      const action = resetSquare();
      expect(rootReducer(state, action)).toEqual(expectedState);
    });
  });

  describe("calculateWinner", () => {
    it("should return null for no winner", () => {
      const squares = ["X", "O", null, "O", "X", null, null, null, null];
      expect(calculateWinner(squares)).toBeNull();
    });

    it("should correctly identify a first horizontal winner", () => {
      const squares = ["X", "X", "X", "O", null, "O", null, null, null];
      expect(calculateWinner(squares)).toEqual({
        token: "X",
        lineClass: "firstRowWinner",
      });
    });

    it("should correctly identify a second horizontal winner", () => {
      const squares = ["X", "O", "X", "O", "O", "O", "X", "X", null];
      expect(calculateWinner(squares)).toEqual({
        token: "O",
        lineClass: "secondRowWinner",
      });
    });

    it("should correctly identify a third horizontal winner", () => {
      const squares = ["X", "O", null, "O", "O", null, "X", "X", "X"];
      expect(calculateWinner(squares)).toEqual({
        token: "X",
        lineClass: "thirdRowWinner",
      });
    });

    it("should correctly identify first vertical winner", () => {
      const squares = ["X", "O", null, "X", "O", null, "X", null, null];
      expect(calculateWinner(squares)).toEqual({
        token: "X",
        lineClass: "firstColumnWinner",
      });
    });

    it("should correctly identify second vertical winner", () => {
      const squares = ["X", "O", "X", "X", "O", null, null, "O", null];
      expect(calculateWinner(squares)).toEqual({
        token: "O",
        lineClass: "secondColumnWinner",
      });
    });

    it("should correctly identify third vertical winner", () => {
      const squares = [null, "O", "X", null, "O", "X", null, null, "X"];
      expect(calculateWinner(squares)).toEqual({
        token: "X",
        lineClass: "thirdColumnWinner",
      });
    });

    it("should correctly identify a diagonal winner", () => {
      const squares = ["X", "O", "O", null, "X", null, "O", null, "X"];
      expect(calculateWinner(squares)).toEqual({
        token: "X",
        lineClass: "leftToRightDiagonalWinner",
      });
    });
  });
});
