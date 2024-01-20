import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  animationContainer: {
    position: "absolute",
    zIndex: 10,
    alignItems: "center",
    justifyContent: "center",
    height,
    width,
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  buttonContainer: {
    paddingTop: 20,
  },
  textBoxWrapper: {
    width: "84%",
    alignSelf: "center",
    flexDirection: "row",
    height: 55,
    backgroundColor: "#FFFFFF50",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  textBoxStyle: {
    width: "75%",
    height: 60,
    fontSize: 18,
    marginLeft: 10,
    fontFamily: "Quicksand-Medium",
    letterSpacing: 1.5,
    color: "#FFFFFF",
  },
  orText: {
    fontFamily: "Quicksand-SemiBold",
    color: "#FFFFFF",
    fontSize: 24,
    position: "absolute",
    bottom: 140,
  },
  animatingView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  continueButton: {
    width: "95%",
    alignSelf: "center",
    backgroundColor: "#FFC000",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    marginVertical: 20,
  },
  addAddressHeader: {
    width: "100%",
    justifyContent: "flex-start",
  },
  enterText: {
    fontFamily: "Quicksand-SemiBold",
    color: "#232023",
    fontSize: 22,
  },
});
