import React, { FC } from "react";
import { Paper, SxProps } from "@mui/material";

import { IComponentWithChildren } from "../../types";

const PaperContainer: FC<IComponentWithChildren & { sx?: SxProps }> = ({
  children,
  sx,
}) => {
  return <Paper sx={{ padding: 2, ...sx }}>{children}</Paper>;
};

export default PaperContainer;
