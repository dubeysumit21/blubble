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
  KeyboardAvoidingView,
} from "react-native";

import { styles } from "./styles";
import SocialMediaLogins from "../components/SocialMediaLogins";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import jwt_decode from "jwt-decode";
import { blubleEnums } from "../utils/enums";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/actions/user";
import PhoneNumberEntry from "../components/PhoneNumberEntry";
import CustomLoader from "../components/CustomLoader";
import ProvacyPolicySection from "../components/PrivacyPolicySection";

const { width, height } = Dimensions.get("screen");
GoogleSignin.configure();

const Login: React.FC = (props: any) => {
  const { navigation } = props;
  const [loader, setLoader] = useState<boolean>(false);
  const [hideBack, setHideBack] = useState<boolean>(false);
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
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/background.png")}
        style={{ width, height }}
        resizeMode="cover"
      />
      {loader ? <CustomLoader /> : null}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.animationContainer}
      >
        <View style={styles.animatingView}>
          <PhoneNumberEntry
            hideBack={() => {
              setHideBack(true);
            }}
            showBack={() => {
              setHideBack(false);
            }}
            navigation={navigation}
            setLoader={(value: boolean) => {
              setLoader(value);
            }}
          />
        </View>
        <SocialMediaLogins
          onGooglePressed={() => {
            signIn();
          }}
        />
      </KeyboardAvoidingView>
      <ProvacyPolicySection />
    </View>
  );
};

export default Login;
