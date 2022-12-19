import { Tooltip, Typography, Box } from "@mui/material";
import Avatar from "../../../Shared/utils/Avatar";
import React, { useState } from "react";
import InvitationDecisonButtons from "./InvitationDecisonButtons";

const PendingInvitationsListItem = ({
  id,
  username,
  mail,
  acceptFriendInvitaion = () => {},
  rejectFriendInvitaion = () => {},
}) => {
  const [buttonDisabled, setbuttonDisabled] = useState(false);
  const handleAcceptInvitation = () => {
    acceptFriendInvitaion({ id });
    setbuttonDisabled(true);
  };
  const handleRejectInvitation = () => {
    rejectFriendInvitaion({ id });
    setbuttonDisabled(false);
  };
  return (
    <Tooltip title={mail}>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "42px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avatar username={username} />
          <Typography
            sx={{
              marginLeft: "7px",
              fontWeight: 700,
              color: "#8e9297",
              flexGrow: 1,
            }}
          >
            {username}
          </Typography>
          <InvitationDecisonButtons
            disabled={buttonDisabled}
            acceptFriendInvitaion={handleAcceptInvitation}
            rejectFriendInvitaion={handleRejectInvitation}
          />
        </Box>
      </div>
    </Tooltip>
  );
};

export default PendingInvitationsListItem;
