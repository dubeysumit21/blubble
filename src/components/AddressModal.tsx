import React, { useRef, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./styles";
import Modal from "react-native-modalbox";
import AddressTypePanel from "./AddressTypePanel";
import AddressEntryBox from "./AddressEntryBox";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  setName: (value: string) => void;
  setContact: (value: string) => void;
  setFlat: (value: string) => void;
  setLocality: (value: string) => void;
  setLandmark: (value: string) => void;
  saveAddress: () => void;
}

const AddressModal: React.FC<Props> = (props: Props) => {
  const {
    isOpen,
    setIsOpen,
    setName,
    setContact,
    setFlat,
    setLocality,
    setLandmark,
    saveAddress,
  } = props;
  const show: any = useRef();
  const addressFields = [
    {
      type: "name",
      label: "Name",
      valueSetter: (value: string) => {
        setName(value);
      },
    },
    {
      type: "contact",
      label: "Contact Number",
      valueSetter: (value: string) => {
        setContact(value);
      },
    },
    {
      type: "flat",
      label: "Flat / House No / Floor / Building",
      valueSetter: (value: string) => {
        setFlat(value);
      },
    },
    {
      type: "locality",
      label: "Area / Sector / Locality",
      valueSetter: (value: string) => {
        setLocality(value);
      },
    },
    {
      type: "landmark",
      label: "Nearby Landmark",
      valueSetter: (value: string) => {
        setLandmark(value);
      },
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      show.current.focusKeyboard();
    }, 500);
  }, []);
  return (
    <Modal
      style={styles.addressModalView}
      position="center"
      backdrop={true}
      isOpen={isOpen}
      coverScreen={true}
      onClosed={() => {
        setIsOpen(false);
      }}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.addressBodyWrapper}>
          <View>
            <AddressTypePanel />
            <View>
              {addressFields.map((a: any) => {
                return (
                  <AddressEntryBox
                    key={a.type}
                    onChangeText={(text: string) => a?.valueSetter(text)}
                    type={a.type}
                    label={a.label}
                    ref={show}
                  />
                );
              })}
            </View>
          </View>
          <TouchableOpacity
            style={styles.addressSaveButton}
            onPress={() => {
              saveAddress();
            }}
          >
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default AddressModal;
