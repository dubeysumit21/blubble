import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./styles";

interface Props {
  title: string;
}

const UserEditTile: React.FC<Props> = (props: Props) => {
  const { title } = props;
  return (
    <TouchableOpacity style={styles.userEditEmail}>
      <Text style={styles.emailText}>{title}</Text>
      <Entypo name="chevron-right" size={20} color="black" />
    </TouchableOpacity>
  );
};

export default UserEditTile;
