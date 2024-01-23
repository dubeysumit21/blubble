import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { strings } from "../utils/constants";
import { styles } from "./styles";

interface Props {
  onSkipButtonPressed: () => void;
}

const SkipBannerButton: React.FC<Props> = (props: Props) => {
  const { onSkipButtonPressed } = props;
  return (
    <TouchableOpacity
      style={styles.skipButton}
      onPress={() => {
        onSkipButtonPressed();
      }}
    >
      <Text style={styles.skipText}>{strings.skip}</Text>
    </TouchableOpacity>
  );
};

export default SkipBannerButton;
