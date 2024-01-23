/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useRef, useState } from "react";
import { View, Dimensions, ScrollView } from "react-native";
import { styles } from "./styles";
import SearchBanner from "../components/SearchBanner";
import { strings } from "../utils/constants";

const { width } = Dimensions.get("screen");

const UserOnboarding: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<number>(1);
  const animationRef = useRef<any>(null);
  const scrollRef: any = useRef();
  useEffect(() => {
    animationRef.current?.play(30, 120);
  }, []);
  const scrollToWidth = () => {
    scrollRef.current?.scrollTo({
      x: width * currentImage,
      animated: true,
    });
    setCurrentImage((prevCurrentImage) => {
      return prevCurrentImage + 1;
    });
  };
  return (
    <View style={styles.onboardingScreen}>
      <ScrollView
        contentContainerStyle={{}}
        horizontal={true}
        pagingEnabled={true}
        ref={scrollRef}
        scrollEventThrottle={70}
        showsHorizontalScrollIndicator={false}
      >
        <SearchBanner
          file={require("../assets/SearchMap.json")}
          color="#E29BB0"
          buttonColor="#F04770"
          heading={strings.searchHeading}
          subHeading={strings.searchSubHeading}
          style={styles.lottieSearch}
          onNextButtonPressed={scrollToWidth}
        />
        <SearchBanner
          file={require("../assets/give.json")}
          color="#75BED0"
          buttonColor="#118BB1"
          heading={strings.handOver}
          subHeading={strings.handOverSubHeading}
          style={styles.lottieGive}
          onNextButtonPressed={scrollToWidth}
        />
        <SearchBanner
          file={require("../assets/Laundry.json")}
          color="#73DDC5"
          buttonColor="#07D8A0"
          heading={strings.takeItHeading}
          subHeading={strings.takeItSubHeading}
          style={styles.lottieWork}
          onNextButtonPressed={scrollToWidth}
        />
        <SearchBanner
          file={require("../assets/deliver.json")}
          color="#FFBE97"
          buttonColor="#F2A042"
          heading={strings.deliverHeading}
          subHeading={strings.deliverSubHeading}
          style={styles.lottieWork}
          onNextButtonPressed={scrollToWidth}
          last={true}
        />
      </ScrollView>
    </View>
  );
};

export default UserOnboarding;
