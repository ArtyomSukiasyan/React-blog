import { ICurrentUser } from "../models/CurrentUser";
import { IPost } from "../models/Post";

export default function IDgenerator(arr: Array<IPost | ICurrentUser>): number {
  if (arr.length === 0) {
    return 1;
  }

  return arr[arr.length - 1].id + 1;
}
