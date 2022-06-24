import { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import IDgenerator from "../../helpers/IDgenerator";
import { ICurrentUser } from "../../models/CurrentUser";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./SignIn.scss";

export default function SignIn(): ReactElement {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidName, setIsValidName] = useState(false);
  const [isValidSurname, setIsValidSurname] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [existEmailMessage, setExistEmailMessage] = useState("");
  const [isValidNameMessage, setIsValidNameMessage] = useState("");
  const [isValidSurnameMessage, setIsValidSurnameMessage] = useState("");
  const [isValidEmailMessage, setIsValidEmailMessage] = useState("");
  const [isValidPasswordMessage, setIsValidPasswordMessage] = useState("");

  const navigate = useNavigate();

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsValidNameMessage("");
    const nameCheck = /^[a-zA-Z ]{1,30}$/;
    const isValid = nameCheck.test(e.target.value);

    if (isValid) {
      setName(e.target.value);
      setIsValidName(true);
    } else {
      setIsValidName(false);
      setIsValidNameMessage("Please, enter a valid name");
    }
  };

  const handleChangeSurname = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setIsValidSurnameMessage("");
    const surnameCheck = /^[a-zA-Z ]{1,30}$/;
    const isValid = surnameCheck.test(e.target.value);

    if (isValid) {
      setSurname(e.target.value);
      setIsValidSurname(true);
    } else {
      setIsValidSurname(false);
      setIsValidSurnameMessage("Please, enter a valid surname");
    }
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsValidEmailMessage("");

    const mailCheck =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const isValid = mailCheck.test(e.target.value);

    if (!isValid) {
      setIsValidEmailMessage("Please, enter a valid email");
      setIsValidEmail(false);
    } else {
      setEmail(e.target.value);
      setIsValidEmail(true);

      const users = JSON.parse(localStorage.getItem("users") || "[]");
      setExistEmailMessage("");

      for (let i = 0; i < users.length; i++) {
        if (users[i]?.email === e.target.value) {
          setExistEmailMessage("You're registered, please login");
          break;
        }
      }
    }
  };

  const handleChangePassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setIsValidPasswordMessage("");

    const passwordCheck =
      /^(?=.*[0-9])(?=.*[!@#$%^&*?])[a-zA-Z0-9!@#$%^&*?]{6,16}$/;
    const isValid = passwordCheck.test(e.target.value);

    if (isValid) {
      setPassword(e.target.value);
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
      setIsValidPasswordMessage("Please, enter a valid password");
    }
  };

  const onRegister = (): void => {
    const isValidData =
      isValidName && isValidSurname && isValidEmail && isValidPassword;

    if (!isValidData) {
      return;
    }

    const users: ICurrentUser[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );
    const currentUser: ICurrentUser = {
      id: IDgenerator(users),
      name: name,
      surname: surname,
      email: email,
      password: password,
    };

    localStorage.setItem("users", JSON.stringify([...users, currentUser]));
    localStorage.setItem("currentUser", JSON.stringify([currentUser]));

    navigate("/");
  };

  return (
    <div className="sign-in-form">
      <Input type="text" placeholder="name" onChange={handleChangeName} />
      <p>{isValidNameMessage}</p>
      <Input type="text" placeholder="surname" onChange={handleChangeSurname} />
      <p>{isValidSurnameMessage}</p>
      <Input type="email" placeholder="email" onChange={handleChangeEmail} />
      <p>{existEmailMessage}</p>
      <p>{isValidEmailMessage}</p>
      <Input
        type="password"
        placeholder="password"
        onChange={handleChangePassword}
      />
      <p>{isValidPasswordMessage}</p>
      <Button className="auth" onClick={onRegister} title="Sign in" />
    </div>
  );
}
