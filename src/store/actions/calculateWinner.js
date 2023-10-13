export const calculateWinner = (board, matrixSize, currentPlayer, row, col) => {
  for (let i = 0; i < matrixSize; i++) {
    if (board[i][col] !== currentPlayer) break;
    if (i === matrixSize - 1)
      return {
        token: currentPlayer,
        winningCells: Array.from({ length: matrixSize }, (_, j) => ({
          row: j,
          col,
        })),
      };
  }

  for (let i = 0; i < matrixSize; i++) {
    if (board[row][i] !== currentPlayer) break;
    if (i === matrixSize - 1) {
      return {
        token: currentPlayer,
        winningCells: Array.from({ length: matrixSize }, (_, j) => ({
          row,
          col: j,
        })),
      };
    }
  }

  if (row === col) {
    for (let i = 0; i < matrixSize; i++) {
      if (board[i][i] !== currentPlayer) break;
      if (i === matrixSize - 1)
        return {
          token: currentPlayer,
          winningCells: Array.from({ length: matrixSize }, (_, j) => ({
            row: j,
            col: j,
          })),
        };
    }
  }

  if (row + col === matrixSize - 1) {
    for (let i = 0; i < matrixSize; i++) {
      if (board[i][matrixSize - 1 - i] !== currentPlayer) break;
      if (i === matrixSize - 1)
        return {
          token: currentPlayer,
          winningCells: Array.from({ length: matrixSize }, (_, j) => ({
            row: j,
            col: matrixSize - 1 - j,
          })),
        };
    }
  }

  return null;
};
