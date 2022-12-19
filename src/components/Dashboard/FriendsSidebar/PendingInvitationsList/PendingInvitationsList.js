import React from "react";
import { styled } from "@mui/system";
import PendingInvitationsListItem from "./PendingInvitationsListItem";

const demodata = [
  { id: 1, senderId: { username: "abst1", mail: "abst1@aas.com" } },
  { id: 2, senderId: { username: "cdst2", mail: "cdt1@aas.com" } },
  { id: 3, senderId: { username: "efst3", mail: "efst1@aas.com" } },
];
const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});
const PendingInvitationsList = () => {
  return (
    <MainContainer>
      {demodata.map((invite) => (
        <PendingInvitationsListItem
          key={invite.id}
          id={invite.id}
          username={invite.senderId.username}
          mail={invite.senderId.mail}
        />
      ))}
    </MainContainer>
  );
};

export default PendingInvitationsList;
