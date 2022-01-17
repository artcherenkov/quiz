import { TQuestion, TQuestionOption, TRawQuestion } from "../types";

export const RAW_QUESTIONS: TRawQuestion[] = [
  {
    type: "single",
    title: "Назови столицу Сибири.",
    options: ["Бердск", "Новосибирск", "Искитим"],
    correctAnswer: "Новосибирск",
  },
  {
    type: "single",
    title: "На берегах какой реки расположен город Новосибирск?",
    options: ["Ока", "Обь", "Омь"],
    correctAnswer: "Обь",
  },
  {
    type: "single",
    title:
      "В какой океан впадает река, на берегах, которой расположен город Новосибирск?",
    options: ["Тихий", "Северный Ледовитый", "Индийский"],
    correctAnswer: "Северный Ледовитый",
  },
  {
    type: "single",
    title: "В каком океане находятся Новосибирские острова?",
    options: ["Тихом", "Северном Ледовитом", "Атлантическом"],
    correctAnswer: "Северном Ледовитом",
  },
];

const getError = (questionTitle: string) => {
  return (
    "В вариантах ответа к вопросу с заголовком " +
    questionTitle +
    " не найден правильный ответ."
  );
};

export const transformQuestions = (
  rawQuestions: TRawQuestion[]
): TQuestion[] => {
  let correctAnswerId: string;

  return rawQuestions.map((rawQuestion, questionIdx) => {
    const { type, title, options, correctAnswer } = rawQuestion;

    const areOptionsIncludeCorrect = options.includes(correctAnswer);
    if (!areOptionsIncludeCorrect) {
      throw new Error(getError(title));
    }

    const questionId = `question-${questionIdx}`;

    const optionsWithId: TQuestionOption[] = options.map(
      (option, optionIdx) => {
        const optionId = `${questionId}-option-${optionIdx}`;
        if (option === correctAnswer) {
          correctAnswerId = optionId;
        }
        return {
          id: optionId,
          value: option,
        };
      }
    );

    return {
      id: questionId,
      type,
      title,
      options: optionsWithId,
      correctAnswerId,
    };
  });
};
