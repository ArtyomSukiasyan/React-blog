export default function IDgenerator(arr: any): number {
  if (arr.length === 0) {
    return 1;
  } else {
    return arr[arr.length - 1].id + 1;
  }
}
