import React, { useRef, useEffect, useState } from "react";
import { View, Text, TextInput, Dimensions } from "react-native";
import Modal from "react-native-modalbox";
import { styles } from "./styles";
import DatePicker from "react-native-date-picker";
import moment from "moment";

const { height } = Dimensions.get("screen");

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  activeOption: string;
  email: string;
  dob: string;
  setDob?: (value: string) => void;
  setEmail?: (value: string) => void;
  setErrorType: (value: string) => void;
}

const UserEditInfo: React.FC<Props> = (props: Props) => {
  const { isOpen, setIsOpen, activeOption, setDob, setEmail, email, setErrorType } = props;
  const [date, setDate] = useState<any>(new Date());
  const textInputRef: any = useRef();
  useEffect(() => {
    setTimeout(() => {
      textInputRef?.current?.focus();
    }, 500);
  }, []);
  return (
    <Modal
      style={{
        ...styles.userEditStyles,
        height: activeOption === "dob" ? height - 450 : height - 400,
      }}
      backdrop={true}
      isOpen={isOpen}
      coverScreen={true}
      onClosed={() => {
        setIsOpen(false);
        setErrorType("");
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.editHeading}>
          Edit {activeOption === "email" ? "email" : "Date of birth"}
        </Text>
        {activeOption === "email" ? (
          <TextInput
            ref={textInputRef}
            style={styles.editInputBox}
            placeholder="Email"
            value={email}
            onChangeText={(text: string) => {
              setEmail && setEmail(text)
            }}
          />
        ) : (
          <DatePicker
            date={date}
            onDateChange={(date: any) => {
              setDate(date);
              setDob && setDob(moment(date).format("DD-MM-YYYY"));
              console.info("Date", );
            }}
            style={{ alignSelf: "center" }}
            mode="date"
          />
        )}
      </View>
    </Modal>
  );
};

export default UserEditInfo;
