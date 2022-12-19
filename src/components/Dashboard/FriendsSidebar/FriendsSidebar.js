import React from "react";
import { styled } from "@mui/system";
import AddFrienbtn from "./AddFrienbtn";
import FriendsTitle from "./FriendsTitle";
import FriendsList from "./FriendsList/FriendsList";
import PendingInvitationsList from "./PendingInvitationsList/PendingInvitationsList";

const MainContainer = styled("div")({
  width: "224px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2F3136",
});

const FriendsSidebar = () => {
  return (
    <MainContainer>
      <AddFrienbtn />
      <FriendsTitle title='Priveate Mesages'/>
      <FriendsList/>
      <FriendsTitle title='Invitations'/>
      <PendingInvitationsList/>
    </MainContainer>
  );
};

export default FriendsSidebar;
