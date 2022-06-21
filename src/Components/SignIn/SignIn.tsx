import { ReactElement, useState } from "react";
import IDgenerator from "../../helpers/IDgenerator";
import Input from "../Input/Input";
import "./SignIn.scss";

export default function SignIn(): ReactElement {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [existEmailMessage, setExistEmailMessage] = useState("");
  const [isValidName, setIsValidName] = useState(false);
  const [isValidSurname, setIsValidSurname] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const nameCheck = /^[a-zA-Z ]{1,30}$/;
    const isValid = nameCheck.test(e.target.value);
    if (isValid) {
      setIsValidName(true);
      setName(e.target.value);
    } else {
      setIsValidName(false);
    }
  };

  const handleChangeSurname = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const surnameCheck = /^[a-zA-Z ]{1,30}$/;
    const isValid = surnameCheck.test(e.target.value);
    if (isValid) {
      setIsValidSurname(true);
      setSurname(e.target.value);
    } else {
      setIsValidSurname(false);
    }
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    for (let i = 0; i < users.length; i++) {
      if (users[i]?.email === e.target.value) {
        setExistEmailMessage("You're registered, please login");
        break;
      } else {
        setExistEmailMessage("");
      }
    }
    setEmail(e.target.value);
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

  const handleChangePassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(e.target.value);
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

  const onRegister = (): void => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    localStorage.setItem(
      "users",
      JSON.stringify([
        ...users,
        {
          id: IDgenerator(users),
          name: name,
          surname: surname,
          email: email,
          password: password,
        },
      ])
    );

    localStorage.setItem(
      "currentUser",
      JSON.stringify([
        {
          id: IDgenerator(users),
          name: name,
          surname: surname,
          email: email,
          password: password,
        },
      ])
    );
  };

  const checkValidation =
    isValidEmail &&
    isValidPassword &&
    isValidName &&
    isValidSurname &&
    !existEmailMessage;

  return (
    <div className="sign-in-form">
      <form>
        <Input type="text" placeholder="name" onChange={handleChangeName} />
        <Input
          type="text"
          placeholder="surname"
          onChange={handleChangeSurname}
        />
        <Input type="email" placeholder="email" onChange={handleChangeEmail} />
        <p>{existEmailMessage}</p>
        <Input
          type="password"
          placeholder="password"
          onChange={handleChangePassword}
        />

        <button onClick={onRegister} disabled={!checkValidation}>
          Sign In
        </button>
      </form>
    </div>
  );
}
