import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

interface Props {
  label: string;
}

const CustomButton: React.FC<Props> = (props: Props) => {
  const { label } = props;
  return (
    <TouchableOpacity style={styles.customButton}>
      <Text style={styles.customButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
