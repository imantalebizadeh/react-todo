import { initialState as initialStateType } from "@/types/Tasks";
import { createSlice } from "@reduxjs/toolkit";

const initialState: initialStateType = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export default tasksSlice.reducer;
