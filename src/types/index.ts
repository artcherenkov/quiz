export type TRawQuestion = Pick<TQuestion, "type" | "title" | "help"> & {
  options: string[];
  correctAnswer: string;
};

export type TQuestionOption = { id: string; value: string };

export type TQuestion = {
  id: string;
  type: "single" | "image";
  title: string;
  help?: string;
  options: TQuestionOption[];
  /** id правильного вариант ответа */
  correctAnswerId: string;
};

export type TAnswer = {
  questionId: string;
  answer: TQuestionOption;
  isCorrect: boolean;
};
