import React from "react";
import { useHistory } from "react-router";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import * as Styled from "./ProgressBar.styled";

interface IProgressBar {
  showStatus?: boolean;
  showBurger?: boolean;
}

const ProgressBar = ({
  showStatus = true,
  showBurger = true,
}: IProgressBar) => {
  const history = useHistory();
  const onBurgerClick = () => history.replace("/questions");

  return (
    <Styled.Root>
      {showBurger && (
        <IconButton onClick={onBurgerClick} size="large">
          <MenuIcon />
        </IconButton>
      )}
      <Styled.ProgressContainer>
        {showStatus && <Styled.Status>Вопрос 5/20</Styled.Status>}
        <Styled.Bar>
          <Styled.Progress />
        </Styled.Bar>
      </Styled.ProgressContainer>
    </Styled.Root>
  );
};

export default ProgressBar;
