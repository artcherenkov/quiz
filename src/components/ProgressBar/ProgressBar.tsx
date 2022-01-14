import React from "react";
import * as Styled from "./ProgressBar.styled";

interface IProgressBar {
  style?: React.CSSProperties;
  className?: string;
}
const ProgressBar = ({ style, className }: IProgressBar) => (
  <div style={style} className={className}>
    <Styled.Status>Вопрос 5/20</Styled.Status>
    <Styled.Bar>
      <Styled.Progress />
    </Styled.Bar>
  </div>
);

export default ProgressBar;
