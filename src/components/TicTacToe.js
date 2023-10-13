import classes from "./TicTacToe.module.css";
import { useSelector, useDispatch } from "react-redux";
import { clickSquare, resetSquare } from "../store/actions/game";
import Input from "./helpers/Input";
import RenderWinningLine from "./helpers/RenderWinningLine";
const TicTacToe = () => {
  const xIsNext = useSelector((state) => state.game.xIsNext);
  const winnerTocken = useSelector((state) => state.game.winner);
  const board = useSelector((state) => state.game.board);
  const winningCells = useSelector((state) => state.game.winningCells);

  const dispatch = useDispatch();

  let status = "";
  let gameClassName = "xTurn";
  if (winnerTocken) {
    status = <p className={classes.statusWinner}>Winner: {winnerTocken}</p>;
    gameClassName = "winner";
  } else if (board.some((box) => box.some((b) => b === null))) {
    status = <p>Next player: {xIsNext ? "X" : "O"}</p>;
    gameClassName = xIsNext ? "xTurn" : "oTurn";
  } else {
    status = <p className={classes.draw}>Draw</p>;
    gameClassName = "draw";
  }

  const resetHandler = () => {
    dispatch(resetSquare());
  };

  return (
    <div className={`${classes.game} ${classes[gameClassName]}`}>
      <div className={classes.gameBoard}>
        <div className={classes.status}>{status}</div>
        <Input />
        <div className={classes.board}>
          <div className={classes.boardInner}>
            {board.map((row, rowIndex) => (
              <div key={rowIndex} className={classes.boardRow}>
                {row.map((cell, colIndex) => (
                  <button
                    key={colIndex}
                    className={classes.square}
                    onClick={() =>
                      dispatch(clickSquare({ rowIndex, colIndex }))
                    }
                    data-testid={"box" + rowIndex + colIndex}
                  >
                    {cell}
                  </button>
                ))}
              </div>
            ))}
          </div>
          {winnerTocken && <RenderWinningLine winningCells={winningCells} />}
        </div>

        <button className={classes.resetBtn} onClick={resetHandler}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
