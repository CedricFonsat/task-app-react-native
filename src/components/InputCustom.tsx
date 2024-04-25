import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { colors, sizes } from "src/constants";
import { InputCustomProps } from "src/types";

const InputCustom = ({
  style,
  placeholder,
  onChangeText,
  value,
}: InputCustomProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, style]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor={colors.gray}
        value={value}
      />
    </View>
  );
};

export default InputCustom;

const styles = StyleSheet.create({
  container: {
    width: sizes.width * 0.9,
    alignSelf: "center",
    marginBottom: sizes.spacing,
    height: 50,
    borderRadius: 5,
    backgroundColor: colors.secondary,
  },
  input: {
    width: "100%",
    height: "100%",
    paddingHorizontal: sizes.spacing,
    color: colors.gray,
  },
});
