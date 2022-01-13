import { useNavigate } from "react-router-dom";
import * as Styled from "./MainPage.styled";

const MainPage = () => {
  const navigate = useNavigate();

  const onSubmit = () => navigate("/quiz");

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
