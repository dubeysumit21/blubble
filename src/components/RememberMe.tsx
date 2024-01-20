import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";

interface Props {
  checked: boolean;
  setChecked: (checked: boolean) => void;
}

const RememberMe: React.FC<Props> = (props: Props) => {
  const { checked, setChecked } = props;
  return (
    <View style={styles.rememberMe}>
      <TouchableOpacity
        onPress={() => {
          setChecked(!checked);
        }}
      >
        <MaterialCommunityIcons
          name={checked ? "checkbox-marked" : "checkbox-blank-outline"}
          size={20}
          color="#FFFFFF"
        />
      </TouchableOpacity>
      <Text style={styles.rememberMeText}>Remember Me</Text>
    </View>
  );
};

export default RememberMe;
