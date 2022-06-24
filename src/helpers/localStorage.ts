export function localStorageSetItem(key: string, value: Array<any>): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.log(err);
  }
}
