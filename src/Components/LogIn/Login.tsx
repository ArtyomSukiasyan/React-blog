import { useState } from "react";
import Input from "../Input/Input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [existEmailMessage, setExistEmailMessage] = useState("");
  const [wrongPasswordMessage, setWrongPasswordMessage] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setExistEmailMessage("");
    const mailCheck =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const isValid = mailCheck.test(e.target.value);
    if (isValid) {
      setIsValidEmail(true);
    } else if (e.target.value === "") {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(false);
    }
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setWrongPasswordMessage("");

    const passwordCheck =
      /^(?=.*[0-9])(?=.*[!@#$%^&*?])[a-zA-Z0-9!@#$%^&*?]{6,16}$/;
    const isValid = passwordCheck.test(e.target.value);
    if (isValid) {
      setIsValidPassword(true);
    } else if (e.target.value === "") {
      setIsValidPassword(false);
    } else {
      setIsValidPassword(false);
    }
  };

  const onRegister = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    let getEmail = false;
    let id = -1;
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email) {
        getEmail = true;
        id = i;
      }
    }
    if (!getEmail) {
      setExistEmailMessage("Email not found, please register");
    } else if (users[id].password !== password) {
      setWrongPasswordMessage("Wrong password!");
    } else {
      localStorage.setItem("currentUser", JSON.stringify([users[id]]));
    }
  };

  const checkValidation = isValidEmail && isValidPassword && !existEmailMessage;

  return (
    <div className="sign-in-form">
      <form action="">
        <Input type="email" placeholder="email" onChange={handleChangeEmail} />
        <p>{existEmailMessage}</p>
        <Input
          type="password"
          placeholder="password"
          onChange={handleChangePassword}
        />
        <p>{wrongPasswordMessage}</p>

        <button onClick={onRegister} disabled={!checkValidation}>
          Log In
        </button>
      </form>
    </div>
  );
}
