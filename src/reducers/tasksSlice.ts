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
        state.push(action.payload);
      },
      prepare: (title: string, priority: TaskPriority) => ({
        payload: {
          id: nanoid(),
          title,
          status: "InProgress" as TaskStatus,
          priority,
          completed: false,
        },
      }),
    },
    editTask: (state, action: PayloadAction<Omit<Task, "completed">>) => {
      const { id, title, status, priority } = action.payload;

      const filteredTask = state.find((task) => task.id === id);
      if (filteredTask) {
        filteredTask.title = title;
        filteredTask.priority = priority;

        if (status === "Done") {
          filteredTask.status = status;
          filteredTask.completed = true;
        } else {
          filteredTask.status = status;
          filteredTask.completed = false;
        }
      }
    },
    toggleComplete: (state, action: PayloadAction<{ taskId: string }>) => {
      const filteredTask = state.find(
        (task) => task.id === action.payload.taskId,
      );

      if (filteredTask) {
        if (filteredTask.completed) {
          filteredTask.completed = false;
          filteredTask.status = "InProgress";
        } else {
          filteredTask.completed = true;
          filteredTask.status = "Done";
        }
      }
    },
  },
});

export const selectAllTasks = (state: RootState) => state.tasks;
export const selectTaskById = (state: RootState, taskId: string) => {
  return state.tasks.find((task) => task.id === taskId);
};

export const { addTask, editTask, toggleComplete } = tasksSlice.actions;
export default tasksSlice.reducer;
