import tasksReducer from "@/reducers/tasksSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";

const persistedReducer = persistReducer(
  {
    storage,
    key: "tasks",
  },
  tasksReducer,
);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistedStore = persistStore(store);

export default store;
