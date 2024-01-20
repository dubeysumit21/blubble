import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

const SignUpActions: React.FC = () => {
  return (
    <View style={styles.signUpWrapper}>
      <TouchableOpacity>
        <Text style={styles.notMember}>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.notMember}>Not a member?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpActions;
