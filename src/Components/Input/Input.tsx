import { IInput } from "../../models/Input";

export default function Input({ type, placeholder, onChange }: IInput) {
  return <input type={type} placeholder={placeholder} onChange={onChange} />;
}
