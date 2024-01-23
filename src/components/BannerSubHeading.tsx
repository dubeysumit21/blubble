import React from "react";
import { Text } from "react-native";
import { styles } from "./styles";

interface Props {
  text: string;
}

const BannerSubHeading: React.FC<Props> = (props: Props) => {
  const { text } = props;
  return <Text style={styles.bannerSubHeading}>{text}</Text>;
};

export default BannerSubHeading;
