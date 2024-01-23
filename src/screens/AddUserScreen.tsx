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

const { width } = Dimensions.get("screen");

const AddUserScreen: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
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
  return (
    <SafeAreaView style={styles.addUserScreen}>
      {isOpen ? <UserEditInfo isOpen={isOpen} setIsOpen={setIsOpen} /> : null}
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
        <NameSection />
        <View style={styles.horizontalLine} />
        <UserEditTile
          title="dubey.sumit94.sd@gmail.com"
          onPress={() => {
            setIsOpen(true);
          }}
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
          title="21/02/1995"
          onPress={() => {
            setIsOpen(true);
          }}
        />
        <CustomButton label="Submit" />
      </View>
    </SafeAreaView>
  );
};

export default AddUserScreen;
