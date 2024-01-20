import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

interface Props {
  onGooglePressed: () => void;
}

const SocialMediaLogins: React.FC<Props> = (props: Props) => {
  const { onGooglePressed } = props;
  return (
    <View style={styles.sMWrapper}>
      <View style={styles.sMBody}>
        <TouchableOpacity
          onPress={() => {
            onGooglePressed();
          }}
        >
          <Image
            source={require("../assets/google.png")}
            style={styles.googleImage}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/facebook.png")}
            style={styles.facebookImage}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/apple.png")}
            style={styles.appleImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SocialMediaLogins;
