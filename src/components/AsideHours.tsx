import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, sizes } from "src/constants";

const AsideHours = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>08:00 AM</Text>
      <Text style={styles.text}>09:00 AM</Text>
      <Text style={styles.text}>10:00 AM</Text>
      <Text style={styles.text}>11:00 AM</Text>
      <Text style={styles.text}>12:00 PM</Text>
      <Text style={styles.text}>13:00 PM</Text>
      <Text style={styles.text}>14:00 PM</Text>
      <Text style={styles.text}>15:00 PM</Text>
    </View>
  );
};

export default AsideHours;

const styles = StyleSheet.create({
  container: {
    width: sizes.width * 0.2,
    height: sizes.height * 0.8,
    borderRadius: 5,
  },
  text: {
    color: colors.gray,
    fontWeight: "400",
    textAlign: "left",
    marginBottom: sizes.spacing * 3,
  },
});
