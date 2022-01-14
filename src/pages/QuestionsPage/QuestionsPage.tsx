import ProgressBar from "../../components/ProgressBar/ProgressBar";

import * as Styled from "./QuestionsPage.styled";

const QuestionsPage = () => (
  <Styled.Root>
    <ProgressBar showStatus={false} showBurger={false} />
    <Styled.Link to="/quiz/1">&larr; Назад</Styled.Link>
    <Styled.QuestionsList>
      <li>
        <Styled.QuestionContainer to="/quiz/1">1</Styled.QuestionContainer>
      </li>
      <li>
        <Styled.QuestionContainer to="/quiz/1">1</Styled.QuestionContainer>
      </li>
      <li>
        <Styled.QuestionContainer to="/quiz/1">1</Styled.QuestionContainer>
      </li>
      <li>
        <Styled.QuestionContainer to="/quiz/1">1</Styled.QuestionContainer>
      </li>
      <li>
        <Styled.QuestionContainer to="/quiz/1">1</Styled.QuestionContainer>
      </li>
      <li>
        <Styled.QuestionContainer to="/quiz/1">1</Styled.QuestionContainer>
      </li>
      <li>
        <Styled.QuestionContainer to="/quiz/1">1</Styled.QuestionContainer>
      </li>
      <li>
        <Styled.QuestionContainer to="/quiz/1">1</Styled.QuestionContainer>
      </li>
      <li>
        <Styled.QuestionContainer to="/quiz/1">1</Styled.QuestionContainer>
      </li>
      <li>
        <Styled.QuestionContainer to="/quiz/1">1</Styled.QuestionContainer>
      </li>
      <li>
        <Styled.QuestionContainer to="/quiz/1">1</Styled.QuestionContainer>
      </li>
      <li>
        <Styled.QuestionContainer to="/quiz/1">1</Styled.QuestionContainer>
      </li>
      <li>
        <Styled.QuestionContainer to="/quiz/1">1</Styled.QuestionContainer>
      </li>
      <li>
        <Styled.QuestionContainer to="/quiz/1">1</Styled.QuestionContainer>
      </li>
      <li>
        <Styled.QuestionContainer to="/quiz/1">1</Styled.QuestionContainer>
      </li>
    </Styled.QuestionsList>
  </Styled.Root>
);

export default QuestionsPage;
