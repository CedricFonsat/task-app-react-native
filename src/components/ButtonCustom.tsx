import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors, sizes } from "@src/constants";
import { ButtonCustomProps } from "src/types";

const ButtonCustom = ({ text, onPress }: ButtonCustomProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={styles.container}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;

const styles = StyleSheet.create({
  container: {
    width: sizes.width * 0.9,
    alignSelf: "center",
    marginBottom: sizes.spacing,
    height: 50,
    borderRadius: 5,
    backgroundColor: colors.thrird,
  },
  text: {
    color: colors.white,
    textAlign: "center",
    lineHeight: 50,
    fontWeight: "bold",
  },
});
