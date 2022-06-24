import { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ICurrentUser } from "../../models/CurrentUser";
import Button from "../Button/Button";
import Input from "../Input/Input";

export default function Login(): ReactElement {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [existEmailMessage, setExistEmailMessage] = useState("");
  const [wrongPasswordMessage, setWrongPasswordMessage] = useState("");
  const navigate = useNavigate();

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
    setExistEmailMessage("");
  };

  const handleChangePassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(e.target.value);
    setWrongPasswordMessage("");
  };

  const onRegister = (): void => {
    const users: ICurrentUser[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

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
      return;
    }

    if (users[id].password !== password) {
      setWrongPasswordMessage("Wrong password!");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify([users[id]]));
    navigate("/");
  };

  return (
    <div className="sign-in-form">
      <Input type="email" placeholder="email" onChange={handleChangeEmail} />
      <p>{existEmailMessage}</p>
      <Input
        type="password"
        placeholder="password"
        onChange={handleChangePassword}
      />
      <p>{wrongPasswordMessage}</p>

      <Button className="auth" onClick={onRegister} title="Log in" />
    </div>
  );
}
