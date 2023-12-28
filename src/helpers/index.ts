export function showLog<T>(message: T) {
  console.log(message);
  return message as T;
}
