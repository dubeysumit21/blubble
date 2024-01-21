import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import AddressType from "./AddressType";
import { useSelector } from "react-redux";
import { styles } from "./styles";

const AddressTypePanel: React.FC = () => {
  const user = useSelector((state: any) => state.user);
  const [addrressType, setAddressType] = useState<any>(
    user?.addressTypesAvailable,
  );
  useEffect(() => {
    setAddressType(user?.addressTypesAvailable);
  }, [user?.addressTypesAvailable]);
  return (
    <View>
      <View style={styles.addAddressHeader}>
        <Text style={styles.enterText}>Enter address details</Text>
      </View>
      <View style={styles.panelMain}>
        <Text style={styles.savesText}>Save address as *</Text>
        <View style={styles.buttonsMain}>
          {addrressType?.map((t: any) => {
            return <AddressType key={t} text={t} />;
          })}
          <AddressType text="Others" editable={true} />
        </View>
      </View>
    </View>
  );
};

export default AddressTypePanel;
