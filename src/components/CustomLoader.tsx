import React, { useRef, useEffect } from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import { styles } from "./styles";

const CustomLoader: React.FC = () => {
  const animationRef = useRef<any>(null);
  useEffect(() => {
    animationRef.current?.play(30, 120);
  }, []);
  return (
    <View
      style={{
        backgroundColor: "#FFFFFF90",
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: 200,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LottieView
        ref={animationRef}
        source={require("../assets/lottie_dots.json")}
        loop={true}
        style={{ ...styles.lottieLogin, marginTop: 20 }}
      />
    </View>
  );
};

export default CustomLoader;
