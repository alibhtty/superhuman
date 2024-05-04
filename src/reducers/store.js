// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import storage from 'redux-persist/lib/storage'; // importa storage de redux-persist
import { persistReducer, persistStore } from 'redux-persist'; // importa persistReducer y persistStore de redux-persist
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export const persistor = persistStore(store); // exporta persistor
