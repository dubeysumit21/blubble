/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
} from "react-native";
import LottieView from "lottie-react-native";
import PhoneInput from "react-native-phone-number-input";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";
import OTPTextInput from "react-native-otp-textinput";
import Toast from "react-native-toast-message";
import { invalidNumber, otpReSent, otpSent } from "../utils/utils";
import { Routes } from "../utils/Routes";
import auth from "@react-native-firebase/auth";

interface Props {
  hideBack: () => void;
  showBack: () => void;
  navigation: any;
  setLoader: (value: boolean) => void;
}

const PhoneNumberEntry: React.FC<Props> = (props: Props) => {
  const { hideBack, showBack, navigation, setLoader } = props;
  const [confirm, setConfirm] = useState<any>(null);
  const [code, setCode] = useState("");
  const [otpFlag, setOtpFlag] = useState<boolean>(false);
  const [otpVerified, setOtpVerified] = useState<boolean>(false);
  const [wrongOtp, setWrongOtp] = useState<boolean>(false);
  const phoneInput = useRef<any>(null);
  const otpRef: any = useRef();
  const animationRef = useRef<any>(null);
  const [phoneNumberError, setPhoneNumberError] = useState<boolean>(false);
  const [pBounceValue, setPBounceValue] = useState<any>(new Animated.Value(0));
  const [oBounceValue, setOBounceValue] = useState<any>(new Animated.Value(81));
  const [value, setValue] = useState<string>("");
  useEffect(() => {
    animationRef.current?.play(30, 120);
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  const openOTPSection = () => {
    setOtpFlag(true);
    Animated.spring(pBounceValue, {
      toValue: -80,
      velocity: 3,
      tension: 2,
      friction: 8,
      useNativeDriver: false,
    }).start();
    Animated.spring(oBounceValue, {
      toValue: 80,
      velocity: 3,
      tension: 2,
      friction: 8,
      useNativeDriver: false,
    }).start();
  };

  const resetPhoneNumber = () => {
    Animated.spring(pBounceValue, {
      toValue: 0,
      velocity: 3,
      tension: 2,
      friction: 8,
      useNativeDriver: false,
    }).start();
    Animated.spring(oBounceValue, {
      toValue: 81,
      velocity: 3,
      tension: 2,
      friction: 8,
      useNativeDriver: false,
    }).start();
    setOtpFlag(false);
    otpRef?.current?.clear();
  };

  const reSendOtp = () => {
    setConfirm(null);
    otpReSent();
    otpRef?.current?.clear();
    signInWithPhoneNumber();
  };

  const onAuthStateChanged = (user: any) => {
    if (user) {
      console.info("User", user);
    }
  };

  const signInWithPhoneNumber = async () => {
    const callingCode = phoneInput?.current?.getCallingCode();
    try {
      const confirmation = await auth().signInWithPhoneNumber(
        `+${callingCode}${value}`,
      );
      setConfirm(confirmation);
      otpSent();
      setLoader(false);
      openOTPSection();
    } catch (error: any) {
      setLoader(false);
      Toast.show({
        type: "error",
        text1: "Oops!",
        text2: "Something went wrong, please try again!",
        position: "top",
        topOffset: 60,
      });
    }
  };

  const confirmCode = async (text: string): Promise<any> => {
    try {
      setLoader(true);
      await confirm.confirm(text);
      setLoader(false);
      setOtpVerified(true);
      navigation.navigate(Routes.ADD_ADDRESS);
      resetPhoneNumber();
    } catch (error) {
      setLoader(false);
      setOtpVerified(false);
      setWrongOtp(true);
      Toast.show({
        type: "error",
        text1: "Oops!",
        text2: "Incorrect OTP entered!",
        position: "top",
        topOffset: 60,
      });
    }
  };

  return (
    <TouchableWithoutFeedback
      style={styles.phoneInputContainer}
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.phoneInputWrapper}>
        <Text
          style={{
            color: "#FFFFFF",
            fontFamily: "Quicksand-Bold",
            fontSize: 52,
            textAlign: "center",
            width: "100%",
          }}
        >
          Blubble
        </Text>
        <LottieView
          ref={animationRef}
          source={require("../assets/login_lottie.json")}
          loop={true}
          style={styles.lottieLogin}
        />
        <View
          style={{
            width: "100%",
            height: 40,
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "22%",
              borderWidth: 0.5,
              height: 1,
              borderColor: "#FFFFFF",
            }}
          />
          <Text
            style={{
              fontFamily: "Quicksand-SemiBold",
              color: "#FFFFFF",
              fontSize: 20,
            }}
          >
            Log in or Sign up
          </Text>
          <View
            style={{
              width: "22%",
              borderWidth: 0.5,
              height: 1,
              borderColor: "#FFFFFF",
            }}
          />
        </View>
        {/* <Text style={styles.enterMobileNumber}>
          Enter your mobile number to continue.
        </Text> */}
        <View style={styles.phoneNumberWrapper}>
          <Animated.View
            style={{
              width: "100%",
              height: 79,
              justifyContent: "center",
              alignItems: "center",
              transform: [{ translateY: pBounceValue }],
            }}
          >
            <PhoneInput
              ref={phoneInput}
              defaultValue={value}
              defaultCode="IN"
              placeholder="."
              layout="first"
              onChangeText={(text) => {
                setValue(text);
              }}
              containerStyle={{
                ...styles.phoneContainer,
                backgroundColor: phoneNumberError ? "#FF333350" : "transparent",
                borderColor: phoneNumberError ? "#FF3333F" : "#FFFFFF",
              }}
              textContainerStyle={styles.phoneTextContainer}
              textInputStyle={styles.phoneTextInput}
              codeTextStyle={styles.phoneCodeText}
              flagButtonStyle={{ width: 60 }}
              withDarkTheme
              withShadow
              textInputProps={{
                onFocus: () => {
                  hideBack();
                },
                onBlur: () => {
                  showBack();
                },
              }}
              renderDropdownImage={
                <AntDesign name="caretdown" size={12} color="#FFFFFF" />
              }
            />
          </Animated.View>
          <Animated.View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              height: 80,
              transform: [{ translateY: pBounceValue }],
            }}
          >
            <OTPTextInput
              inputCount={6}
              ref={otpRef}
              tintColor={
                wrongOtp ? "#FF3333" : otpVerified ? "#4BB543" : "#FFFFFF"
              }
              offTintColor={
                wrongOtp ? "#FF3333" : otpVerified ? "#4BB543" : "#FFFFFF"
              }
              textInputStyle={{
                // @ts-expect-error
                color: wrongOtp
                  ? "#FF3333"
                  : otpVerified
                    ? "#4BB543"
                    : "#FFFFFF",
                fontFamily: "Quicksand-Bold",
                fontSize: 24,
              }}
              handleTextChange={(text: string) => {
                if (text?.length === 6) {
                  confirmCode(text);
                } else {
                  setWrongOtp(false);
                  setOtpVerified(false);
                }
              }}
            />
          </Animated.View>
        </View>
        {otpFlag ? (
          <View style={styles.goBackWrapper}>
            <TouchableOpacity
              style={styles.goBack}
              onPress={() => {
                resetPhoneNumber();
              }}
            >
              <Text style={styles.goBackText}>Go Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.reSend}
              onPress={() => {
                reSendOtp();
              }}
            >
              <Text style={styles.goBackText}>Re Send</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => {
              const valid = phoneInput.current?.isValidNumber(value);
              if (valid && !otpFlag) {
                setLoader(true);
                setPhoneNumberError(false);
                signInWithPhoneNumber();
              } else if (otpFlag) {
                otpReSent();
              } else {
                invalidNumber();
                setPhoneNumberError(true);
              }
              Keyboard.dismiss();
            }}
          >
            <Text style={styles.continueText}>Send OTP</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PhoneNumberEntry;
