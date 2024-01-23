import React, { useRef, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import Modal from "react-native-modalbox";
import { styles } from "./styles";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const UserEditInfo: React.FC<Props> = (props: Props) => {
  const { isOpen, setIsOpen } = props;
  const textInputRef: any = useRef();
  useEffect(() => {
    setTimeout(() => {
      textInputRef.current.focus();
    }, 500);
  }, []);
  return (
    <Modal
      style={styles.userEditStyles}
      backdrop={true}
      isOpen={isOpen}
      coverScreen={true}
      onClosed={() => {
        setIsOpen(false);
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.editHeading}>Edit email</Text>
        <TextInput
          ref={textInputRef}
          style={styles.editInputBox}
          placeholder="Email"
          value="dubey.sumit94.sd@gmail.com"
        />
      </View>
    </Modal>
  );
};

export default UserEditInfo;
