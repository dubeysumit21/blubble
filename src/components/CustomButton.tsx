import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

interface Props {
  label: string;
  onPress: () => void;
}

const CustomButton: React.FC<Props> = (props: Props) => {
  const { label, onPress } = props;
  return (
    <TouchableOpacity style={styles.customButton} onPress={() => onPress()}>
      <Text style={styles.customButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
