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
    flexDirection: "column",
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
  addressSaveButton: {
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#FFC000",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    marginVertical: 20,
  },
  searchBox: {
    backgroundColor: "#FFFFFF",
    width: "90%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    marginVertical: 10,
    position: "absolute",
    top: "16%",
    zIndex: 200,
  },
  inputContainer: {
    width: "95%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    height: 45,
    color: "#5d5d5d",
    fontSize: 18,
    fontFamily: "Quicksand-Regular",
  },
  descriptionText: {
    color: "#1faadb",
  },
  listView: {
    height: 200,
  },
  saveText: {
    color: "#FFFFFF",
    fontFamily: "Quicksand-SemiBold",
    fontSize: 24,
  },
  lottieWrapper: {
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  onboardingScreen: {
    backgroundColor: "#FFFFFF",
    height,
    width,
    justifyContent: "center",
    alignItems: "center",
  },
  lottieSearch: {
    width: 450,
    height: 350,
    borderRadius: 200,
  },
  lottieGive: {
    width: 300,
    height: 300,
    borderRadius: 200,
  },
  lottieWork: {
    width: 450,
    height: 400,
    borderRadius: 200,
  },
  horizontalLine: {
    width: "100%",
    borderColor: "#97979750",
    borderWidth: 0.5,
    height: 1,
    marginBottom: 20,
  },
  userProfileView: {
    height: "55%",
    paddingHorizontal: 25,
  },
  waveImage: {
    width: "100%",
    height: 300,
    position: "absolute",
    top: "30%",
    transform: [{ scaleX: -1 }],
  },
  displayImage: { width: "100%", height: 300, opacity: 0.5 },
  addUserScreen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
  },
  genderSelection: {
    width: "98%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  notChosen: {
    color: "#979797",
    fontSize: 15,
    fontFamily: "Quicksand-Medium",
    textAlign: "center",
  },
});
