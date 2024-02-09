import { RootState } from "@/types/Redux";
import { Task, TaskPriority, TaskStatus } from "@/types/Tasks";
import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState: Task[] = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action: PayloadAction<Task>) => {
        state.concat(action.payload);
      },
      prepare: (title: string, status: TaskStatus, priority: TaskPriority) => ({
        payload: { id: nanoid(), title, status, priority },
      }),
    },
  },
});

export const selectAllTasks = (state: RootState) => state.tasks;

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
