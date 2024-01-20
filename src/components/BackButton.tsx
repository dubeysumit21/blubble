/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  onPress: () => void;
  color: string;
}

const BackButton: React.FC<Props> = (props: Props) => {
  const { onPress, color } = props;
  return (
    <TouchableOpacity
      style={{ position: "absolute", top: 70, zIndex: 30, left: 15 }}
      onPress={() => {
        onPress && onPress();
      }}
    >
      <Ionicons name="chevron-back" size={45} color={color} />
    </TouchableOpacity>
  );
};

export default BackButton;
