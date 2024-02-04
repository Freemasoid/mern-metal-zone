/* eslint-disable react/prop-types */
import reducer from "../reducers/user_reducer.js";
import {
  LOGIN_USER_BEGIN,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  LOGOUT_USER,
} from "../actions.js";
import { getUserFromLocalStorage } from "../utils/localStorage.js";
import { createContext, useReducer, useContext } from "react";
import customFetch from "../utils/axios.js";

const initialState = {
  user_loading: false,
  user: getUserFromLocalStorage(),
  user_error: false,
};

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loginUser = async (user) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const resp = await customFetch.post("/auth/login", user);
      user = resp.data;
      dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
    } catch (error) {
      dispatch({ type: LOGIN_USER_ERROR });
    }
  };

  const registerUser = async (user) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const resp = await customFetch.post("/auth/register", user);
      user = resp.data;
      dispatch({ type: REGISTER_USER_SUCCESS, payload: user });
    } catch (error) {
      dispatch({ type: REGISTER_USER_ERROR });
    }
  };

  const updateUser = async (user) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const resp = await customFetch.post("/users/updateUser", user);
      user = resp.data;
      dispatch({ type: UPDATE_USER_SUCCESS, payload: user });
    } catch (error) {
      dispatch({ type: UPDATE_USER_ERROR });
    }
  };

  const logoutUser = async () => {
    dispatch({ type: LOGOUT_USER });
  };

  return (
    <UserContext.Provider
      value={{ ...state, loginUser, registerUser, updateUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => {
  return useContext(UserContext);
};
