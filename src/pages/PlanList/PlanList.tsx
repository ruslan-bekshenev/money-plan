import React from "react";
import { useNavigate } from "react-router-dom";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from "@mui/material";

import MainLayout from "../../layouts/MainLayout/MainLayout";

const PlanList = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <List dense>
        <Paper sx={{ marginBottom: 2, paddingY: 1, paddingRight: 2 }}>
          <ListItem
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("./1")}
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <AccountBalanceIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Single-line item" />
          </ListItem>
        </Paper>
        <Paper sx={{ marginBottom: 2, paddingY: 1, paddingRight: 2 }}>
          <ListItem
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("./1")}
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <AccountBalanceIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Single-line item" />
          </ListItem>
        </Paper>
      </List>
    </MainLayout>
  );
};

export default PlanList;
