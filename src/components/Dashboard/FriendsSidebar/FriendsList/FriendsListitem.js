import Button from "@mui/material/Button";
import React from "react";
import Avatar from "../../../Shared/utils/Avatar";
import { Typography } from "@mui/material";
import OnlineIndicator from "./OnlineIndicator";

const FriendsListitem = ({ id, username, online }) => {
  return (
    <Button
      style={{
        width: "100%",
        height: "42px",
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        textTransform: "none",
        color: "black",
        position: "relative",
      }}
    >
      <Avatar username={username} />
      <Typography
        style={{ marginLeft: "7px", fontWeight: 700, color: "#8e9297" }}
      >
        {username}
      </Typography>

      {online && <OnlineIndicator />}
    </Button>
  );
};

export default FriendsListitem;
