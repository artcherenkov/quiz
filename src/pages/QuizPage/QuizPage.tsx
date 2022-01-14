import * as Styled from "./QuizPage.styled";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const QuizPage = () => (
  <Styled.Root>
    <Styled.ProgressContainer>
      <IconButton size="large">
        <MenuIcon />
      </IconButton>
      <Styled.ProgressBar />
    </Styled.ProgressContainer>
    <Styled.Content>
      <Styled.QuestionTitle>
        Назови официальную дату основания Новосибирска.
      </Styled.QuestionTitle>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="gender"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="1893"
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
            label="1893 год"
          />
          <FormControlLabel
            value="1112"
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
            label="1112 год"
          />
          <FormControlLabel
            value="2000"
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
            label="2000 год"
          />
        </RadioGroup>
      </FormControl>
    </Styled.Content>
    <Styled.ControlsContainer>
      <Styled.Submit variant="contained">Ответить</Styled.Submit>
    </Styled.ControlsContainer>
  </Styled.Root>
);

export default QuizPage;
