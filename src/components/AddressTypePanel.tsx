import React from "react";
import { View, Text } from "react-native";
import AddressType from "./AddressType";
import { useSelector } from "react-redux";
import { styles } from "./styles";

const AddressTypePanel: React.FC = () => {
  const user = useSelector((state: any) => state.user);
  return (
    <View style={styles.panelMain}>
      <Text style={styles.savesText}>Save address as *</Text>
      <View style={styles.buttonsMain}>
        {user?.address?.type?.map((t: any) => {
          return <AddressType key={t} text={t} />;
        })}
        <AddressType text="Others" editable={true} />
      </View>
    </View>
  );
};

export default AddressTypePanel;
