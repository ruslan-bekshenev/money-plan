import React, { FC, memo, useState } from "react";
import DoDisturbAltIcon from "@mui/icons-material/DoDisturbAlt";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import { Box, IconButton, TextField, Typography } from "@mui/material";

import { EditTextProps } from "./types";

const EditText: FC<EditTextProps> = ({
  onCancel,
  onSuccess,
  inputProps,
  textProps,
}) => {
  const [canEdit, setCanEdit] = useState(false);

  const handleEdit = (value: boolean) => {
    setCanEdit(value);
  };

  const handleSuccess = () => {
    onSuccess?.();
    setCanEdit(false);
  };

  const handleCancel = () => {
    onCancel?.();
    setCanEdit(false);
  };

  return (
    <Box display="flex" alignItems="center">
      {canEdit && (
        <>
          <TextField sx={{ marginRight: 1 }} {...inputProps} />
          <IconButton onClick={handleSuccess}>
            <DoneIcon />
          </IconButton>
          <IconButton onClick={handleCancel}>
            <DoDisturbAltIcon />
          </IconButton>
        </>
      )}
      {!canEdit && (
        <>
          <Typography sx={{ marginRight: 1 }} {...textProps}>
            123
          </Typography>
          <IconButton onClick={() => handleEdit(true)}>
            <EditIcon />
          </IconButton>
        </>
      )}
    </Box>
  );
};

export default memo(EditText);
