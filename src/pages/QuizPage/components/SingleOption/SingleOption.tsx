import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import React from "react";
import { TQuestionOption } from "../../../../types";

interface ISingleOption {
  option: TQuestionOption;
  disabled?: boolean;
}

const SingleOption = ({ option, disabled = false }: ISingleOption) => {
  return (
    <FormControlLabel
      key={option.id}
      disabled={disabled}
      value={option.value}
      sx={{
        "& .MuiFormControlLabel-label": {
          fontSize: 20,
          color: "#2d2d2d",
        },
      }}
      control={
        <Radio
          disabled={disabled}
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 28,
            },
          }}
          size="medium"
        />
      }
      label={option.value}
    />
  );
};

export default SingleOption;
