import React from "react";
import { View } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={20}
      color={Colors.accentColor}
    />
  );
};

export default CustomHeaderButton;
