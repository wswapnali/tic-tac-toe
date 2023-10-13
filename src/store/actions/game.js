export const CLICK_SQUARE = "CLICK_SQUARE";
export const RESET_SQUARE = "RESET_SQUARE";
export const SET_SQUARE = "SET_SQUARE";

export const clickSquare = (payload) => {
  return {
    type: CLICK_SQUARE,
    payload: payload,
  };
};

export const resetSquare = () => {
  return { type: RESET_SQUARE };
};

export const setSquare = (count) => {
  return { type: SET_SQUARE, payload: count };
};
