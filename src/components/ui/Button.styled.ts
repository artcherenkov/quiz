import Button from "@mui/material/Button";
import { styled } from "@mui/material";

export const DefaultButton = styled(Button)`
  color: #ffffff;
  background-color: #0f9bff;
  &:hover {
    background-color: #0080db;
  }
`;
export const WarningButton = styled(Button)`
  color: #070707;
  background-color: #ffbc41;
  &:hover {
    background-color: #ffa600;
  }
`;
