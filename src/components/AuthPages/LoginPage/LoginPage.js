import React, { useState, useEffect } from "react";
import AuthBox from "../../Shared/AuthBox";
import { validateLoginFromRequest } from "../../Shared/utils/validators";
import LoginPageFooter from "./LoginPageFooter";
import LoginPageHeader from "./LoginPageHeader";
import LogInPageInputs from "./LogInPageInputs";
import { connect } from "react-redux";
import { getActions } from "../../../store/actions/authAction";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ login }) => {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setisFormValid] = useState(false);

  useEffect(() => {
    setisFormValid(validateLoginFromRequest({ mail, password }));
  }, [mail, password, isFormValid]);

  const handleLogIn = () => {
    const userDetails = {
      mail,
      password,
    };
    login(userDetails, navigate);
  };
  return (
    <AuthBox>
      <LoginPageHeader></LoginPageHeader>
      <LogInPageInputs
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogIn} />
    </AuthBox>
  );
};
const mapActionsTopops = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};
export default connect(null, mapActionsTopops)(LoginPage);
