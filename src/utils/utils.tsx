/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Toast from "react-native-toast-message";

export const validateEmail = (email: string): RegExpMatchArray | null => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export const validateDOB = (dob: string): RegExpMatchArray | null => {
  return String(dob)
    .toLowerCase()
    .match(
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
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
