import {
  Task,
  TaskPriority,
  TaskStatus,
  initialState as initialStateType,
} from "@/types/Tasks";
import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState: initialStateType = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action: PayloadAction<Task>) => {
        state.tasks.concat(action.payload);
      },
      prepare: (title: string, status: TaskStatus, priority: TaskPriority) => ({
        payload: { id: nanoid(), title, status, priority },
      }),
    },
  },
});

export default tasksSlice.reducer;
