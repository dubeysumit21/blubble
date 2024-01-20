import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";

interface Props {
  label: string;
  type: string;
  onChangeText: (text: string, type: string) => void;
}

const AddressEntryBox: React.FC<Props> = (props: Props) => {
  const { label, type, onChangeText } = props;
  return (
    <View style={{ width: "100%" }}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.inputBox}
        placeholder={label}
        placeholderTextColor={"#A4A4A4"}
        onChangeText={(text: string) => {
          onChangeText(text, type);
        }}
        autoFocus
      />
    </View>
  );
};

export default AddressEntryBox;
