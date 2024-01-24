/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Image } from "expo-image";

interface Props {
  pickImage: () => void;
  image: any;
}

const UserImageThumbnail: React.FC<Props> = (props: Props) => {
  const { pickImage, image } = props;
  return (
    <TouchableOpacity
      style={styles.thumbnailWrapper}
      onPress={() => {
        pickImage();
      }}>
      <Image
        source={image ? { uri: image } : require("../assets/dummy_image.jpg")}
        style={styles.thumbnail}
      />
    </TouchableOpacity>
  );
};

export default UserImageThumbnail;
