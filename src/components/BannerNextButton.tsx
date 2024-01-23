/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { strings } from "../utils/constants";
import { styles } from "./styles";

interface Props {
  buttonColor: string;
  onNextButtonPressed: () => void;
  last?: boolean;
}

const BannerNextButton: React.FC<Props> = (props: Props) => {
  const { buttonColor, onNextButtonPressed, last } = props;
  return (
    <TouchableOpacity
      style={{
        backgroundColor: buttonColor,
        ...styles.bannerNextButton,
      }}
      onPress={() => {
        onNextButtonPressed();
      }}
    >
      <Text style={styles.bannerNextText}>
        {last ? strings.lets : strings.next}
      </Text>
    </TouchableOpacity>
  );
};

export default BannerNextButton;
