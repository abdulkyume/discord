import React, { useEffect, useState } from "react";
import { validateMail } from "../../Shared/utils/validators";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import InputWithLabel from "../../Shared/InputWithLabel";
import CustomPrimaryButton from "../../Shared/CustomPrimaryButton";
import { connect } from "react-redux";
import { getActions } from "../../../store/actions/friendsActions";

const AddFriendDialog = ({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation = () => {},
}) => {
  const [mail, setmail] = useState("");
  const [isFormValid, setisFormValid] = useState("");

  const handleSendInvitation = () => {
    sendFriendInvitation(
      {
        targetMailAdderss: mail,
      },
      handleCloseDialog
    );
  };
  const handleCloseDialog = () => {
    closeDialogHandler();
    setmail("");
  };

  useEffect(() => {
    setisFormValid(validateMail(mail));
  }, [mail, setisFormValid]);
  return (
    <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
      <DialogTitle>
        <Typography>Invite A Friend</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography>
            Enter email addres of friend which you would like to invite
          </Typography>
        </DialogContentText>
        <InputWithLabel
          label="Mail"
          type="email"
          value={mail}
          setValue={setmail}
          placeholder="Enter Emaill Address"
        />
      </DialogContent>
      <DialogActions>
        <CustomPrimaryButton
          onClick={handleSendInvitation}
          disabled={!isFormValid}
          label="send"
          additionalStyles={{
            marginLeft: "15px",
            marginRight: "15px",
            marginBottom: "10px",
          }}
        />
      </DialogActions>
    </Dialog>
  );
};

const mapActionsToprops = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};
export default connect(null, mapActionsToprops)(AddFriendDialog);
