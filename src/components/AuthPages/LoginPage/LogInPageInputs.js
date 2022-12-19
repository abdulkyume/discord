import React from "react";
import InputWithLabel from "../../Shared/InputWithLabel";

const LogInPageInputs = (props) => {
  const { mail, setMail, password, setPassword } = props;
  return (
    <>
      <InputWithLabel
        defaultValue={mail}
        setValue={setMail}
        label="E-mail"
        type="email"
        placeholder="Enter E-mail Address"
      ></InputWithLabel>
      <InputWithLabel
        defaultValue={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter Password"
      ></InputWithLabel>
    </>
  );
};

export default LogInPageInputs;
