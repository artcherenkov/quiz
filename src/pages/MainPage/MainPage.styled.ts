import styled from "styled-components";
import bg from "../../images/nsk.png";
import Button from "@mui/material/Button";

export const Root = styled.section`
  width: 100%;
  padding-top: 30px;
`;

export const Content = styled.div`
  padding: 0 30px;
`;

export const Title = styled.h1`
  font-style: italic;
  font-weight: 300;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 36px;
`;

export const Subtitle = styled.p`
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  margin-bottom: 48px;
`;

export const ImageContainer = styled.div`
  height: 200px;
  width: 100%;
  display: flex;

  background: url(${bg}) no-repeat center;
  margin-bottom: 64px;
`;

export const SubmitContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Submit = styled(Button)`
  width: 280px;

  && {
    padding: 12px 0;
  }
`;
