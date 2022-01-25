import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import React from "react";
import { TQuestionOption } from "../../../../types";

interface ISingleOption {
  option: TQuestionOption;
}

const SingleOption = ({ option }: ISingleOption) => {
  return (
    <FormControlLabel
      key={option.id}
      value={option.value}
      sx={{
        "& .MuiFormControlLabel-label": {
          fontSize: 20,
          color: "#2d2d2d",
        },
      }}
      control={
        <Radio
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
