import React from "react";
import CustomPrimaryButton from "../../Shared/CustomPrimaryButton";
import RedirectInfo from "../../Shared/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const getFormNotValidMessage = () => {
  return "Enter Valid Email/Password";
};
const getFormValidMessage = () => {
  return "Press to Register";
};

const RegisterPageFooter = (props) => {
  const { handleRegister, isFormValid } = props;
  const navigate = useNavigate();
  const handlePushToLogInPage = () => {
    navigate("/login");
  };
  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Sign Up"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          ></CustomPrimaryButton>
        </div>
      </Tooltip>

      <RedirectInfo
        text="Already Have an Account? "
        redirectText="Log In"
        additionalStyles={{ margin: "5px" }}
        redirectHandler={handlePushToLogInPage}
      />
    </>
  );
};

export default RegisterPageFooter;
