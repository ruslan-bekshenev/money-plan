import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import DoDisturbAltIcon from "@mui/icons-material/DoDisturbAlt";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import WorkIcon from "@mui/icons-material/Work";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  Paper,
} from "@mui/material";

import CostEdit from "../CostEdit";
import EditText from "../EditText";

const CostItem = () => {
  const [canEdit, setCanEdit] = useState(false);
  const handleEdit = () => setCanEdit(true);
  const handleCancel = () => setCanEdit(false);
  return (
    <Paper sx={{ marginBottom: 2, paddingY: 1, paddingRight: 2 }}>
      <ListItem
        sx={{ cursor: "pointer" }}
        secondaryAction={
          <>
            {!canEdit && (
              <>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  sx={{ mr: 1 }}
                  onClick={handleEdit}
                >
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </>
            )}
            {canEdit && (
              <>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  sx={{ mr: 1 }}
                  onClick={handleCancel}
                >
                  <DoneIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={handleCancel}
                >
                  <DoDisturbAltIcon />
                </IconButton>
              </>
            )}
          </>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <CostEdit isEdit={canEdit} />
      </ListItem>
    </Paper>
  );
};

export default CostItem;
