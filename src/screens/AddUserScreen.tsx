/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from "react";
import { View, Dimensions, Image, Text, SafeAreaView } from "react-native";
import GenderSelectionTile from "../components/GenderSelectionTIle";
import NameSection from "../components/NameSection";
import UserEditTile from "../components/UserEditTile";
import UserImageThumbnail from "../components/UserImageThumbnail";
import { styles } from "./styles";
import { Fontisto } from "@expo/vector-icons";
import CustomButton from "../components/CustomButton";
import UserEditInfo from "../components/UserEditInfo";
import { validateDOB, validateEmail } from "../utils/utils";
import Toast from "react-native-toast-message";
import moment from "moment";

const { width } = Dimensions.get("screen");

const AddUserScreen: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("Katherine Johnson");
  const [email, setEmail] = useState<string>("Email");
  const [dob, setDob] = useState<string>("DD-MM-YYYY");
  const [errorType, setErrorType] = useState<string>("");
  const [activeOption, setActiveOption] = useState<string>("");
  const [genderConfig, setGenderConfig] = useState<any>([
    { type: "M", render: <Fontisto name="male" size={54} color="#979797" /> },
    { type: "F", render: <Fontisto name="female" size={54} color="#979797" /> },
    {
      type: "NS",
      render: <Text style={styles.notChosen}>Choose not to disclose</Text>,
    },
  ]);
  const onGenderIconPressed = (item: any) => {
    setGenderConfig((prevGenderConfig: any) => {
      return prevGenderConfig.map((g: any) => {
        if (g?.type === item) {
          return {
            ...g,
            selected: true,
            render:
              g?.type === "NS" ? (
                <Text style={{ ...styles.notChosen, color: "#FFC000" }}>
                  Choose not to disclose
                </Text>
              ) : g?.type === "M" ? (
                <Fontisto name="male" size={54} color="#FFC000" />
              ) : (
                <Fontisto name="female" size={54} color="#FFC000" />
              ),
          };
        } else {
          return {
            ...g,
            selected: false,
            render:
              g?.type === "M" ? (
                <Fontisto name="male" size={54} color="#979797" />
              ) : g?.type === "F" ? (
                <Fontisto name="female" size={54} color="#979797" />
              ) : (
                <Text style={styles.notChosen}>Choose not to disclose</Text>
              ),
          };
        }
      });
    });
  };
  const submitHandler = () => {
    if (!validateEmail(email)) {
      Toast.show({
        type: "error",
        text1: "Oops!",
        text2: "The email you have entered is not valid.",
        position: "top",
        topOffset: 60,
      });
      setErrorType("email");
      return;
    }
    if (!validateDOB(dob)) {
      Toast.show({
        type: "error",
        text1: "Oops!",
        text2: "Please enter your date of birth.",
        position: "top",
        topOffset: 60,
      });
      setErrorType("dob");
      return;
    }
    if (!(genderConfig.find((g: any) => g.selected))) {
      Toast.show({
        type: "error",
        text1: "Oops!",
        text2: "Please select your gender.",
        position: "top",
        topOffset: 60,
      });
      setErrorType("gender");
    }
    const requestBody = {
      first_name: name.split(" ")[0],
      last_name: name.split(" ")[1],
      email: email,
      dob: moment(dob, 'DD-MM-YYYY').unix(),
      gender: genderConfig.find((g: any) => g.selected)?.type,
    };
    console.info("requestBody", requestBody)
  };
  return (
    <SafeAreaView style={styles.addUserScreen}>
      {isOpen ? (
        <UserEditInfo
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          activeOption={activeOption}
          email={email}
          dob={dob}
          setDob={setDob}
          setEmail={setEmail}
          setErrorType={setErrorType}
        />
      ) : null}
      <View style={{ width, height: "38%" }}>
        <Image
          source={require("../assets/dummy_image.jpg")}
          style={styles.displayImage}
        />
        <Image
          source={require("../assets/white_wave.png")}
          style={styles.waveImage}
          resizeMode="contain"
        />
        <UserImageThumbnail />
      </View>
      <View style={styles.userProfileView}>
        <NameSection name={name}/>
        <View style={styles.horizontalLine} />
        <UserEditTile
          type="email"
          title={email}
          onPress={() => {
            setIsOpen(true);
            setActiveOption("email");
          }}
          activeOption={activeOption}
          errorType={errorType}
        />
        <View style={styles.genderSelection}>
          {genderConfig.map((g: any) => (
            <GenderSelectionTile
              key={g.type}
              icon={g?.render}
              type={g?.type}
              selected={g?.selected}
              onGenderIconPressed={(type: string) => {
                onGenderIconPressed(type);
              }}
            />
          ))}
        </View>
        <UserEditTile
          type="dob"
          title={dob}
          onPress={() => {
            setIsOpen(true);
            setActiveOption("dob");
          }}
          activeOption={activeOption}
          errorType={errorType}
        />
        <CustomButton label="Submit" onPress={() => submitHandler()}/>
      </View>
    </SafeAreaView>
  );
};

export default AddUserScreen;
