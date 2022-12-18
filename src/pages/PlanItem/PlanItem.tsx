import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Grid, List, Typography } from "@mui/material";

import CostItem from "../../components/CostItem";
import EditText from "../../components/EditText";
import PaperContainer from "../../components/PaperContainer";
import MainLayout from "../../layouts/MainLayout/MainLayout";

import { FlexBox } from "./styles";

const PlanItem = () => {
  const [canEdit, setCanEdit] = useState(false);
  const handleEdit = () => {
    setCanEdit((value) => !value);
  };
  return (
    <MainLayout>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        sx={{ marginBottom: 3 }}
      >
        <EditText textProps={{ variant: "h3" }} isEdit={canEdit} />
        <Box display="flex" alignItems="center">
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleEdit}
          >
            Редактировать
          </Button>
        </Box>
      </Box>
      <Grid container spacing={2} sx={{ mb: 6 }}>
        <Grid item sm={6}>
          <PaperContainer>
            <FlexBox>
              <Typography className="title" variant="h5">
                Бюджет:
              </Typography>
              <Box>
                <EditText
                  textProps={{ variant: "h5" }}
                  inputProps={{ size: "small" }}
                  isEdit={canEdit}
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
        </Box>
        <Box>
          <List dense>
            <CostItem isEdit={canEdit} />
            <CostItem isEdit={canEdit} />
            <CostItem isEdit={canEdit} />
          </List>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default PlanItem;
