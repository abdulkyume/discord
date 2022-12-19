import React from "react";
import { Check,Clear } from "@mui/icons-material";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";

const InvitationDecisonButtons = ({
  disabled,
  acceptFriendInvitaion,
  rejectFriendInvitaion,
}) => {
  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        style={{ color: "white" }}
        disabled={disabled}
        onClick={acceptFriendInvitaion}
      >
        <Check />
      </IconButton>
      <IconButton
        style={{ color: "white" }}
        disabled={disabled}
        onClick={rejectFriendInvitaion}
      >
        <Clear />
      </IconButton>
    </Box>
  );
};

export default InvitationDecisonButtons;
