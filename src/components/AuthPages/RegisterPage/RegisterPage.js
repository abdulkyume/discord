import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import AuthBox from "../../Shared/AuthBox";
import { validateRegisterForm } from "../../Shared/utils/validators";
import RegisterPageFooter from "./RegisterPageFooter";
import RegisterPageInputs from "./RegisterPageInputs";
import { connect } from "react-redux";
import { getActions } from "../../../store/actions/authAction";
import { useNavigate } from "react-router-dom";
import { register } from "../../../api";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isFormValid, setisFormValid] = useState(false);

  useEffect(() => {
    setisFormValid(
      validateRegisterForm({
        mail,
        username,
        password,
      })
    );
  }, [mail, username, password, setisFormValid]);

  const handleRegister = () => {
    const userDetails = {
      username,
      mail,
      password,
    };
    register(userDetails, navigate);
  };
  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create An Account
      </Typography>
      <RegisterPageInputs
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
        username={username}
        setUsername={setUsername}
        isFormValid={isFormValid}
      />
      <RegisterPageFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
      />
    </AuthBox>
  );
};
const mapActionsTopops = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};
export default connect(null, mapActionsTopops)(RegisterPage);
