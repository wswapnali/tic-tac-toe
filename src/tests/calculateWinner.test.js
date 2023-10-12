import { calculateWinner } from "../store/actions/calculateWinner";

describe("calculateWinner", () => {
  it("should return null for no winner", () => {
    const squares = ["X", "O", "X", "O", "X", "O", "O", "X", "O"];
    const result = calculateWinner(squares);
    expect(result).toBeNull();
  });

  it("should correctly detect a first line horizontal winner", () => {
    const squares = ["X", "X", "X", "O", "O", null, "O", null, "X"];
    const result = calculateWinner(squares);
    expect(result).toEqual({ token: "X", lineClass: "firstRowWinner" });
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

  it("should correctly detect a diagonal winner", () => {
    const squares = ["X", "O", "X", "O", "X", "O", "X", "X", "O"];

    expect(calculateWinner(squares)).toEqual({
      token: "X",
      lineClass: "rightToLeftDiagonalWinner",
    });
  });

  it("should handle a draw (no winner)", () => {
    const squares = ["X", "O", "X", "X", "X", "O", "O", "X", "O"];
    const result = calculateWinner(squares);
    expect(result).toBeNull();
  });
});
