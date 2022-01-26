import styled from "styled-components";

export const Emoji = styled.p`
  font-size: 48px;
  margin: 124px auto 0;
  text-align: center;
`;
export const Title = styled.h2`
  font-size: 36px;
  text-transform: uppercase;
  margin: 36px auto 0;
  text-align: center;
  max-width: 280px;
`;
export const Numbers = styled.p<{ color: string }>`
  margin: 16px auto 0;
  display: flex;
  justify-content: center;

  & span {
    padding: 8px;
    color: #fff;
    border-radius: 10px;
    font-weight: bold;
    font-size: 24px;
    background-color: ${(props) => props.color};
  }
`;
export const Text = styled.p`
  padding: 8px 12px;
  margin: 36px auto 0;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;

  background: #cae9ff;
  border-radius: 15px;
  max-width: 300px;
`;
