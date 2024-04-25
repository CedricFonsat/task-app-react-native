import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskType, TypeState } from "@src/types";
import { updateTask, updateTaskToPerform } from "@src/store/TaskReducer";
import {
  AsideHours,
  ButtonCustom,
  CardTask,
  InputCustom,
  SelectCustom,
} from "@src/components";
import { colors, sizes } from "@src/constants";

const HomeScreen = () => {
  const [description, setDescription] = React.useState("");
  const [date, setDate] = React.useState<number | null>(null);
  const task = useSelector((state: TypeState) => state.task);
  const dispatch = useDispatch();
  const onAddTask = () => {
    if (description === "") {
      alert("Please fill the form");
      return;
    }
    dispatch(
      updateTask({
        id: date,
        description: description,
        date: date,
        taskToPerform: false,
        isCreate: true,
      })
    );
    setDescription("");
    setDate(null);
  };

  const onUpdateTaskToPerform = (item: TaskType) => {
    dispatch(
      updateTaskToPerform({
        id: item.id,
        taskToPerform: !item.taskToPerform,
      })
    );
  };

  // const onDeleteTask = (item: TaskType) => {
  //   dispatch(
  //     updateDeleteInfoTask({
  //       id: item.id,
  //       description: '',
  //       date: date,
  //       taskToPerform: false,
  //       isCreate: false,
  //     })
  //   );
  // };

  return (
    <View style={styles.container}>
      <InputCustom
        placeholder="Enter your name"
        value={description}
        onChangeText={(text: string) => setDescription(text)}
      />
      <SelectCustom onChange={(text) => setDate(text)} value={date} />
      <ButtonCustom text={"Add Task"} onPress={onAddTask} />
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <AsideHours />
            <View style={styles.tasks}>
              {task.map((item) => {
                return (
                  <CardTask
                    key={item.id}
                    description={item.description}
                    taskToPerform={item.taskToPerform}
                    date={item.date}
                    isCreate={item.isCreate}
                    onPress={() => onUpdateTaskToPerform(item)}
                  />
                );
              })}
            </View>
          </View>
          <View style={styles.bottom} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingTop: sizes.spacing,
  },
  content: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  tasks: {
    width: sizes.width * 0.6,
  },
  bottom: {
    height: sizes.height * 0.2,
  },
});
