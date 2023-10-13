const RenderWinningLine = (props) => {
  const winningCells = props.winningCells;

  const cellSize = 100;
  const strokeWidth = 5;
  const lineColor = "red";

  const startX = winningCells[0].col * cellSize + cellSize / 2;
  const startY = winningCells[0].row * cellSize + cellSize / 2;
  const endX =
    winningCells[winningCells.length - 1].col * cellSize + cellSize / 2;
  const endY =
    winningCells[winningCells.length - 1].row * cellSize + cellSize / 2;

  return (
    <svg width="100%" height="100%">
      <line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        stroke={lineColor}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default RenderWinningLine;
