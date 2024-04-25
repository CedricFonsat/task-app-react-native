import { ViewStyle } from "react-native";

export type TaskType = {
  id: number;
  description: string;
  date: string;
  taskToPerform: boolean;
  isCreate: boolean;
};

export interface TypeState {
  task: TaskType[];
}

export type ButtonCustomProps = {
  text: string;
  onPress: () => void;
};

export type InputCustomProps = {
  placeholder: string;
  onChangeText: (text: string) => void;
  style?: ViewStyle;
  value: string;
};

export type CardTaskProps = {
  description: string;
  date: string;
  onPress?: () => void;
  taskToPerform?: boolean;
  isCreate?: boolean;
};

export type SelectCustomProps = {
  onChange: (value: any) => void;
  value: number | null;
};
