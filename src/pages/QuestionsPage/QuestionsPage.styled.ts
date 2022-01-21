import { Link as RouterLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const Root = styled.section`
  padding-top: 30px;
  background-color: #a3d9ff;
  height: 100%;
`;

export const QuestionsList = styled.ul`
  margin: 40px 0 0;
  padding: 0 30px;
  list-style: none;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  grid-gap: 20px;
`;
export const QuestionContainer = styled(RouterLink)<{
  status?: "fail" | "success";
}>`
  height: 80px;
  background-color: #cae9ff;
  border-radius: 10px;

  font-weight: 500;
  font-size: 36px;
  line-height: 100%;
  color: #454545;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;

  ${(props) => {
    switch (props.status) {
      case "fail":
        return css`
          background-color: #f7d4d9;
        `;
      case "success":
        return css`
          background-color: #d6f5e1;
        `;
    }
  }}

  &:active {
    transform: scale(0.95);
  }
`;
export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 12px 30px 0;
  align-items: center;
`;
export const Link = styled(RouterLink)`
  display: block;
  text-decoration: none;
  color: #2e3cff;
`;
