import ProgressBar from "../../components/ProgressBar/ProgressBar";

import * as Styled from "./QuestionsPage.styled";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import {
  selectQuestions,
  selectActiveQuestion,
  selectAnswers,
  resetQuiz,
} from "../../store/slices/quiz";
import { Redirect } from "react-router";

const QuestionsPage = () => {
  const dispatch = useAppDispatch();
  const questions = useAppSelector(selectQuestions);
  const answers = useAppSelector(selectAnswers);
  const activeQuestion = useAppSelector(selectActiveQuestion);

  if (activeQuestion.idx === -1) {
    return <Redirect to="/" />;
  }

  if (!questions) {
    return null;
  }

  const getQuestionState = (questionId: string) => {
    const answer = answers.find((ans) => ans.questionId === questionId);
    if (!answer) {
      return 0;
    }
    if (answer.isCorrect) {
      return "success";
    }
    return "fail";
  };

  return (
    <Styled.Root>
      <ProgressBar showStatus={false} showBurger={false} />
      {activeQuestion.idx !== -1 && (
        <Styled.LinksContainer>
          <Styled.Link to={`/quiz/${activeQuestion.id}`}>
            &larr; Назад к {activeQuestion.idx + 1} вопросу
          </Styled.Link>
          <Styled.WarningLink to="/" onClick={() => dispatch(resetQuiz())}>
            Сбросить
          </Styled.WarningLink>
        </Styled.LinksContainer>
      )}
      <Styled.QuestionsList>
        {questions.map((q, idx) => {
          const status = getQuestionState(q.id);
          return (
            <li key={q.id}>
              <Styled.QuestionContainer
                status={status ? status : undefined}
                to={`/quiz/${q.id}`}
              >
                {idx + 1}
              </Styled.QuestionContainer>
            </li>
          );
        })}
      </Styled.QuestionsList>
    </Styled.Root>
  );
};

export default QuestionsPage;
