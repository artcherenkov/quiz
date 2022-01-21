import React from "react";
import { useHistory } from "react-router";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import * as Styled from "./ProgressBar.styled";
import { useAppSelector } from "../../store/hooks";
import {
  selectActiveQuestion,
  selectQuestions,
  selectProgress,
} from "../../store/slices/quiz";

interface IProgressBar {
  showStatus?: boolean;
  showBurger?: boolean;
}

const ProgressBar = ({
  showStatus = true,
  showBurger = true,
}: IProgressBar) => {
  const history = useHistory();
  const activeQuestion = useAppSelector(selectActiveQuestion);
  const questions = useAppSelector(selectQuestions);
  const progress = useAppSelector(selectProgress);

  const onBurgerClick = () => history.replace("/questions");

  return (
    <Styled.Root>
      {showBurger && (
        <IconButton onClick={onBurgerClick} size="large">
          <MenuIcon />
        </IconButton>
      )}
      <Styled.ProgressContainer>
        {showStatus && (
          <Styled.Status>
            Вопрос {activeQuestion.idx + 1}/{questions.length}
          </Styled.Status>
        )}
        <Styled.Bar>
          <Styled.Progress percent={progress} />
        </Styled.Bar>
      </Styled.ProgressContainer>
    </Styled.Root>
  );
};

export default ProgressBar;
