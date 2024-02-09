import tasksReducer from "@/reducers/tasksSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({
  tasks: tasksReducer,
});

const persistedReducer = persistReducer(
  {
    storage,
    key: "root",
    whitelist: ["tasks"],
  },
  reducers,
);

const store = configureStore({
  reducer: persistedReducer,
});

const persistedStore = persistStore(store);

export { store, persistedStore };
