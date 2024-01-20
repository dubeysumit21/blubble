import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const ProvacyPolicySection: React.FC = () => {
  return (
    <View style={styles.privacyPolicySection}>
      <Text style={styles.continuePolicyText}>
        By continuing, you agree to our
      </Text>
      <View style={styles.clickableButton}>
        <TouchableOpacity>
          <Text style={styles.privacyPolicy}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.terms}>Terms of Service</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProvacyPolicySection;
