import { useMemo } from "react";
import * as Styled from "./ResultsPage.styled";
import { useAppSelector } from "../../store/hooks";
import { selectAnswers } from "../../store/slices/quiz";

const Result = {
  EXCELLENT: {
    from: 70, // %
    title: "Отлично!",
    emoji: "🤩",
    color: "#83e2a6",
    text: "Таким знанием Новосибирска не каждый может похвастаться!",
  },
  GOOD: {
    from: 50, // %,
    title: "Хорошо",
    emoji: "😊",
    color: "#7e6b8f",
    text: "Хороший результат, так держать.",
  },
  OK: {
    from: 0, // %
    title: "Ты можешь лучше",
    emoji: "🙂",
    color: "#e9dd11",
    text: "Тебе стоит ещё немного поупражняться – и все получится!",
  },
};

const getResult = (percentage: number) => {
  if (percentage > Result.EXCELLENT.from) return Result.EXCELLENT;
  if (percentage > Result.GOOD.from) return Result.GOOD;
  return Result.OK;
};

const ResultsPage = () => {
  const answers = useAppSelector(selectAnswers);
  const correctAnswersCount = useMemo(
    () => answers.filter((answer) => answer.isCorrect).length,
    [answers]
  );

  const correctPercentage = Math.floor(
    (correctAnswersCount / answers.length) * 100
  );

  const result = getResult(correctPercentage);

  return (
    <>
      <Styled.Emoji>{result.emoji}</Styled.Emoji>
      <Styled.Title>{result.title}</Styled.Title>
      <Styled.Numbers color={result.color}>
        <span>
          {correctAnswersCount} / {answers.length}
        </span>
      </Styled.Numbers>
      <Styled.Text>{result.text}</Styled.Text>
    </>
  );
};

export default ResultsPage;
