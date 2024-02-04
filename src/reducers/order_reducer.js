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

import { toast } from "react-toastify";

const order_reducer = (state, action) => {
  if (action.type === GET_ALL_ORDERS_BEGIN) {
    return { ...state, order_loading: true };
  }
  if (action.type === GET_ALL_ORDERS_SUCCESS) {
    return { ...state, order_loading: false };
  }
  if (action.type === GET_ALL_ORDERS_ERROR) {
    return { ...state, order_loading: false, order_error: true };
  }

  if (action.type === CREATE_ORDER_BEGIN) {
    return { ...state, order_loading: true };
  }
  if (action.type === CREATE_ORDER_SUCCESS) {
    return { ...state, order_loading: false };
  }
  if (action.type === CREATE_ORDER_ERROR) {
    return { ...state, order_loading: false, order_error: true };
  }

  if (action.type === GET_SINGLE_ORDER_BEGIN) {
    return { ...state, order_loading: true };
  }
  if (action.type === GET_SINGLE_ORDER_SUCCESS) {
    return { ...state, order_loading: false };
  }
  if (action.type === GET_SINGLE_ORDER_ERROR) {
    return { ...state, order_loading: false, order_error: true };
  }

  if (action.type === GET_USER_ORDERS_BEGIN) {
    return { ...state, order_loading: true };
  }
  if (action.type === GET_USER_ORDERS_SUCCESS) {
    return { ...state, order_loading: false };
  }
  if (action.type === GET_USER_ORDERS_ERROR) {
    return { ...state, order_loading: false, order_error: true };
  }
};

export default order_reducer;
