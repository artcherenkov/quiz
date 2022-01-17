import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TQuestion, TAnswer } from "../../types";

interface IQuizState {
  questions: TQuestion[];
  currentQuestionId: string | undefined;
  answers: TAnswer[];
}

const initialState: IQuizState = {
  questions: [],
  currentQuestionId: undefined,
  answers: [],
};

export const quiz = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<TQuestion[]>) => {
      state.questions = action.payload;
    },
    setCurrentQuestion: (state, action: PayloadAction<string>) => {
      state.currentQuestionId = action.payload;
    },
    resetCurrentQuestion: (state) => {
      state.currentQuestionId = undefined;
    },
    setAnswer: (state, action: PayloadAction<TAnswer>) => {
      const foundAnswerIndex = state.answers.findIndex(
        (answer) => answer.questionId === action.payload.questionId
      );
      if (foundAnswerIndex !== -1) {
        state.answers[foundAnswerIndex] = action.payload;
        return;
      }

      state.answers = [...state.answers, action.payload];
    },
  },
});

export const selectQuestions = (state: RootState) => {
  return state.quiz.questions;
};
export const selectNextQuestionId =
  (questionId: string) => (state: RootState) => {
    return state.quiz.questions.findIndex((q) => q.id === questionId);
  };
export const selectQuestionById =
  (questionId: string) => (state: RootState) => {
    return state.quiz.questions.find((q) => q.id === questionId);
  };

const { actions, reducer } = quiz;
export const { setQuestions, setAnswer } = actions;

export default reducer;
