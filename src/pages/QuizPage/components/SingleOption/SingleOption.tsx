import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import React from "react";
import { TQuestionOption } from "../../../../types";

interface ISingleOption {
  option: TQuestionOption;
  disabled?: boolean;
  showAnswer?: boolean;
}

const SingleOption = ({
  option,
  disabled = false,
  showAnswer,
}: ISingleOption) => {
  return (
    <div
      style={{
        border: showAnswer ? "3px solid #96e6b3" : "3px solid transparent",
        borderRadius: 8,
      }}
    >
      <FormControlLabel
        key={option.id}
        disabled={disabled}
        value={option.value}
        sx={{
          "& .MuiFormControlLabel-label": {
            fontSize: 20,
            color: showAnswer ? "red" : "#2d2d2d",
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
    </div>
  );
};

export default SingleOption;
