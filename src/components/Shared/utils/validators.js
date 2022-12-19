export const validateLoginFromRequest = ({ mail, password }) => {
  const isMailValid = validateMail(mail);
  const isPasswordValid = validatePassword(password);
  return isMailValid && isPasswordValid;
};

export const validateRegisterForm = ({ mail, password, username }) => {
  const isMailValid = validateMail(mail);
  const isPasswordValid = validatePassword(password);
  const isUsernameValid = validateUsername(username);
  return isMailValid && isPasswordValid && isUsernameValid;
};

export const validatePassword = (password) => {
  return password.length > 6 && password.length < 12;
};

export const validateMail = (mail) => {
  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return pattern.test(mail);
};

export const validateUsername = (username) => {
  return username.length > 2;
};
