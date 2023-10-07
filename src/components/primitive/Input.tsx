import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

// Styled Material UI Input
const Input = styled(TextField)({
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  ".MuiInputBase-root": {
    color: "#FFF",
  },
  ".MuiInputLabel-root": {
    color: "#A0AAB4",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#404346",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#66B2FF",
    },
    "&.Mui-error fieldset": {
      borderColor: "#d32f2f",
    },
  },
});

export default Input;
