import React, { FC } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import WorkIcon from "@mui/icons-material/Work";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  Paper,
} from "@mui/material";

import CostEdit from "../CostEdit";

const CostItem: FC<{ isEdit?: boolean }> = ({ isEdit = false }) => (
  <Paper sx={{ marginBottom: 2, paddingY: 1, paddingRight: 2 }}>
    <ListItem
      sx={{ cursor: "pointer" }}
      secondaryAction={
        <>
          {isEdit && (
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          )}
        </>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <WorkIcon />
        </Avatar>
      </ListItemAvatar>
      <CostEdit isEdit={isEdit} />
    </ListItem>
  </Paper>
);

export default CostItem;
