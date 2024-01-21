/* eslint-disable prettier/prettier */
import { createReducer } from "@reduxjs/toolkit";

interface UserInfoState {
  service: string;
  userId: string;
  email: string;
  familyName: string;
  givenName: string;
  iss: string;
  pictureUrl: string;
  phoneNumber: string;
  addressTypesAvailable: string[];
  address: Array<{
    coordinates: any;
    name: string;
    contact: string;
    flat: string;
    locality: string;
    landmark: string;
  }>;
}

const initialState: UserInfoState = {
  service: "blubble",
  userId: "",
  email: "",
  familyName: "",
  givenName: "",
  iss: "",
  pictureUrl: "",
  phoneNumber: "",
  addressTypesAvailable: ["Home"],
  address: [{
    coordinates: null,
    name: "",
    contact: "",
    flat: "",
    locality: "",
    landmark: "",
  }],
};



export const userInfoReducer: any = createReducer(initialState, {
    setUserInfo: (state, action)  => {
      state.service = action.payload;
      state.userId = action.payload.userId;
      state.email = action.payload.email;
      state.familyName = action.payload.familyName;
      state.givenName = action.payload.givenName;
      state.iss = action.payload.iss;
      state.pictureUrl = action.payload.pictureUrl;
    },
    setUserPhoneNumber: (state, action)  => {
        state.phoneNumber = action.payload.phoneNumber;
    },
    setUserAddress: (state, action) => {
        state.address = action.payload;
    },
    setAvailableUserType: (state, action) => {
      state.addressTypesAvailable = action.payload;
    },
  });