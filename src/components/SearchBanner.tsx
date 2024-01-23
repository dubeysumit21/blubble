/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import { styles } from "./styles";
import BannerHeading from "./BannerHEading";
import BannerSubHeading from "./BannerSubHeading";
import BannerNextButton from "./BannerNextButton";
import SkipBannerButton from "./SkipBannerButton";

interface Props {
  file: any;
  color: string;
  buttonColor: string;
  heading: string;
  subHeading: string;
  style: any;
  onNextButtonPressed: () => void;
  last?: boolean;
}

const SearchBanner: React.FC<Props> = (props: Props) => {
  const {
    file,
    color,
    buttonColor,
    heading,
    subHeading,
    style,
    onNextButtonPressed,
    last,
  } = props;
  const animationRef = useRef<any>(null);
  useEffect(() => {
    animationRef.current?.play(30, 120);
  }, []);
  return (
    <View style={{ ...styles.onboardingWrapper, backgroundColor: color }}>
      <View style={styles.lottieWrapper}>
        <LottieView
          ref={animationRef}
          source={file}
          loop={true}
          style={style}
        />
      </View>
      <View style={styles.bannerHeaderWrapper}>
        <BannerHeading text={heading} />
        <BannerSubHeading text={subHeading} />
      </View>
      <View style={styles.bannerNextButtonWrapper}>
        <BannerNextButton
          buttonColor={buttonColor}
          onNextButtonPressed={onNextButtonPressed}
          last={last}
        />
      </View>
      {!last && (
        <View style={styles.bannerSkipButtonWrapper}>
          <SkipBannerButton onSkipButtonPressed={() => null} />
        </View>
      )}
    </View>
  );
};

export default SearchBanner;
