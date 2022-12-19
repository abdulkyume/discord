import React from "react";
import { styled } from "@mui/system";
import MainPagebtn from "./MainPagebtn";

const MainContainer = styled("div")({
  width: "72px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#202225",
});

const Sidebar = () => {
  return (
    <MainContainer>
      <MainPagebtn />
    </MainContainer>
  );
};

export default Sidebar;
