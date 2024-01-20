/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Toast from "react-native-toast-message";

export const validateEmail = (email: string): RegExpMatchArray | null => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export const otpSent = () => {
  Toast.show({
    type: "success",
    text1: "Sent",
    text2: "An OTP has been sent to your number.",
    position: "top",
    topOffset: 60,
  });
};

export const otpReSent = () => {
  Toast.show({
    type: "success",
    text1: "Sent",
    text2: "An OTP has been re-sent to your number.",
    position: "top",
    topOffset: 60,
  });
};

export const invalidNumber = () => {
  Toast.show({
    type: "error",
    text1: "Oops!",
    text2: "The number seems to be invalid, enter a valid one.",
    position: "top",
    topOffset: 60,
  });
};
