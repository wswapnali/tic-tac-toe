import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Input.module.css";
import { setSquare } from "../../store/actions/game";
const Input = () => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const userInput = useRef();
  const submitHandler = () => {
    if (userInput.current.value <= 2) {
      setError(true);
    } else {
      setError(false);
      dispatch(setSquare(userInput.current.value));
    }
  };
  return (
    <>
      Select number of Rows :
      <input
        className={classes.inputField}
        ref={userInput}
        type="number"
        data-testid="inputField"
      />
      <button
        className={classes.button}
        onClick={submitHandler}
        data-testid="submitButton"
      >
        Submit
      </button>
      {error && <p className={classes.errorMessage}>Rows must be atleast 3</p>}
    </>
  );
};

export default Input;
