/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Image,
  Dimensions,
  Platform,
  Text,
  KeyboardAvoidingView,
  Animated,
  TouchableOpacity,
} from "react-native";

import { styles } from "./styles";
import SocialMediaLogins from "../components/SocialMediaLogins";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import jwt_decode from "jwt-decode";
import { blubleEnums } from "../utils/enums";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/actions/user";
import SignInSection from "../components/SignInSection";
import PhoneNumberEntry from "../components/PhoneNumberEntry";
import BackButton from "../components/BackButton";

const { width, height } = Dimensions.get("screen");
GoogleSignin.configure();

const Login: React.FC = (props: any) => {
  const { navigation } = props;
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [backVisible, setBackVisible] = useState<boolean>(false);
  const [hideBack, setHideBack] = useState<boolean>(false);
  const [sBounceValue, setSBounceValue] = useState<any>(
    new Animated.Value(width / 2),
  );
  const [pBounceValue, setPBounceValue] = useState<any>(
    new Animated.Value(width),
  );
  const dispatch = useDispatch();
  const animationRef = useRef<any>(null);
  useEffect(() => {
    animationRef.current?.play(30, 120);
  }, []);
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo: any = await GoogleSignin.signIn();
      const user: any = jwt_decode(userInfo?.idToken);
      console.info("==?", user);
      const loggedInUser = {
        service: blubleEnums.GOOGLE,
        userId: user?.sub,
        email: user?.email,
        familyName: user?.family_name,
        givenName: user?.given_name,
        iss: user?.iss,
        pictureUrl: user?.picture,
      };
      // @ts-ignore
      dispatch(setUserInfo(loggedInUser));
    } catch (error) {
      console.info("Error", error);
    }
  };
  const goToOTPScreen = () => {
    setBackVisible(true);
    Animated.spring(sBounceValue, {
      toValue: -width,
      velocity: 3,
      tension: 2,
      friction: 8,
      useNativeDriver: false,
    }).start();
    Animated.spring(pBounceValue, {
      toValue: -width / 2,
      velocity: 3,
      tension: 2,
      friction: 8,
      useNativeDriver: false,
    }).start();
  };
  const goToSignInScreen = () => {
    setBackVisible(false);
    Animated.spring(sBounceValue, {
      toValue: width / 2,
      velocity: 3,
      tension: 2,
      friction: 8,
      useNativeDriver: false,
    }).start();
    Animated.spring(pBounceValue, {
      toValue: width,
      velocity: 3,
      tension: 2,
      friction: 8,
      useNativeDriver: false,
    }).start();
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/background.png")}
        style={{ width, height }}
        resizeMode="cover"
      />
      {backVisible && !hideBack && (
        <BackButton
          onPress={() => {
            goToSignInScreen();
          }}
          color="#FFFFFF"
        />
      )}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.animationContainer}
      >
        <Animated.View
          style={{
            ...styles.animatingView,
            transform: [{ translateX: sBounceValue }],
          }}
        >
          <SignInSection
            username={username}
            password={password}
            setUsername={(text: string) => {
              setUsername(text);
            }}
            setPassword={(text: string) => {
              setPassword(text);
            }}
          />
        </Animated.View>
        <Animated.View
          style={{
            ...styles.animatingView,
            transform: [{ translateX: pBounceValue }],
          }}
        >
          <PhoneNumberEntry
            hideBack={() => {
              setHideBack(true);
            }}
            showBack={() => {
              setHideBack(false);
            }}
            navigation={navigation}
          />
        </Animated.View>
        {!backVisible && <Text style={styles.orText}>Or</Text>}
        {!backVisible && (
          <SocialMediaLogins
            onGooglePressed={() => {
              // signIn();
              goToOTPScreen();
            }}
          />
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
