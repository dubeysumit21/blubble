import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

interface Props{
  name: string;
};

const NameSection: React.FC<Props> = (props: Props) => {
  const { name }  = props;
  return (
    <View style={styles.nameWrapper}>
      <Text style={styles.firstName}>{name.split(" ")[0]}</Text>
      <Text style={styles.lastName}>{name.split(" ")[1]}</Text>
    </View>
  );
};

export default NameSection;
