/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";

interface Props {
  label: string;
  type: string;
  onChangeText: (text: string, type: string) => void;
}

const AddressEntryBox: React.FC<Props> = (props: Props, ref: any) => {
  const { label, type, onChangeText } = props;
  const inputRef: any = useRef();
  useImperativeHandle(ref, () => ({
    focusKeyboard: () => {
      inputRef?.current?.focus();
    },
  }));
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
        ref={inputRef}
      />
    </View>
  );
};

export default forwardRef(AddressEntryBox);
