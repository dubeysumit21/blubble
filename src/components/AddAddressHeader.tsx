import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const AddAddressHeader: React.FC = () => {
  return (
    <View style={styles.addressHeaderWrapper}>
      <Text style={styles.addressText}>Add new address</Text>
      <TouchableOpacity>
        <Text style={styles.saveButton}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddAddressHeader;
