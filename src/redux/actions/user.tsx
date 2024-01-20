import { type Dispatch } from "redux";

// Define your action type
interface MyAction {
  type: string;
  payload: any;
}

export const setUserInfo = (qty: any) => (dispatch: Dispatch<MyAction>) => {
  dispatch({
    type: "setUserInfo",
    payload: qty,
  });
};

export const setUserPhoneNumber =
  (qty: any) => (dispatch: Dispatch<MyAction>) => {
    dispatch({
      type: "setUserPhoneNumber",
      payload: qty,
    });
  };

export const setUserAddress = (qty: any) => (dispatch: Dispatch<MyAction>) => {
  dispatch({
    type: "setUserAddress",
    payload: qty,
  });
};
