import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

const UserImageThumbnail: React.FC = () => {
  return (
    <TouchableOpacity style={styles.thumbnailWrapper}>
      <Image
        source={require("../assets/dummy_image.jpg")}
        style={styles.thumbnail}
      />
    </TouchableOpacity>
  );
};

export default UserImageThumbnail;
