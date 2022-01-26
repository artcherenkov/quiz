import React, { useState, useEffect, useMemo } from "react";
import * as Styled from "./QuizPage.styled";

import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import {
  selectQuestionById,
  setActiveQuestion,
  selectAnswers,
  selectNextQuestionIdx,
  selectQuestions,
  selectHasQuizFinished,
} from "../../store/slices/quiz";
import { useParams, useHistory } from "react-router";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { setAnswer as setAnswerAction } from "../../store/slices/quiz";
import SingleOption from "./components/SingleOption/SingleOption";
import { WarningButton } from "../../components/ui/Button.styled";

const QuizPage = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const activeQuestion = useAppSelector(selectQuestionById(id));
  const answers = useAppSelector(selectAnswers);
  const questions = useAppSelector(selectQuestions);
  const nextQuestionIdx = useAppSelector(selectNextQuestionIdx);
  const hasQuizFinished = useAppSelector(selectHasQuizFinished);

  const [answer, setAnswer] = useState("");

  const getGiverAnswer = () => {
    const foundAnswer = answers.find((ans) => ans.questionId === id);

    if (!foundAnswer) {
      return "";
    }

    return foundAnswer.answer.value;
  };

  useEffect(() => {
    dispatch(setActiveQuestion(id));
    setAnswer(getGiverAnswer);
  }, [id]);
  const isLastQuestion = useMemo(
    () => answers.length === questions.length - 1,
    [answers]
  );

  if (!activeQuestion) return null;

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(evt.target.value);
  };
  const onImageSelect = (optionValue: string) => {
    setAnswer(optionValue);
  };
  const onSubmit = () => {
    const givenAnswer = activeQuestion.options.find(
      (opt) => opt.value === answer
    )!;
    const isCorrect = activeQuestion.correctAnswerId === givenAnswer.id;
    const questionId = activeQuestion.id;
    dispatch(setAnswerAction({ questionId, answer: givenAnswer, isCorrect }));
    if (isLastQuestion) {
      return history.push(`/results`);
    }
    if (nextQuestionIdx === undefined) {
      return history.push(`/questions`);
    }
    history.push(`/quiz/${nextQuestionIdx}`);
  };

  return (
    <Styled.Root>
      <ProgressBar />
      <Styled.Content>
        <Styled.QuestionTitle>{activeQuestion.title}</Styled.QuestionTitle>
        {activeQuestion.help && (
          <Styled.Help>Справка: {activeQuestion.help}</Styled.Help>
        )}
        {activeQuestion.type === "single" && (
          <FormControl component="fieldset">
            <RadioGroup
              aria-label={activeQuestion.title}
              name="options"
              value={answer}
              onChange={onChange}
            >
              {activeQuestion.options.map((option) => (
                <SingleOption
                  key={option.value}
                  option={option}
                  disabled={hasQuizFinished}
                  showAnswer={
                    option.id === activeQuestion.correctAnswerId &&
                    hasQuizFinished
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>
        )}
        {activeQuestion.type === "image" && (
          <Styled.ImageList>
            {activeQuestion.options.map((option) => (
              <Styled.ImageListItem
                key={option.value}
                onClick={() => !hasQuizFinished && onImageSelect(option.value)}
                selected={option.value === answer}
                disabled={hasQuizFinished}
                showAnswer={
                  option.id === activeQuestion.correctAnswerId &&
                  hasQuizFinished
                }
              >
                <Styled.Image src={option.value} alt="img" loading="lazy" />
              </Styled.ImageListItem>
            ))}
          </Styled.ImageList>
        )}
      </Styled.Content>
      <Styled.ControlsContainer>
        {isLastQuestion ? (
          <WarningButton
            onClick={onSubmit}
            variant="contained"
            disabled={hasQuizFinished}
          >
            Завершить викторину
          </WarningButton>
        ) : (
          <Styled.Submit
            onClick={onSubmit}
            variant="contained"
            disabled={hasQuizFinished}
          >
            Ответить
          </Styled.Submit>
        )}
      </Styled.ControlsContainer>
    </Styled.Root>
  );
};

export default QuizPage;
