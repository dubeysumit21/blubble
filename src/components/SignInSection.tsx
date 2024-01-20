import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CustomTextInput from "./CustomTextInputs";
import LottieView from "lottie-react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { validateEmail } from "../utils/utils";
import RememberMe from "./RememberMe";
import LoginInfo from "./LoginInfo";
import SignUpActions from "./SignUpActions";
import { styles } from "./styles";

interface Props {
  username: string;
  password: string;
  setUsername: (text: string) => void;
  setPassword: (text: string) => void;
}

const SignInSection: React.FC<Props> = (props: Props) => {
  const { username, password, setUsername, setPassword } = props;
  const [errorStyle, setErrorStyle] = useState<any>();
  const [infoVisible, setInfoVisible] = useState<boolean>(false);
  const [usernameValidated, setUsernameValidated] = useState<boolean>(false);
  const [passwordValidated, setPasswordValidated] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [checked, setChecked] = useState<boolean>(false);
  const animationRef = useRef<any>(null);
  useEffect(() => {
    animationRef.current?.play(30, 120);
  }, []);
  return (
    <View style={styles.bodyWrapper}>
      <View style={styles.lottieWrapper}>
        <LottieView
          ref={animationRef}
          source={require("../assets/login_lottie.json")}
          loop={true}
          style={styles.lottieLogin}
        />
        <View style={styles.signInBox}>
          <Text style={styles.signInText}>Sign in</Text>
        </View>
      </View>
      <CustomTextInput
        icon={<AntDesign name="user" size={28} color="#FFFFFF" />}
        value={username}
        onChange={(text: string) => {
          setUsername(text);
        }}
        placeholder="Username"
        onFocused={() => {
          setInfoVisible(true);
        }}
        onBlurred={() => {
          if (validateEmail(username) !== null) {
            setInfoVisible(false);
            setErrorStyle({
              borderColor: "#FFFFFF",
              backgroundColor: "#FFFFFF50",
            });
            setUsernameValidated(true);
          } else {
            setErrorStyle({
              borderColor: "red",
              backgroundColor: "#FF000020",
            });
            setUsernameValidated(false);
          }
        }}
        customeStyle={errorStyle}
      />
      {infoVisible && <LoginInfo />}
      <CustomTextInput
        icon={<AntDesign name="lock" size={28} color="#FFFFFF" />}
        value={password}
        onChange={(text: string) => {
          setPassword(text);
          if (text.length >= 6) {
            setPasswordValidated(true);
          } else {
            setPasswordValidated(false);
          }
        }}
        eye={
          showPassword ? (
            <FontAwesome name="eye" size={28} color="#FFFFFF" />
          ) : (
            <FontAwesome name="eye-slash" size={28} color="#FFFFFF" />
          )
        }
        placeholder="Password"
        secureTextEntry={showPassword}
        onIconPressed={() => {
          setShowPassword(!showPassword);
        }}
      />
      <RememberMe
        checked={checked}
        setChecked={(check: boolean) => {
          setChecked(check);
        }}
      />
      <TouchableOpacity
        style={{
          ...styles.buttonStyle,
          opacity: !(usernameValidated && passwordValidated) ? 0.5 : 1,
        }}
        activeOpacity={0.1}
        disabled={!(usernameValidated && passwordValidated)}
        onPress={() => null}
      >
        <Text style={styles.buttonStyleText}>Login</Text>
      </TouchableOpacity>
      <SignUpActions />
    </View>
  );
};

export default SignInSection;
