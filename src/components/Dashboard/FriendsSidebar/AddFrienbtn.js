import React, { useState } from "react";
import CustomPrimaryButton from "../../Shared/CustomPrimaryButton";
import AddFriendDialog from "./AddFriendDialog";

const additionalStyles = {
  marginTop: "10px",
  marginLeft: "5px",
  width: "80%",
  height: "30px",
  background: "#3ba55d",
};

const AddFrienbtn = () => {
  const [isDialogOpen, setisDialogOpen] = useState(false);
  const handleOpenAddFriend = () => {
    setisDialogOpen(true);
  };
  const handleCloseAddFriend = () => {
    setisDialogOpen(false);
  };

  return (
    <>
      <CustomPrimaryButton
        additionalStyles={additionalStyles}
        label={"Add Friend"}
        onClick={handleOpenAddFriend}
      />
      <AddFriendDialog
        isDialogOpen={isDialogOpen}
        closeDialogHandler={handleCloseAddFriend}
      />
    </>
  );
};

export default AddFrienbtn;
