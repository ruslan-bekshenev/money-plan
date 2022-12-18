import React, { FC } from "react";
import { Box } from "@mui/material";
import { Container } from "@mui/system";

import { IComponentWithChildren } from "../../types";

const MainLayout: FC<IComponentWithChildren> = ({ children }) => {
  return (
    <Box marginY={10}>
      <Container maxWidth="md">{children}</Container>
    </Box>
  );
};

export default MainLayout;
