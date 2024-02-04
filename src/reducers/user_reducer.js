import {
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
} from "../actions.js";
import {
  addUserToLocalStorage,
  removeCartFromLocalStorage,
  removeUserFromLocalStorage,
} from "../utils/localStorage.js";
import { toast } from "react-toastify";

const user_reducer = (state, action) => {
  if (action.type === LOGIN_USER_BEGIN) {
    return { ...state, user_loading: true };
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    const { user } = action.payload;
    addUserToLocalStorage(user);
    toast.success(`Welcome back ${user.name}!`);
    return { ...state, user_loading: false, user: user };
  }
  if (action.type === LOGIN_USER_ERROR) {
    toast.error(action.payload);
    return { ...state, user_loading: false, user_error: true };
  }

  if (action.type === REGISTER_USER_BEGIN) {
    return { ...state, user_loading: true };
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    const { user } = action.payload;
    addUserToLocalStorage(user);
    toast.success(`Hello ${user.name}`);
    return { ...state, user_loading: false, user: user };
  }
  if (action.type === REGISTER_USER_ERROR) {
    toast.error(action.payload);
    return { ...state, user_loading: false, user_error: true };
  }

  if (action.type === LOGOUT_USER) {
    removeUserFromLocalStorage();
    removeCartFromLocalStorage();
    if (action.payload) {
      toast.success(action.payload);
    }
    return { ...state, user: null };
  }

  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, user_loading: true };
  }
  if (action.type === UPDATE_USER_SUCCESS) {
    const { user } = action.payload;
    addUserToLocalStorage(user);
    toast.success("User Updated!");
    return {
      ...state,
      user_loading: false,
      user: user,
    };
  }
  if (action.type === UPDATE_USER_ERROR) {
    toast.error(action.payload);
    return { ...state, user_loading: false, user_error: true };
  }
};

export default user_reducer;
