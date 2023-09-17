export const increment = (by) => {
  return {
    type: "INCREMENT",
    payload: by,
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const login = () => {
  return {
    type: "SIGN_IN",
  };
};
