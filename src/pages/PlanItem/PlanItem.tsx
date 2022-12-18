import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Grid, IconButton, List, Typography } from "@mui/material";

import CostItem from "../../components/CostItem";
import EditText from "../../components/EditText";
import PaperContainer from "../../components/PaperContainer";
import MainLayout from "../../layouts/MainLayout/MainLayout";

import { FlexBox } from "./styles";

const PlanItem = () => {
  return (
    <MainLayout>
      <PaperContainer sx={{ marginBottom: 3 }}>
        <EditText textProps={{ variant: "h3" }} />
      </PaperContainer>
      <Grid container spacing={2} sx={{ mb: 6 }}>
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
      <Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h4" sx={{ mb: 0 }}>
            Список затрат
          </Typography>
          <Button variant="contained" startIcon={<AddIcon />}>
            Добавить
          </Button>
        </Box>
        <Box>
          <List dense>
            <CostItem />
            <CostItem />
            <CostItem />
          </List>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default PlanItem;
