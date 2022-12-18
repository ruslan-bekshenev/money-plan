import React, { FC, memo } from "react";
import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

const CostEdit: FC<{ isEdit?: boolean }> = ({ isEdit = "false" }) => {
  const val = 12000;
  if (!isEdit) {
    return (
      <Box>
        <Typography>Еда</Typography>
        <Typography typography="h5" fontWeight={600}>
          {val.toLocaleString("ru-RU")}
        </Typography>
      </Box>
    );
  }
  return (
    <Box>
      <TextField label="Название" sx={{ marginRight: 1 }} size="small" />
      <TextField
        type="number"
        label="Сумма"
        sx={{ marginRight: 1 }}
        size="small"
      />
    </Box>
  );
};

export default memo(CostEdit);
