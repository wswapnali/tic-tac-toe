import classes from "./TicTacToe.module.css";
const TicTacToe = () => {
  const resetHandler = () => {
    console.log("reset");
  };
  return (
    <div className={classes.game}>
      <div className={classes.gameBoard}>
        <div className={classes.status}>
          <p>Next player: X</p>
        </div>
        <div className={classes.board}>
          <div className={classes.boardRow}>
            <button className={classes.square}></button>
            <button className={classes.square}></button>
            <button className={classes.square}></button>
          </div>
          <div className={`${classes.boardRow} ${classes.rowRowMiddle}`}>
            <button className={classes.square}></button>
            <button className={classes.square}></button>
            <button className={classes.square}></button>
          </div>
          <div className={classes.boardRow}>
            <button className={classes.square}></button>
            <button className={classes.square}></button>
            <button className={classes.square}></button>
          </div>
        </div>
        <button className={classes.resetBtn} onClick={resetHandler}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
