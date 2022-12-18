import { InputProps, TextFieldProps, TypographyProps } from "@mui/material";

export interface EditTextProps {
  onSuccess?: () => void;
  onCancel?: () => void;
  textProps?: TypographyProps;
  inputProps?: TextFieldProps;
}
