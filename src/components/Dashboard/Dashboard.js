import React, { useEffect } from "react";
import { styled } from "@mui/system";
import Sidebar from "./Sidebar/Sidebar";
import FriendsSidebar from "./FriendsSidebar/FriendsSidebar";
import Messenger from "./Messenger/Messenger";
import Appbar from "./Appbar/Appbar";
import { logout } from "../Shared/utils/auth";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authAction";
import { connectWithSocketServer } from "../../realtime/socketConnection";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const Dashboard = ({ setUserDetails }) => {
  useEffect(() => {
    const userDetails = localStorage.getItem("user");
    if (!userDetails) {
      logout();
    } else {
      setUserDetails(JSON.parse(userDetails));
      connectWithSocketServer(JSON.parse(userDetails));
    }
  }, []);
  return (
    <Wrapper>
      <Sidebar />
      <FriendsSidebar />
      <Messenger />
      <Appbar />
    </Wrapper>
  );
};

const mapActionToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};
export default connect(null, mapActionToProps)(Dashboard);
