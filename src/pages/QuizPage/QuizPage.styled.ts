import styled, { css } from "styled-components";
import { DefaultButton } from "../../components/ui/Button.styled";

export const Root = styled.section`
  height: 100%;
  padding: 30px 0;
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

export const Submit = styled(DefaultButton)`
  width: 290px;

  && {
    padding: 10px 0;
    margin-bottom: 48px;
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

export const ImageList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageListItem = styled.li<{
  selected?: boolean;
  disabled?: boolean;
}>`
  margin: 5px;
  overflow: hidden;
  width: 80%;
  height: auto;
  display: block;
  border-radius: 15px;
  border: 4px solid #82c4ed;
  box-shadow: 0 0 5px #82c4ed;
  transition: box-shadow 200ms ease-in, transform 100ms ease;

  &:not(:last-child) {
    margin-bottom: 32px;
  }

  &:active {
    transform: scale(0.95);
  }

  ${(props) =>
    props.selected &&
    css`
      transform: scale(1.1);
      border: 6px solid #008ee5;
      box-shadow: 0 0 15px #008ee5;
      &:active {
        transform: none;
      }
    `}

  ${(props) =>
    props.disabled &&
    css`
      border: 4px solid #a2bdcd;
      box-shadow: 0 0 15px #a2bdcd;
      &:active {
        transform: none;
      }
    `}

  ${(props) =>
    props.disabled &&
    props.selected &&
    css`
      border: 6px solid #507b95;
      box-shadow: 0 0 15px #507b95;
      &:active {
        transform: none;
      }
    `}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;
