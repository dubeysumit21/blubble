import React from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface Props {
  icon: any;
  onGenderIconPressed: (type: string) => void;
  type: string;
  selected: boolean;
}

const GenderSelectionTile: React.FC<Props> = (props: Props) => {
  const { icon, onGenderIconPressed, type, selected } = props;
  return (
    <TouchableOpacity
      style={{
        ...styles.genderButton,
        borderColor: selected ? "#FFC000" : "#979797",
      }}
      onPress={() => {
        onGenderIconPressed(type);
      }}
    >
      {icon}
    </TouchableOpacity>
  );
};

export default GenderSelectionTile;
