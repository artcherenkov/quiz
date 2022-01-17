import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./slices/quiz";

export const store = configureStore({
  reducer: { quiz: quizReducer },
});

export type Store = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
