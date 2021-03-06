import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TQuestion, TAnswer } from "../../types";
import { shuffle } from "../../utils";
import { questions } from "../../data";

interface IQuizState {
  questions: TQuestion[];
  currentQuestionId: string | undefined;
  currentQuestionIdx: number;
  answers: TAnswer[];
  /** закончил ли пользователь викторину */
  hasQuizFinished: boolean;
}

const initialState: IQuizState = {
  questions: [],
  currentQuestionId: undefined,
  currentQuestionIdx: -1,
  answers: [],
  hasQuizFinished: false,
};

const getNewInitialState = (): IQuizState => ({
  ...initialState,
  questions: shuffle(questions.slice()),
});

export const quiz = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<TQuestion[]>) => {
      state.questions = action.payload;
    },
    setActiveQuestion: (state, action: PayloadAction<string>) => {
      state.currentQuestionId = action.payload;
      state.currentQuestionIdx = state.questions.findIndex(
        (q) => q.id === action.payload
      );
    },
    resetCurrentQuestion: (state) => {
      state.currentQuestionId = undefined;
    },
    setAnswer: (state, action: PayloadAction<TAnswer>) => {
      const foundAnswerIndex = state.answers.findIndex(
        (answer) => answer.questionId === action.payload.questionId
      );
      const answers = state.answers.slice();
      if (foundAnswerIndex !== -1) {
        answers[foundAnswerIndex] = action.payload;
        return;
      }

      answers.push(action.payload);
      state.answers = answers;
      if (answers.length === state.questions.length) {
        state.hasQuizFinished = true;
      }
    },
    resetQuiz: () => {
      return getNewInitialState();
    },
  },
});

export const selectQuestions = (state: RootState) => {
  return state.quiz.questions;
};
export const selectQuestionById =
  (questionId: string) => (state: RootState) => {
    return state.quiz.questions.find((q) => q.id === questionId);
  };
export const selectActiveQuestion = (state: RootState) => {
  return {
    id: state.quiz.currentQuestionId,
    idx: state.quiz.currentQuestionIdx,
  };
};
export const selectProgress = (state: RootState) => {
  if (!state.quiz.answers.length) return 0;

  return Math.floor(
    (state.quiz.answers.length / state.quiz.questions.length) * 100
  );
};
export const selectAnswers = (state: RootState) => {
  return state.quiz.answers;
};
export const selectNextQuestionIdx = (state: RootState) => {
  const nextQuestion = state.quiz.questions[state.quiz.currentQuestionIdx + 1];
  if (!nextQuestion) {
    return undefined;
  }

  return nextQuestion.id;
};
export const selectHasQuizFinished = (state: RootState) => {
  return state.quiz.hasQuizFinished;
};

const { actions, reducer } = quiz;
export const { setQuestions, setAnswer, setActiveQuestion, resetQuiz } =
  actions;

export default reducer;
