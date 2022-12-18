import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import EditText from "../../components/EditText";
import PaperContainer from "../../components/PaperContainer";
import MainLayout from "../../layouts/MainLayout/MainLayout";

import { FlexBox } from "./styles";

const PlanItem = () => {
  return (
    <MainLayout>
      <PaperContainer sx={{ marginBottom: 2 }}>
        <EditText textProps={{ variant: "h3" }} />
      </PaperContainer>
      <Grid container spacing={2}>
        <Grid item sm={6}>
          <PaperContainer>
            <FlexBox>
              <Typography className="title" variant="h5">
                Бюджет:
              </Typography>
              <Box>
                <EditText
                  inputProps={{ size: "small" }}
                  textProps={{ variant: "h5" }}
                />
              </Box>
            </FlexBox>
          </PaperContainer>
        </Grid>
        <Grid item sm={6}>
          <PaperContainer>
            <FlexBox>
              <Typography className="title" variant="h5">
                Остаток:
              </Typography>
              <Box>
                <Typography variant="h5">123</Typography>
              </Box>
            </FlexBox>
          </PaperContainer>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default PlanItem;
