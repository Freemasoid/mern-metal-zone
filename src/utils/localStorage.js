export const addUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};
export const removeCartFromLocalStorage = () => {
  localStorage.setItem("cart", []);
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};

export const getOrderFromLocalStorage = () => {
  const result = localStorage.getItem("cart");
  const order = result ? JSON.parse(result) : null;
  return order;
};
