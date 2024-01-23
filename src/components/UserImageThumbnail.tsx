import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";

const UserImageThumbnail: React.FC = () => {
  return (
    <View style={styles.thumbnailWrapper}>
      <Image
        source={require("../assets/dummy_image.jpg")}
        style={styles.thumbnail}
      />
    </View>
  );
};

export default UserImageThumbnail;
