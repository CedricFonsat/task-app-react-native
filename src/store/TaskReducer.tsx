import { createSlice } from "@reduxjs/toolkit";
import { TaskType } from "@src/types";
import { tasks } from "@src/data";

const taskSlice = createSlice({
  name: "task",
  initialState: tasks as TaskType[],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    updateTask: (state, action) => {
      const { id, description, date, taskToPerform, isCreate } = action.payload;
      const uu = state.find((devis) => devis.id == id);
      if (uu) {
        uu.description = description && description;
        uu.date = date && date;
        uu.taskToPerform = taskToPerform && taskToPerform;
        uu.isCreate = isCreate && isCreate;
      }
    },
    updateTaskToPerform: (state, action) => {
      const { id, taskToPerform } = action.payload;
      const uu = state.find((devis) => devis.id == id);
      if (uu) {
        uu.taskToPerform = taskToPerform && taskToPerform;
      }
    },
    updateDeleteInfoTask: (state, action) => {
      const { id, description, date, taskToPerform, isCreate } = action.payload;
      const uu = state.find((devis) => devis.id == id);
      if (uu) {
        uu.description = description && description;
        uu.date = date && date;
        uu.taskToPerform = taskToPerform && taskToPerform;
        uu.isCreate = isCreate && isCreate;
      }
    },
    deleteTask: (state, action) => {
      const { id } = action.payload;
      const uu = state.find((devis) => devis.id == id);
      if (uu) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});

export const {
  addTask,
  updateTask,
  deleteTask,
  updateTaskToPerform,
  updateDeleteInfoTask,
} = taskSlice.actions;
export default taskSlice.reducer;
