export type TRawQuestion = Pick<TQuestion, "type" | "title"> & {
  options: string[];
  correctAnswer: string;
};

export type TQuestionOption = { id: string; value: string };

export type TQuestion = {
  id: string;
  type: "single" | "image";
  title: string;
  options: TQuestionOption[];
  /** id правильного вариант ответа */
  correctAnswerId: string;
};

export type TAnswer = {
  questionId: string;
  answer: TQuestionOption;
  isCorrect: boolean;
};
