import { useHistory } from "react-router";
import { styled } from "@mui/material";

import { useAppSelector } from "../../store/hooks";
import { selectQuestions } from "../../store/slices/quiz";
import * as Styled from "./MainPage.styled";
import { DefaultButton } from "../../components/ui/Button.styled";

const SubmitButton = styled(DefaultButton)`
  padding: 12px 0;
  width: 280px;
`;

const MainPage = () => {
  const history = useHistory();
  const firstQuestion = useAppSelector(selectQuestions)[0];

  const onSubmit = () => {
    history.replace(`/quiz/${firstQuestion.id}`);
  };

  return (
    <Styled.Root>
      <Styled.Content>
        <Styled.Title>Привет! 👋</Styled.Title>
        <Styled.Subtitle>
          Проверь свои знания о Новосибирске и его жителях
        </Styled.Subtitle>
      </Styled.Content>
      <Styled.ImageContainer />
      <Styled.SubmitContainer>
        <SubmitButton onClick={onSubmit} size="large">
          Начать викторину
        </SubmitButton>
      </Styled.SubmitContainer>
    </Styled.Root>
  );
};

export default MainPage;
