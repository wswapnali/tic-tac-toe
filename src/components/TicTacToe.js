import { useEffect, useState } from "react";
import classes from "./TicTacToe.module.css";
import { useSelector, useDispatch } from "react-redux";
import { clickSquare, calculateWinner, resetSquare } from "../redux/reducers";
const TicTacToe = () => {
  const squares = useSelector((state) => state.game.squares);
  const xIsNext = useSelector((state) => state.game.xIsNext);
  const [lineClassName, setLineClassName] = useState("");
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

  const winner = calculateWinner(squares);
  let status;
  if (winner && winner.token) {
    status = <p className={classes.statusWinner}>Winner: {winner.token}</p>;
  } else {
    status = <p>Next player: {xIsNext ? "X" : "O"}</p>;
  }
  useEffect(() => {
    if (winner && winner.token) {
      setLineClassName(classes[winner.lineClass]);
    }
  }, [winner]);

  const resetHandler = () => {
    setLineClassName(null);
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
          {lineClassName && <hr className={lineClassName} />}
        </div>
        <button className={classes.resetBtn} onClick={resetHandler}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
