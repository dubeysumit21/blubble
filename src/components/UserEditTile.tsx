import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./styles";

interface Props {
  type: string;
  title: string;
  onPress: () => void;
  activeOption: string;
  errorType: string;
}

const UserEditTile: React.FC<Props> = (props: Props) => {
  const { title, onPress, errorType, type } = props;
  return (
    <TouchableOpacity
      style={{ ...styles.userEditEmail, borderColor: type === errorType ? "#FF0000" : "#979797", backgroundColor: type === errorType ? "#FF000020" : "#FFFFFF" }}
      onPress={() => {
        onPress();
      }}
    >
      <Text style={styles.emailText}>{title}</Text>
      <Entypo name="chevron-right" size={20} color="black" />
    </TouchableOpacity>
  );
};

export default UserEditTile;
