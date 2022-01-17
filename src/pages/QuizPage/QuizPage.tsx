import React, { useState } from "react";
import * as Styled from "./QuizPage.styled";

import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { selectQuestionById } from "../../store/slices/quiz";
import { useParams } from "react-router";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { setAnswer as setAnswerAction } from "../../store/slices/quiz";

const QuizPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const activeQuestion = useAppSelector(selectQuestionById(id));

  const [answer, setAnswer] = useState("");

  if (!activeQuestion) return null;

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(evt.target.value);
  };
  const onSubmit = () => {
    const givenAnswer = activeQuestion.options.find(
      (opt) => opt.value === answer
    )!;
    const isCorrect = activeQuestion.correctAnswerId === givenAnswer.id;
    const questionId = activeQuestion.id;
    dispatch(setAnswerAction({ questionId, answer: givenAnswer, isCorrect }));
  };

  return (
    <Styled.Root>
      <ProgressBar />
      <Styled.Content>
        <Styled.QuestionTitle>{activeQuestion.title}</Styled.QuestionTitle>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label={activeQuestion.title}
            name="options"
            value={answer}
            onChange={onChange}
          >
            {activeQuestion.options.map((option) => (
              <FormControlLabel
                value={option.value}
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: 20,
                    color: "#2d2d2d",
                  },
                }}
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 28,
                      },
                    }}
                    size="medium"
                  />
                }
                label={option.value}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Styled.Content>
      <Styled.ControlsContainer>
        <Styled.Submit onClick={onSubmit} variant="contained">
          Ответить
        </Styled.Submit>
      </Styled.ControlsContainer>
    </Styled.Root>
  );
};

export default QuizPage;
