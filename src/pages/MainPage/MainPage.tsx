import * as Styled from "./MainPage.styled";
import { useHistory } from "react-router";

const MainPage = () => {
  const history = useHistory();
  const onSubmit = () => history.replace("/quiz/1");

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
        <Styled.Submit onClick={onSubmit} variant="contained" size="large">
          Начать викторину
        </Styled.Submit>
      </Styled.SubmitContainer>
    </Styled.Root>
  );
};

export default MainPage;
