import React from "react";
import CustomPrimaryButton from "../../Shared/CustomPrimaryButton";
import RedirectInfo from "../../Shared/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const getFormNotValidMessage = () => {
  return "Enter Valid Email/Password";
};
const getFormValidMessage = () => {
  return "Press to Log In";
};

const LoginPageFooter = (props) => {
  const { handleLogin, isFormValid } = props;
  const navigate = useNavigate();
  const handlePushToRegisterPage = () => {
    navigate("/register");
  };
  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Log In"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          ></CustomPrimaryButton>
        </div>
      </Tooltip>

      <RedirectInfo
        text="Need an Account? "
        redirectText="Create an Account"
        additionalStyles={{ margin: "5px" }}
        redirectHandler={handlePushToRegisterPage}
      />
    </>
  );
};

export default LoginPageFooter;
