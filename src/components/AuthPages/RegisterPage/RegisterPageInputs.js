import React from "react";
import InputWithLabel from "../../Shared/InputWithLabel";

const RegisterPageInputs = (props) => {
  const { mail, setMail, username, setUsername, password, setPassword } = props;
  return <>
  <InputWithLabel
  username={username}
  setValue={setUsername}
  label ="Username"
  type="text"
  placeholder="Enter a username"
  />
  <InputWithLabel
  value={mail}
  setValue={setMail}
  label ="Email"
  type="email"
  placeholder="Enter an email"
  />
  <InputWithLabel
  password={password}
  setValue={setPassword}
  label ="Password"
  type="password"
  placeholder="Enter Password"
  />
  </>;
};

export default RegisterPageInputs;
