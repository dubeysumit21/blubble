import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

const NameSection: React.FC = () => {
  return (
    <View style={styles.nameWrapper}>
      <Text style={styles.firstName}>Katherine</Text>
      <Text style={styles.lastName}>Johnson</Text>
    </View>
  );
};

export default NameSection;
