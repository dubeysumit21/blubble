import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";

const LoginInfo: React.FC = () => {
  return (
    <View style={styles.loginInfo}>
      <AntDesign name="exclamationcircle" size={13} color="#FFFFFF" />
      <Text style={styles.loginText}>Use you email as username.</Text>
    </View>
  );
};

export default LoginInfo;
