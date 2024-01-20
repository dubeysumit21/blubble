import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../screens/styles";

interface Props {
  icon: any;
  onChange: (text: string) => void;
  eye?: any;
  placeholder: string;
  onFocused?: () => void;
  onBlurred?: () => void;
  customeStyle?: any;
  secureTextEntry?: boolean;
  onIconPressed?: () => void;
  value: string;
}

const CustomTextInput: React.FC<Props> = (props: Props) => {
  const {
    icon,
    onChange,
    eye,
    placeholder,
    onFocused,
    onBlurred,
    customeStyle,
    secureTextEntry,
    onIconPressed,
    value,
  } = props;
  return (
    <View style={{ ...styles.textBoxWrapper, ...customeStyle }}>
      {icon}
      <TextInput
        style={styles.textBoxStyle}
        placeholderTextColor={"#FFFFFF"}
        onChangeText={(text: string) => {
          onChange(text);
        }}
        placeholder={placeholder}
        onFocus={() => onFocused?.()}
        onBlur={() => onBlurred?.()}
        secureTextEntry={secureTextEntry}
        value={value?.toLowerCase()}
      />
      <TouchableOpacity
        onPress={() => {
          onIconPressed?.();
        }}
      >
        {eye}
      </TouchableOpacity>
    </View>
  );
};

export default CustomTextInput;
