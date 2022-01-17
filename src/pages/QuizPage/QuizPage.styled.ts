import styled from "styled-components";
import Button from "@mui/material/Button";

export const Root = styled.section`
  height: 100%;
  padding: 30px 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  padding: 0 30px;
  margin-top: 24px;
  margin-bottom: 40px;
`;

export const Submit = styled(Button)`
  width: 290px;

  && {
    padding: 10px 0;
  }
`;

export const QuestionTitle = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 130%;
  color: #2d2d2d;
  margin-bottom: 32px;
`;