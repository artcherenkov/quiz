import { Redirect, useHistory } from "react-router";
import Button from "@mui/material/Button";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

import * as Styled from "./QuestionsPage.styled";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import {
  selectQuestions,
  selectActiveQuestion,
  selectAnswers,
  resetQuiz,
  selectHasQuizFinished,
} from "../../store/slices/quiz";

const QuestionsPage = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const questions = useAppSelector(selectQuestions);
  const answers = useAppSelector(selectAnswers);
  const activeQuestion = useAppSelector(selectActiveQuestion);
  const hasQuizFinished = useAppSelector(selectHasQuizFinished);

  if (activeQuestion.idx === -1) {
    return <Redirect to="/" />;
  }

  if (!questions) {
    return null;
  }

  const getQuestionState = (questionId: string, hasQuizFinished: boolean) => {
    const answer = answers.find((ans) => ans.questionId === questionId);
    if (!answer) {
      return "not answered";
    }
    if (!hasQuizFinished) {
      return "default";
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
          <Button
            variant="outlined"
            size="small"
            color="error"
            onClick={() => {
              dispatch(resetQuiz());
              history.push("/");
            }}
          >
            Сбросить
          </Button>
        </Styled.LinksContainer>
      )}
      <Styled.QuestionsList>
        {questions.map((q, idx) => {
          const status = getQuestionState(q.id, hasQuizFinished);
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
