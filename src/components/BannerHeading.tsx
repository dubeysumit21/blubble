import React from "react";
import { Text } from "react-native";
import { styles } from "./styles";

interface Props {
  text: string;
}

const BannerHeading: React.FC<Props> = (props: Props) => {
  const { text } = props;
  return <Text style={styles.bannerHeading}>{text}</Text>;
};

export default BannerHeading;
