import { ICurrentUser } from "../models/CurrentUser";
import { IPost } from "../models/Post";

export function localStorageSetItem(
  key: string,
  value: Array<IPost | ICurrentUser>
): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.log(err);
  }
}
