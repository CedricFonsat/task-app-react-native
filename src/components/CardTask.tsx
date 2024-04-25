import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors, sizes } from "@src/constants";
import { CardTaskProps } from "@src/types";

const CardTask = ({
  description,
  date,
  onPress,
  taskToPerform,
  isCreate,
}: CardTaskProps) => {
  const hours = [
    { label: "08:00", value: 1 },
    { label: "09:00", value: 2 },
    { label: "10:00", value: 3 },
    { label: "11:00", value: 4 },
    { label: "12:00", value: 5 },
    { label: "13:00", value: 6 },
    { label: "14:00", value: 7 },
  ];
  const hour = hours.find((h) => h.value === Number(date));

  const handle = () => {};
  const isAvaible =
    isCreate === true
      ? !taskToPerform
        ? colors.secondary
        : colors.thrird
      : colors.primary;
  return (
    <TouchableOpacity
      activeOpacity={isCreate === true ? 0.9 : 1}
      style={[
        styles.container,
        {
          backgroundColor: isAvaible,
          borderTopWidth: isCreate === true ? 0 : 0.3,
          borderColor: colors.gray,
        },
      ]}
      onPress={isCreate === true ? onPress : handle}
    >
      <Text style={styles.text}>{description}</Text>
      <Text style={styles.subtitle}>{hour?.label}</Text>
    </TouchableOpacity>
  );
};

export default CardTask;

const styles = StyleSheet.create({
  container: {
    width: sizes.width * 0.6,
    alignSelf: "center",
    height: sizes.spacing * 3.5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: sizes.spacing / 2,
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.gray,
    marginTop: sizes.spacing / 2,
    fontSize: sizes.font,
  },
});
