import { configureStore } from "@reduxjs/toolkit";
import {
  PAUSE,
  FLUSH,
  REGISTER,
  REHYDRATE,
  PURGE,
  PERSIST,
  persistReducer,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import rootReducer from "./globalState";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PERSIST, PAUSE, PURGE, REGISTER],
      },
    }),
});
