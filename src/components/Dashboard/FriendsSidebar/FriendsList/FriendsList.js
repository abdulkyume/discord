import React from "react";
import { styled } from "@mui/system";
import FriendsListitem from "./FriendsListitem";

const demodata = [
  { id: 1, username: "abst1", isOnline: true },
  { id: 2, username: "cdst2", isOnline: false },
  { id: 3, username: "efst3", isOnline: true },
];

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});
const FriendsList = () => {
  return (
    <MainContainer>
      {demodata.map((f) => (
        <FriendsListitem
          key={f.id}
          username={f.username}
          id={f.id}
          online={f.isOnline}
        />
      ))}
    </MainContainer>
  );
};

export default FriendsList;
