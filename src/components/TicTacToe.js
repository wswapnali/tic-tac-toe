import classes from "./TicTacToe.module.css";
import { useSelector, useDispatch } from "react-redux";
import { clickSquare, resetSquare } from "../store/actions/game";
const TicTacToe = () => {
  const squares = useSelector((state) => state.game.squares);
  const xIsNext = useSelector((state) => state.game.xIsNext);
  const winnerTocken = useSelector((state) => state.game.winner);
  const connectingLine = useSelector((state) => state.game.connectingLine);

  const dispatch = useDispatch();

  const renderSquare = (i) => (
    <button
      className={classes.square}
      onClick={() => dispatch(clickSquare(i))}
      data-testid={"box" + i}
    >
      {squares[i]}
    </button>
  );

  let status;
  if (winnerTocken) {
    status = <p className={classes.statusWinner}>Winner: {winnerTocken}</p>;
  } else if (squares.some((s) => s === null)) {
    status = <p>Next player: {xIsNext ? "X" : "O"}</p>;
  } else {
    status = <p className={classes.draw}>Draw</p>;
  }

  const resetHandler = () => {
    dispatch(resetSquare());
  };

  return (
    <div className={classes.game}>
      <div className={classes.gameBoard}>
        <div className={classes.status}>{status}</div>
        <div className={classes.board}>
          <div className={classes.boardRow}>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className={`${classes.boardRow} ${classes.rowRowMiddle}`}>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className={classes.boardRow}>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
          {connectingLine && <hr className={classes[connectingLine]} />}
        </div>
        <button className={classes.resetBtn} onClick={resetHandler}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
