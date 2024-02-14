/* eslint-disable react/prop-types */
import {
  GET_ALL_ORDERS_BEGIN,
  GET_ALL_ORDERS_SUCCESS,
  GET_ALL_ORDERS_ERROR,
  GET_SINGLE_ORDER_BEGIN,
  GET_SINGLE_ORDER_SUCCESS,
  GET_SINGLE_ORDER_ERROR,
  CREATE_ORDER_BEGIN,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_ERROR,
  GET_USER_ORDERS_BEGIN,
  GET_USER_ORDERS_ERROR,
  GET_USER_ORDERS_SUCCESS,
} from "../actions.js";
import { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/order_reducer.js";
import customFetch from "../utils/axios.js";

const initialState = {
  order_loading: false,
  order: {},
  order_error: false,
  orders: [],
  single_order: [],
  user_orders: [],
};

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAllOrders = async () => {
    dispatch({ type: GET_ALL_ORDERS_BEGIN });
    try {
      const resp = await customFetch.get("/orders");
      const orders = resp.data;
      dispatch({ type: GET_ALL_ORDERS_SUCCESS, payload: orders });
    } catch (error) {
      dispatch({ type: GET_ALL_ORDERS_ERROR });
    }
  };

  const getSingleOrder = async () => {
    dispatch({ type: GET_SINGLE_ORDER_BEGIN });
    try {
      const resp = await customFetch.get("/orders");
      const singleOrder = resp.data;
      dispatch({ type: GET_SINGLE_ORDER_SUCCESS, payload: singleOrder });
    } catch (error) {
      dispatch({ type: GET_SINGLE_ORDER_ERROR });
    }
  };

  const createOrder = async (order) => {
    dispatch({ type: CREATE_ORDER_BEGIN });
    try {
      const resp = await customFetch.post("/orders", order);
      order = resp.data;
      dispatch({ type: CREATE_ORDER_SUCCESS, payload: order });
    } catch (error) {
      dispatch({ type: CREATE_ORDER_ERROR });
    }
  };

  const getCurrentUserOrders = async () => {
    dispatch({ type: GET_USER_ORDERS_BEGIN });
    try {
      const resp = await customFetch.get("/orders/showAllMyOrders");
      const userOrders = resp.data;
      dispatch({ type: GET_USER_ORDERS_SUCCESS, payload: userOrders });
    } catch (error) {
      dispatch({ type: GET_USER_ORDERS_ERROR });
    }
  };

  return (
    <OrderContext.Provider
      value={{
        ...state,
        getAllOrders,
        getSingleOrder,
        createOrder,
        getCurrentUserOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useOrderContext = () => {
  return useContext(OrderContext);
};
