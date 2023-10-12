export const CLICK_SQUARE = "CLICK_SQUARE";
export const RESET_SQUARE = "RESET_SQUARE";

export const clickSquare = (index) => {
  return {
    type: CLICK_SQUARE,
    payload: index,
  };
};

export const resetSquare = () => {
  return { type: RESET_SQUARE };
};
