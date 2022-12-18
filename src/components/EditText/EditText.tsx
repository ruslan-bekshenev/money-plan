import React, { FC, memo } from "react";
import { Box, TextField, Typography } from "@mui/material";

import { EditTextProps } from "./types";

const EditText: FC<EditTextProps> = ({
  isEdit = false,
  inputProps,
  textProps,
}) => (
  <Box display="flex" alignItems="center">
    {isEdit && (
      <>
        <TextField sx={{ marginRight: 1 }} {...inputProps} />
      </>
    )}
    {!isEdit && (
      <>
        <Typography sx={{ marginRight: 1 }} {...textProps}>
          123
        </Typography>
      </>
    )}
  </Box>
);

export default memo(EditText);
