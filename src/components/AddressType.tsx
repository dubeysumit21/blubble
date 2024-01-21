import React, { useState } from "react";
import { TouchableOpacity, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setAvailableUserType } from "../redux/actions/user";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  text: string;
  editable?: boolean;
}

const AddressType: React.FC<Props> = (props: Props) => {
  const { text, editable } = props;
  const [textEntry, setTextEntry] = useState<boolean>(false);
  const [addressType, setAddressType] = useState<string>("");
  const user = useSelector((state: any) => state.user);
  const dispath = useDispatch();
  return textEntry ? (
    <View style={styles.addressTypeInput}>
      <View style={styles.addressTypeEntry}>
        <TextInput
          placeholder="Enter address type"
          onChangeText={(text: string) => {
            setAddressType(text);
          }}
          autoFocus
        />
        <TouchableOpacity
          onPress={() => {
            setTextEntry(false);
          }}
        >
          <AntDesign name="closecircle" size={14} color="#A4A4A4" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          ...styles.addressTypeSave,
          opacity: addressType.length < 3 ? 0.5 : 1,
        }}
        disabled={addressType.length < 3}
        onPress={() => {
          const temp = [...user?.addressTypesAvailable, addressType];
          dispath(setAvailableUserType(temp));
          setTextEntry(false);
        }}
      >
        <Text style={styles.addressTypeSaveText}>Save</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <TouchableOpacity
      style={styles.typeBox}
      onPress={() => {
        if (editable) {
          setTextEntry(true);
        }
      }}
    >
      <Text style={styles.typeText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AddressType;
