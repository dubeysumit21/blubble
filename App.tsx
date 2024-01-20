/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useRef, useEffect, useState } from "react";
import { StyleSheet, Image, Dimensions, View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import BaseNavigator from "./src/navigators/BaseNavigator";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";

const { width, height } = Dimensions.get("screen");

/*
  1. Create the config
*/
const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "#4BB543" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 17,
        color: "#4BB543",
        fontFamily: "Quicksand-Bold",
      }}
      text2Style={{
        fontSize: 15,
        color: "#4BB543",
        fontFamily: "Quicksand-Regular",
      }}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontFamily: "Quicksand-Bold",
        color: "#FF0000",
        fontSize: 17,
      }}
      text2Style={{
        fontFamily: "Quicksand-Regular",
        fontSize: 15,
        color: "#FF0000",
      }}
    />
  ),
  tomatoToast: ({ text1, props }) => (
    <View style={{ height: 60, width: "100%", backgroundColor: "tomato" }}>
      <Text>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  ),
};

const App: React.FC = () => {
  const animationRef = useRef<any>(null);
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);
  const getFonts = async (): Promise<void> => {
    await Font.loadAsync({
      "Quicksand-Bold": require("./src/assets/Quicksand-Bold.ttf"),
      "Quicksand-Light": require("./src/assets/Quicksand-Light.ttf"),
      "Quicksand-Medium": require("./src/assets/Quicksand-Medium.ttf"),
      "Quicksand-Regular": require("./src/assets/Quicksand-Regular.ttf"),
      "Quicksand-SemiBold": require("./src/assets/Quicksand-SemiBold.ttf"),
    });
    setFontsLoaded(true);
  };
  useEffect(() => {
    animationRef.current?.play(30, 120);
    getFonts();
  }, []);
  if (fontsLoaded) {
    return (
      <>
        <SafeAreaProvider>
          <NavigationContainer>
            <Provider store={store}>
              <BaseNavigator />
            </Provider>
          </NavigationContainer>
        </SafeAreaProvider>
        <Toast config={toastConfig} />
      </>
    );
  } else {
    return (
      <Image
        source={require("./src/assets/background.png")}
        resizeMode="cover"
        style={styles.mainImage}
      />
    );
  }
};

const styles = StyleSheet.create({
  mainImage: {
    width,
    height,
  },
});

export default App;
