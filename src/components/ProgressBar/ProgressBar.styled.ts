import styled from "styled-components";

export const Root = styled.div`
  align-self: center;
  padding-right: 30px;
  padding-left: 18px;
  display: flex;
`;
export const Status = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  margin-bottom: 8px;
  color: #454545;
`;
export const Bar = styled.div`
  padding: 3px;
  background-color: #d6eeff;
  border-radius: 4px;
`;
export const ProgressContainer = styled.div`
  margin-left: 10px;
  flex-grow: 1;
`;
export const Progress = styled.div<{ percent?: number }>`
  height: 6px;
  background-color: #70c6ff;
  border-radius: 2px;
  width: ${(props) => props.percent}%;
  transition: width 200ms ease-in;
`;
